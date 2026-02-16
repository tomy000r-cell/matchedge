import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MatchPage({ params }: PageProps) {
  const matchId = params.id;

  if (!matchId) {
    return notFound();
  }

  const res = await fetch(
    https://v3.football.api-sports.io/fixtures?id=${matchId},
    {
      headers: {
        "x-apisports-key": process.env.FOOTBALL_API_KEY!,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors du chargement du match");
  }

  const data = await res.json();
  const match = data.response?.[0];

  if (!match) {
    return notFound();
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>
        {match.teams.home.name} vs {match.teams.away.name}
      </h1>

      <h2>
        {match.goals.home} - {match.goals.away}
      </h2>

      <p>Status : {match.fixture.status.long}</p>

      <p>Date : {new Date(match.fixture.date).toLocaleString()}</p>

      <hr />

      <h3>Stade</h3>
      <p>{match.fixture.venue.name}</p>

      <h3>Ligue</h3>
      <p>{match.league.name}</p>
    </div>
  );
}