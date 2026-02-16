import { notFound } from "next/navigation";

export default async function MatchPage({
  params,
}: {
  params: { id: string };
}) {
  const matchId = params.id;

  if (!matchId) {
    notFound();
  }

  const url = "https://v3.football.api-sports.io/fixtures?id=${matchId}";
>>>>>>> 97fa408525678ad47035a944d6a5305d63044047

  const res = await fetch(url, {
    headers: {
      "x-apisports-key": process.env.FOOTBALL_API_KEY || "",
    },
    cache: "no-store",
  });

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
    </div>
  );
}
