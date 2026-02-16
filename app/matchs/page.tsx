"use client";

import { useEffect, useState } from "react";

export default function MatchsPage() {
  const [matchs, setMatchs] = useState<any[]>([]);

  const fetchMatchs = async () => {
    const res = await fetch("/api/matchs");
    const data = await res.json();
    setMatchs(data);
  };

  useEffect(() => {
    fetchMatchs();

    const interval = setInterval(() => {
      fetchMatchs();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 TRI INTELLIGENT
  const sortedMatchs = [...matchs].sort((a, b) => {
    const getPriority = (status: string) => {
      if (status !== "FT" && status !== "NS") return 0; // LIVE
      if (status === "NS") return 1; // Pas commencé
      return 2; // Terminé
    };

    return (
      getPriority(a.fixture.status.short) -
      getPriority(b.fixture.status.short)
    );
  });

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>Matchs Ligue 1</h1>

      {sortedMatchs.length === 0 && <p>Chargement...</p>}

      {sortedMatchs.map((match) => {
        const status = match.fixture.status.short;

        const statusColor =
          status === "FT"
            ? "#22c55e"
            : status === "NS"
            ? "#9ca3af"
            : "#ef4444";

        const isLive =
          status !== "FT" && status !== "NS";

        return (
          <div
            key={match.fixture.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #2a2a2a",
              background: "#111",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
          >
            {/* DOMICILE */}
            <div style={{ textAlign: "center", width: "120px" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
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
                    maxWidth: "60px",
                    maxHeight: "60px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p>{match.teams.home.name}</p>
            </div>

            {/* CENTRE */}
            <div style={{ textAlign: "center" }}>
              <h2>
                {match.goals.home ?? "-"} - {match.goals.away ?? "-"}
              </h2>

              <p
                style={{
                  fontSize: "13px",
                  marginTop: "5px",
                  fontWeight: "bold",
                  color: statusColor,
                }}
              >
                {isLive && "🔴 LIVE "}
                {status}
              </p>

              <p style={{ fontSize: "12px", opacity: 0.6 }}>
                {new Date(match.fixture.date).toLocaleString()}
              </p>
            </div>

            {/* EXTERIEUR */}
            <div style={{ textAlign: "center", width: "120px" }}>
              <div
                style={{
                  width: "70px",
                  height: "70px",
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
                    maxWidth: "60px",
                    maxHeight: "60px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p>{match.teams.away.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}