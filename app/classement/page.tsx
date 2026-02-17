“use client”;

import { useEffect, useState } from “react”;

export default function ClassementPage() {
const [classement, setClassement] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
async function loadClassement() {
try {
const res = await fetch(”/api/classement”);
const data = await res.json();
if (
      data.response &&
      data.response[0] &&
      data.response[0].league &&
      Array.isArray(data.response[0].league.standings[0])
    ) {
      setClassement(data.response[0].league.standings[0]);
    } else {
      setClassement([]);
    }
  } catch (error) {
    console.error("Erreur classement:", error);
    setClassement([]);
  } finally {
    setLoading(false);
  }
}

loadClassement();
}, []);

if (loading) {
return <p style={{ padding: “20px” }}>Chargement…;
}

return (
<div style={{ padding: “20px” }}>
Classement Ligue 1
{classement.length === 0 && <p>Aucun classement disponible</p>}

  {classement.map((team) => (
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
  ))}
</div>
);
}
