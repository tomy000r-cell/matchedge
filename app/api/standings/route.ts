import { NextResponse } from "next/server";
import { BASE_URL, getHeaders } from "@/lib/apiFootball";

export async function GET() {
  try {
    const response = await fetch(
  BASE_URL + "/standings?league=61&season=2024",
      {
        headers: getHeaders(),
        next: { revalidate: 3600 },
      }
    );

    const data = await response.json();

    return NextResponse.json(data.response);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur récupération classement" },
      { status: 500 }
    );
  }
}
