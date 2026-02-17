export const BASE_URL = "https://v3.football.api-sports.io";

export function getHeaders() {
  const apikey = process.env.API_FOOTBALL_KEY;

  if (!apikey) {
    throw new Error("API_FOOTBALL_KEY manquante");
  }

  return {
    "x-apisports-key": apikey,
  };
}
