import { NextResponse } from "next/server";
import { fetchFromApi } from "@/lib/apiFootball";

export async function GET() {
  try {
    const data = await fetchFromApi(
      "/standings?league=61&season=2023"
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur récupération standings" },
      { status: 500 }
    );
  }
}
