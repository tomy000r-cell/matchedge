"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    // ⚠️ Simulation connexion
    if (email && password) {
      localStorage.setItem("isLogged", "true")
      router.push("/dashboard")
    }
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f0f0f"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          background: "#111",
          padding: "40px",
          borderRadius: "10px",
          border: "1px solid #00ff88",
          width: "300px"
        }}
      >
        <h2 style={{ color: "#00ff88", marginBottom: "20px" }}>
          Connexion
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "15px", padding: "8px" }}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "20px", padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#00ff88",
            border: "none",
            fontWeight: "bold"
          }}
        >
          Se connecter
        </button>
      </form>
    </div>
  )
}
