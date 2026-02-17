“use client”;

import { useEffect, useState } from “react”;

export default function MatchsPage() {
const [matchs, setMatchs] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
async function loadMatchs() {
try {
const res = await fetch(”/api/matchs”);
const data = await res.json();
  if (data.response && Array.isArray(data.response)) {
      setMatchs(data.response);
    } else {
      setMatchs([]);
    }
  } catch (error) {
    console.error("Erreur chargement matchs:", error);
    setMatchs([]);
  } finally {
    setLoading(false);
  }
}

loadMatchs();
  }, []);

if (loading) {
return <p style={{ padding: “20px” }}>Chargement…;
}

return (
<div style={{ padding: “20px” }}>
Matchs Ligue 1
{matchs.length === 0 && <p>Aucun match trouvé</p>}

  {matchs.map((match) => (
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
  ))}
</div>
  );
}
