async function getClassement() {
  const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + "/api/standings", {
    cache: "no-store"
  });

  const data = await res.json();

  if (
    data.response &&
    data.response[0] &&
    data.response[0].league &&
    data.response[0].league.standings &&
    Array.isArray(data.response[0].league.standings[0])
  ) {
    return data.response[0].league.standings[0];
  }

  return [];
}

export default async function ClassementPage() {
  const classement = await getClassement();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Classement Ligue 1</h1>

      {classement.length === 0 && <p>Aucun classement disponible</p>}

      {classement.map(function (team) {
        return (
          <div
            key={team.team.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "10px",
              padding: "8px",
              borderBottom: "1px solid #ddd"
            }}
          >
            <strong>{team.rank}</strong>

            <img
              src={team.team.logo}
              alt={team.team.name}
              width="30"
            />

            <span>{team.team.name}</span>

            <span style={{ marginLeft: "auto" }}>
              {team.points} pts
            </span>
          </div>
        );
      })}
    </div>
  );
}
