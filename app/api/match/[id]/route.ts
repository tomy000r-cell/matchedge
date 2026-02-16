import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const matchId = params.id;

  const url =
    "https://v3.football.api-sports.io/fixtures?id=" + matchId;

  try {
    const response = await fetch(url, {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY || "",
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur récupération match" },
      { status: 500 }
    );
  }
}
