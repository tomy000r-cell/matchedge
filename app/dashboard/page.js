"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function Dashboard() {
  const router = useRouter()

useEffect(() => {
  const isLogged = localStorage.getItem("isLogged")

  if (!isLogged) {
    router.push("/login")
  }
}, [])
  const isPremium = false // ⚠️ Pour l’instant tout le monde est gratuit

  return (
    <div style={{ display: "flex" }}>

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-item">Vue générale</div>
        <div className="sidebar-item">Mes prédictions</div>
        <div className="sidebar-item">Statistiques</div>
        <div className="sidebar-item">Premium</div>
        <div className="sidebar-item">Paramètres</div>
      </div>

      {/* CONTENU */}
      <div style={{ marginLeft: "260px", padding: "40px", width: "100%" }}>
        
        <h1 style={{ color: "#00ff88" }}>Dashboard</h1>

        {/* SECTION GRATUITE */}
        <div className="card" style={{ marginTop: "30px" }}>
          <h3>Résumé du compte</h3>
          <p>Abonnement : Gratuit</p>
          <p>Prédictions disponibles : 3 / 10</p>
        </div>

        {/* SECTION PREMIUM */}
        <div
          className="card"
          style={{
            marginTop: "30px",
            position: "relative",
            filter: isPremium ? "none" : "blur(4px)",
            pointerEvents: isPremium ? "auto" : "none"
          }}
        >
          <h3>🔥 Prédictions Premium 100%</h3>
          <p>Match 1 : Victoire domicile</p>
          <p>Match 2 : Over 2.5</p>
          <p>Match 3 : BTTS Oui</p>
        </div>

        {!isPremium && (
          <div style={{ marginTop: "-120px", textAlign: "center" }}>
            <div style={{
              background: "#111",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #00ff88",
              display: "inline-block"
            }}>
              <h3 style={{ color: "#00ff88" }}>🔒 Accès Premium</h3>
              <p>Débloquez les prédictions exclusives</p>

              <a
                href="TON_LIEN_REVOLUT_ICI"
                target="_blank"
                style={{
                  background: "#00ff88",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                Payer avec Revolut
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
