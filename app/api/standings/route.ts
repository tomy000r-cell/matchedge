import { NextResponse } from "next/server";
import { BASE_URL, getHeaders } from "@/lib/apiFootball";

export async function GET() {
  try {
    const leagueId = 61;
    const season = 2024;

    const url =
      BASE_URL +
      "standings?league=" +
      leagueId +
      "&season=" +
      season;

    const response = await fetch(url, {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}