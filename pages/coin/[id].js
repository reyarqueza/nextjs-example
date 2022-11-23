import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function Coin() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`/api/coin/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const {
    name,
    description,
    symbol,
    asset_platform_id,
    detail_platforms,
    categories,
  } = data;

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{name}</h1>
      <ul>
        <li>{symbol}</li>
        <li>{asset_platform_id}</li>
      </ul>

      <h2>Platforms</h2>
      <ul>
        {Object.keys(detail_platforms).map((platform) => {
          return (
            <li key={platform}>
              {platform} - {detail_platforms[platform].contract_address}
            </li>
          );
        })}
      </ul>

      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>

      <p dangerouslySetInnerHTML={{ __html: description.en }} />
    </div>
  );
}
