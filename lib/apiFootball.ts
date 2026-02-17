const BASE_URL = "https://v3.football.api-sports.io";

export async function fetchFromApi(endpoint: string) {
  const apiKey = process.env.API_FOOTBALL_KEY;

  if (!apiKey) {
    throw new Error("API_FOOTBALL_KEY manquante");
  }

  const response = await fetch(${BASE_URL}${endpoint}, {
    headers: {
      "x-apisports-key": apiKey,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erreur API-Football");
  }

  return response.json();
}
