import { SubjectBarChart, XPLineChart } from "../components/ProgressChart.jsx";
import { useUser } from "../context/UserContext.jsx";
import { subjects } from "../data/subjects.js";

export default function Progress() {
  const { currentUser } = useUser();
  const subjectData = subjects.map((subject) => {
    const completed = subject.topics.filter((_, index) => currentUser.completedTopics?.[`${subject.id}-${index}`]).length;
    return {
      name: subject.name,
      progress: Math.round((completed / subject.topics.length) * 100)
    };
  });

  const xpData = [...(currentUser.xpHistory ?? [])].slice(-7);

  return (
    <main className="page">
      <section className="section-title">
        <p className="eyebrow">Progress Charts</p>
        <h1>Learning Analytics</h1>
      </section>

      <section className="chart-grid">
        <article className="chart-card">
          <h2>XP earned per day</h2>
          <XPLineChart data={xpData} />
        </article>
        <article className="chart-card">
          <h2>Subject-wise completion</h2>
          <SubjectBarChart data={subjectData} />
        </article>
      </section>
    </main>
  );
}
