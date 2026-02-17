export const metadata = {
  title: "MatchEdge",
  description: "Plateforme football premium",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#0f172a", color: "white" }}>
        {children}
      </body>
    </html>
  )
}
