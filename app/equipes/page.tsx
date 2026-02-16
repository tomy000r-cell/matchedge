"use client";

import { useEffect, useState } from "react";

export default function Equipes() {
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/equipes")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.response);
      });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Équipes Ligue 1
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {teams.map((item) => (
          <div
            key={item.team.id}
            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700/40 transition"
          >
            <img
              src={item.team.logo}
              alt={item.team.name}
              className="w-16 h-16 mx-auto mb-4"
            />

            <h2 className="font-bold text-lg">
              {item.team.name}
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              {item.venue.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}