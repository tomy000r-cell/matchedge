import Link from “next/link”;
import React from “react”;

export default function RootLayout(props: { children: React.ReactNode }) {
return (

<body style={{ margin: 0 }}>
<nav
style={{
display: “flex”,
gap: 20,
padding: 20,
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
