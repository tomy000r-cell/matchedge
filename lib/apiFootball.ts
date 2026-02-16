export const BASE_URL = "https://v3.football.api-sports.io/";

export const getHeaders = () => ({
  "x-apisports-key": process.env.FOOTBALL_API_KEY!,
});
