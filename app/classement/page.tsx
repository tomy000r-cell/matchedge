type TeamType = {
  rank: number;
  points: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
};

async function getClassement(): Promise<TeamType[]> {
  try {
    const res = await fetch("https://matchedge.vercel.app/api/standings", {
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
  } catch {
    return [];
  }
}

export default async function ClassementPage() {
  const classement: TeamType[] = await getClassement();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Classement Ligue 1</h1>

      {classement.length === 0 && <p>Aucun classement disponible</p>}

      {classement.map(function (team: TeamType) {
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
