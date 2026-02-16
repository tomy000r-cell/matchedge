import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const matchId = context.params.id;

  const url =
    "https://v3.football.api-sports.io/fixtures?id=" + matchId;

  const response = await fetch(url, {
    headers: {
      "x-apisports-key": process.env.FOOTBALL_API_KEY!,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}
