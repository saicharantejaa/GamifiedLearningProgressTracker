import { useState } from "react";
import { useUser } from "../context/UserContext.jsx";

export default function Login() {
  const { login } = useUser();
  const [name, setName] = useState("A. Sai Charan Teja");
  const [rollNo, setRollNo] = useState("2520080044");

  function handleSubmit(event) {
    event.preventDefault();
    login(name.trim(), rollNo.trim());
  }

  return (
    <main className="login-page">
      <section className="login-panel">
        <p className="eyebrow">Front End Development Frameworks</p>
        <h1>Gamified Learning Progress Tracker</h1>
        <p>Earn XP, unlock badges, follow streaks, and track subject progress with a React SPA.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Student name
            <input value={name} onChange={(event) => setName(event.target.value)} required />
          </label>
          <label>
            Roll number
            <input value={rollNo} onChange={(event) => setRollNo(event.target.value)} required />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
