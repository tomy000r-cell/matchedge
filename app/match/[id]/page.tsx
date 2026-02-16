import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function MatchPage({ params }: PageProps) {
  const matchId = params.id;

  if (!matchId) {
    notFound();
  }

  const res = await fetch(
  https://v3.football.api-sports.io/fixtures?id=${matchId},
    {
      headers: {
        "x-apisports-key": process.env.FOOTBALL_API_KEY || "",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch match data");
  }

  const data = await res.json();
  const match = data?.response?.[0];

  if (!match) {
    notFound();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>
        {match.teams.home.name} vs {match.teams.away.name}
      </h1>

      <h2>
        {match.goals.home} - {match.goals.away}
      </h2>

      <p>Status: {match.fixture.status.long}</p>
      <p>
        Date: {new Date(match.fixture.date).toLocaleString("fr-FR")}
      </p>
      <p>Stadium: {match.fixture.venue.name}</p>
      <p>League: {match.league.name}</p>
    </div>
  );
}