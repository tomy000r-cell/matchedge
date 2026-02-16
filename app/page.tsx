"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [standings, setStandings] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/standings")
      .then((res) => res.json())
      .then((data) => {
        const table = data.response[0].league.standings[0];
        setStandings(table);
      });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Classement Ligue 1
      </h1>

      <div className="max-w-6xl mx-auto bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-900 text-gray-400 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-4">#</th>
              <th className="px-4 py-4">Équipe</th>
              <th className="px-4 py-4 text-center">Pts</th>
              <th className="px-4 py-4 text-center">V</th>
              <th className="px-4 py-4 text-center">N</th>
              <th className="px-4 py-4 text-center">D</th>
              <th className="px-4 py-4 text-center">Diff</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr
                key={team.team.id}
                className="border-b border-gray-700 hover:bg-gray-700/40 transition duration-200"
              >
                <td className="px-4 py-4 font-bold text-gray-300">
                  {team.rank}
                </td>

                <td className="px-4 py-4 flex items-center gap-3 font-medium">
                  <img
                    src={team.team.logo}
                    alt={team.team.name}
                    className="w-7 h-7"
                  />
                  {team.team.name}
                </td>

                <td className="px-4 py-4 text-center font-bold text-white">
                  {team.points}
                </td>

                <td className="px-4 py-4 text-center text-green-400">
                  {team.all.win}
                </td>

                <td className="px-4 py-4 text-center text-yellow-400">
                  {team.all.draw}
                </td>

                <td className="px-4 py-4 text-center text-red-400">
                  {team.all.lose}
                </td>

                <td className="px-4 py-4 text-center">
                  <span
                    className={
                      team.goalsDiff >= 0
                        ? "text-green-400 font-semibold"
                        : "text-red-400 font-semibold"
                    }
                  >
                    {team.goalsDiff > 0 ? "+" : ""}
                    {team.goalsDiff}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}