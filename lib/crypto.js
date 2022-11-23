export async function crypto() {
  const ids = ["the-sandbox", "decentraland", "mobox", "vulcan-forged"];
  const currencies = ["USD", "JPY", "CNY"];
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join()}&vs_currencies=${currencies.join()}`;

  const response = await fetch(url);
  const json = await response.json();

  return json;
}
