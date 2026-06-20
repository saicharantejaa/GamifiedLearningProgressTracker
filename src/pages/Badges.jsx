import BadgeCard from "../components/BadgeCard.jsx";
import { useUser } from "../context/UserContext.jsx";
import { badgeDefinitions } from "../utils/badgeLogic.js";

export default function Badges() {
  const { currentUser } = useUser();

  return (
    <main className="page">
      <section className="section-title">
        <p className="eyebrow">Badge Gallery</p>
        <h1>Achievements</h1>
      </section>

      <section className="badge-grid">
        {badgeDefinitions.map((badge) => (
          <BadgeCard key={badge.name} badge={badge} unlocked={currentUser.badges?.includes(badge.name)} />
        ))}
      </section>
    </main>
  );
}
