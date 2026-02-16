import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://v3.football.api-sports.io/fixtures?league=61&season=2024", {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY!,
      },
    });

    const data = await response.json();

    return NextResponse.json(data.response);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur récupération matchs" },
      { status: 500 }
    );
  }
}