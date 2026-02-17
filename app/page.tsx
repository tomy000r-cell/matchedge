import Link from "next/link"

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <div style={{
        width: "250px",
        background: "#111827",
        padding: "20px"
      }}>
        <h2 style={{ marginTop: 0 }}>MatchEdge</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/dashboard" style={{ color: "white", textDecoration: "none" }}>
            Dashboard
          </Link>

          <Link href="/ligues" style={{ color: "white", textDecoration: "none" }}>
            Ligues
          </Link>

          <Link href="/classement" style={{ color: "white", textDecoration: "none" }}>
            Classements
          </Link>

          <Link href="/equipes" style={{ color: "white", textDecoration: "none" }}>
            Équipes
          </Link>

          <Link href="/premium" style={{ color: "#38bdf8", textDecoration: "none" }}>
            🔒 Premium
          </Link>
        </nav>
      </div>

      {/* CONTENU */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h1>Bienvenue sur MatchEdge</h1>
        <p>Structure complète en cours de construction.</p>
      </div>

    </div>
  )
}
