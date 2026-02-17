async function getMatchs() {
  const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + "/api/matchs", {
    cache: "no-store"
  });

  const data = await res.json();

  if (data.response && Array.isArray(data.response)) {
    return data.response;
  }

  return [];
}

export default async function MatchsPage() {
  const matchs = await getMatchs();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Matchs Ligue 1</h1>

      {matchs.length === 0 && <p>Aucun match trouvé</p>}

      {matchs.map(function (match) {
        return (
          <div
            key={match.fixture.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={match.teams.home.logo}
                alt={match.teams.home.name}
                width="40"
              />
              <span>{match.teams.home.name}</span>
            </div>

            <strong>VS</strong>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={match.teams.away.logo}
                alt={match.teams.away.name}
                width="40"
              />
              <span>{match.teams.away.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
