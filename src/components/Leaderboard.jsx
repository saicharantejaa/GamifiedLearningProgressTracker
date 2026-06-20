export default function Leaderboard({ users, currentRollNo }) {
  const ranked = [...users].sort((a, b) => b.totalXP - a.totalXP);

  return (
    <ol className="leaderboard-list">
      {ranked.map((user, index) => (
        <li key={user.rollNo} className={user.rollNo === currentRollNo ? "active" : ""}>
          <span>#{index + 1}</span>
          <div>
            <strong>{user.name}</strong>
            <small>{user.rollNo}</small>
          </div>
          <span>{user.totalXP} XP</span>
          <span>{user.badges?.length ?? 0} badges</span>
        </li>
      ))}
    </ol>
  );
}
