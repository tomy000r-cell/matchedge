export default function Dashboard() {
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

        <div className="card" style={{ marginTop: "30px" }}>
          <h3>Résumé du compte</h3>
          <p>Abonnement : Gratuit</p>
          <p>Prédictions disponibles : 3 / 10</p>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <h3>Performance</h3>
          <p>Taux de réussite : 68%</p>
          <p>Profit estimé : +12.4%</p>
        </div>

      </div>
    </div>
  )
}
