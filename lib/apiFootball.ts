export function getHeaders() {
  const apiKey = process.env.API_FOOTBALL_KEY;

  if (!apiKey) {
    throw new Error("API_FOOTBALL_KEY manquante");
  }

  return {
    "x-apisports-key": apiKey,
  };
}
