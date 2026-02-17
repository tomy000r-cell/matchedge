"use client";

import { useEffect, useState } from "react";

export default function MatchsPage() {
  const [matchs, setMatchs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatchs() {
      try {
        const res = await fetch("/api/matchs");
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

  if (loading) return <p>Chargement...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Matchs Ligue 1</h1>

      {matchs.length === 0 && <p>Aucun match trouvé</p>}

      {matchs.map((match) => (
        <div key={match.fixture.id} style={{ marginBottom: "20px" }}>
          <p>
            {match.teams.home.name} vs {match.teams.away.name}
          </p>
        </div>
      ))}
    </div>
  );
}
