import axios from "axios";
import { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard.jsx";
import XPBar from "../components/XPBar.jsx";
import { useUser } from "../context/UserContext.jsx";
import { subjects } from "../data/subjects.js";
import { badgeDefinitions } from "../utils/badgeLogic.js";
import { getLevelInfo } from "../utils/xpLogic.js";

function subjectProgress(user, subject) {
  const completed = subject.topics.filter((_, index) => user.completedTopics?.[`${subject.id}-${index}`]).length;
  return { completed, total: subject.topics.length };
}

export default function Dashboard() {
  const { currentUser } = useUser();
  const [quote, setQuote] = useState("Small progress is still progress.");
  const level = getLevelInfo(currentUser.totalXP);
  const completedTopics = Object.values(currentUser.completedTopics ?? {}).filter(Boolean).length;

  useEffect(() => {
    axios.get("/api/quote").then((response) => {
      setQuote(response.data.quote);
    }).catch(() => {
      const quotes = ["Small progress is still progress.", "Finish one topic today; confidence follows."];
      setQuote(quotes[new Date().getDate() % quotes.length]);
    });
  }, []);

  return (
    <main className="page">
      {currentUser.latestBadge && <div className="toast-note">Badge unlocked: {currentUser.latestBadge}</div>}
      <section className="hero-grid">
        <article className="hero-card">
          <p className="eyebrow">Dashboard</p>
          <h1>Welcome, {currentUser.name}</h1>
          <p>{quote}</p>
          <div className="level-row">
            <strong>Level {level.level}</strong>
            <span>{currentUser.totalXP} XP</span>
          </div>
          <XPBar progress={level.progress} label="XP progress to next level" />
          <small>{level.xpToNext ? `${level.xpToNext} XP needed for next level` : "Top level reached"}</small>
        </article>

        <section className="summary-grid">
          <article><strong>{currentUser.badges?.length ?? 0}</strong><span>Badges earned</span></article>
          <article><strong>{completedTopics}</strong><span>Topics completed</span></article>
          <article><strong>{currentUser.streak}</strong><span>Current streak</span></article>
        </section>
      </section>

      <section className="section-title">
        <p className="eyebrow">Subjects</p>
        <h2>Track manual completion</h2>
      </section>

      <section className="subject-grid">
        {subjects.map((subject) => {
          const progress = subjectProgress(currentUser, subject);
          return <SubjectCard key={subject.id} subject={subject} {...progress} />;
        })}
      </section>

      <section className="badge-strip">
        {badgeDefinitions.map((badge) => (
          <span key={badge.name} className={currentUser.badges?.includes(badge.name) ? "earned" : ""}>{badge.name}</span>
        ))}
      </section>
    </main>
  );
}
