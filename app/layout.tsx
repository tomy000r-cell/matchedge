import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FootStats",
  description: "Statistiques et classements football en direct",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-gray-900 to-black text-white">
        {/* NAVBAR */}
        <nav className="border-b border-gray-800 bg-black/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-green-400">
              ⚽ FootStats
            </Link>

            {/* Menu */}
            <div className="flex gap-8 text-gray-300 text-sm font-medium">
              <Link href="/" className="hover:text-white transition">
                Classement
              </Link>
              <Link href="/matchs" className="hover:text-white transition">
                Matchs
              </Link>
              <Link href="/equipes" className="hover:text-white transition">
                Équipes
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTENU */}
        <main className="min-h-screen p-8">{children}</main>
      </body>
    </html>
  );
}