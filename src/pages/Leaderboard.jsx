import Leaderboard from "../components/Leaderboard.jsx";
import { useUser } from "../context/UserContext.jsx";

export default function LeaderboardPage() {
  const { users, currentUser } = useUser();

  return (
    <main className="page">
      <section className="section-title">
        <p className="eyebrow">Leaderboard</p>
        <h1>Class Rank</h1>
      </section>
      <Leaderboard users={users} currentRollNo={currentUser.rollNo} />
    </main>
  );
}
