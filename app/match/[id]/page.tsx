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
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération du match");
  }

  const data = await res.json();

  if (!data.response || data.response.length === 0) {
    return notFound();
  }

  const match = data.response[0];

  const homeTeam = match.teams.home.name;
  const awayTeam = match.teams.away.name;
  const homeGoals = match.goals.home;
  const awayGoals = match.goals.away;
  const status = match.fixture.status.long;
  const date = new Date(match.fixture.date).toLocaleString();

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Match Details</h1>

      <h2>
        {homeTeam} vs {awayTeam}
      </h2>

      <p><strong>Date :</strong> {date}</p>
      <p><strong>Status :</strong> {status}</p>

      <h3>
        Score : {homeGoals} - {awayGoals}
      </h3>
    </div>
  );
}