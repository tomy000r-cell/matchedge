import "../styles/matchedge.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>

        <div className="navbar">
          <div className="navbar-logo">
            MATCHEDGE
          </div>

          <div className="navbar-menu">
            <div className="navbar-item">
              Football
              <div className="dropdown-content">
                <a href="#">Pays</a>
                <a href="#">Saisons</a>
                <a href="#">Ligues</a>
                <a href="#">Classement</a>
                <a href="#">Équipes</a>
                <a href="#">Live</a>
                <a href="#">H2H</a>
                <a href="#">Blessures</a>
                <a href="#">Transferts</a>
                <a href="#">Cotes</a>
                <a href="#">Stats</a>
              </div>
            </div>

            <div className="navbar-item">Prédictions</div>
            <div className="navbar-item">Premium</div>
            <div className="navbar-item">Bot IA</div>
            <div className="navbar-item">Community</div>
            <div className="navbar-item">Dashboard</div>
            <div className="navbar-item">Connexion</div>
          </div>
        </div>

        {children}

      </body>
    </html>
  )
}
