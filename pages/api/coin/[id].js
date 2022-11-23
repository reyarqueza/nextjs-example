// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { id } = req.query;
  const url = `https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`;
  const response = await fetch(url);
  const json = await response.json();

  res.status(200).json(json);
}
