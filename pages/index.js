import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { crypto } from "../lib/crypto";

export async function getServerSideProps(context) {
  const coinList = await crypto();

  return {
    props: { coinList }, // will be passed to the page component as props
  };
}

export default function Home({ coinList }) {
  console.log(coinList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to the Metaverse</title>
        <meta name="description" content="Various Metaverse Sites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Metaverse!</h1>

        <p className={styles.description}>
          Get started by exploring the Metaverse!
          <br />
          It's a new an open web3 driven world!
        </p>

        <div className={styles.grid}>
          {Object.keys(coinList).map((coin) => {
            return (
              <Link
                key={`link-${coin}`}
                href={`/coin/${coin}`}
                className={styles.card}
              >
                <h2>{coin} &rarr;</h2>
                <ul>
                  {Object.keys(coinList[coin]).map((currency) => {
                    return (
                      <li key={currency}>
                        {currency} - {coinList[coin][currency]}
                      </li>
                    );
                  })}
                </ul>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
