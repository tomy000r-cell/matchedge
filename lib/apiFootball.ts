export const BASE_URL = "https://v3.football.api-sports.io/";

export const getHeaders = () => ({
  "x-apisports-key": process.env.NEXT_PUBLIC_API_FOOTBALL_KEY,
});
