import { useState } from "react";
import { useUser } from "../context/UserContext.jsx";
import { subjects } from "../data/subjects.js";

export default function Profile() {
  const { currentUser, resetProgress, updateProfile } = useUser();
  const [name, setName] = useState(currentUser.name);
  const [avatarColor, setAvatarColor] = useState(currentUser.avatarColor);
  const completedSubjects = subjects.filter((subject) => (
    subject.topics.every((_, index) => currentUser.completedTopics?.[`${subject.id}-${index}`])
  )).length;

  function handleSubmit(event) {
    event.preventDefault();
    updateProfile({ name, avatarColor });
  }

  function handleReset() {
    if (window.confirm("Reset all progress for this user?")) {
      resetProgress();
    }
  }

  return (
    <main className="page">
      <section className="section-title">
        <p className="eyebrow">Profile Settings</p>
        <h1>{currentUser.name}</h1>
      </section>

      <section className="profile-grid">
        <form className="settings-card" onSubmit={handleSubmit}>
          <label>
            Display name
            <input value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Avatar color
            <input type="color" value={avatarColor} onChange={(event) => setAvatarColor(event.target.value)} />
          </label>
          <button type="submit">Save profile</button>
          <button type="button" className="danger-button" onClick={handleReset}>Reset progress</button>
        </form>

        <section className="summary-grid tall">
          <article><strong>{currentUser.totalXP}</strong><span>Total XP</span></article>
          <article><strong>{currentUser.badges?.length ?? 0}</strong><span>Badges earned</span></article>
          <article><strong>{completedSubjects}</strong><span>Subjects completed</span></article>
          <article><strong>{currentUser.streak}</strong><span>Current streak</span></article>
        </section>
      </section>
    </main>
  );
}
