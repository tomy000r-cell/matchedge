import Link from “next/link”;
import React from “react”;

export default function RootLayout(props: { children: React.ReactNode }) {
return (

<body style={{ margin: 0, fontFamily: “Arial, sans-serif” }}>
<nav
style={{
display: “flex”,
gap: “20px”,
padding: “20px”,
borderBottom: “1px solid #ddd”
}}

Accueil
Matchs
Classement
Équipes
  <div>{props.children}</div>
  </body>
</html>
  );
}
