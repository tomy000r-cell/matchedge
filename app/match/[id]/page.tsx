import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MatchDetailPage({ params }: PageProps) {
  const matchId = params.id;

  const res = await fetch(
    https://v3.football.api-sports.io/fixtures?id=${matchId},
    {
      headers: {
        "x-apisports-key": process.env.FOOTBALL_API_KEY!,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  const match = data.response[0];

  if (!match) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        Match introuvable.
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <Link href="/matchs" style={{ color: "#38bdf8" }}>
        ← Retour aux matchs
      </Link>

      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        {match.teams.home.name} vs {match.teams.away.name}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginTop: "40px",
        }}
      >
        {/* HOME */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              style={{
                maxWidth: "80px",
                maxHeight: "80px",
                objectFit: "contain",
              }}
            />
          </div>
          <p>{match.teams.home.name}</p>
        </div>

        {/* SCORE */}
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>
          {match.goals.home ?? "-"} : {match.goals.away ?? "-"}
        </div>

        {/* AWAY */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              style={{
                maxWidth: "80px",
                maxHeight: "80px",
                objectFit: "contain",
              }}
            />
          </div>
          <p>{match.teams.away.name}</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p>Stade : {match.fixture.venue.name}</p>
        <p>Ville : {match.fixture.venue.city}</p>
        <p>
          Date :{" "}
          {new Date(match.fixture.date).toLocaleDateString("fr-FR")}
        </p>
      </div>
    </div>
  );
}