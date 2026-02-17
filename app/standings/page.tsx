"use client";

import { useEffect, useState } from "react";

export default function StandingsPage() {
  const [standings, setStandings] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/standings")
      .then((res) => res.json())
      .then((data) => setStandings(data[0].league.standings[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!standings.length) return <p>Chargement...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Classement Ligue 1</h1>

      {standings.map((team: any) => (
        <div
          key={team.team.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #333",
          }}
        >
          <span>
            {team.rank}. {team.team.name}
          </span>
          <span>{team.points} pts</span>
        </div>
      ))}
    </div>
  );
}
