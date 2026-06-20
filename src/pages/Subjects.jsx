import SubjectCard from "../components/SubjectCard.jsx";
import { useUser } from "../context/UserContext.jsx";
import { subjects } from "../data/subjects.js";

export default function Subjects() {
  const { currentUser } = useUser();

  return (
    <main className="page">
      <section className="section-title">
        <p className="eyebrow">Module Completion System</p>
        <h1>Subjects</h1>
      </section>

      <section className="subject-grid">
        {subjects.map((subject) => {
          const completed = subject.topics.filter((_, index) => currentUser.completedTopics?.[`${subject.id}-${index}`]).length;
          return <SubjectCard key={subject.id} subject={subject} completed={completed} total={subject.topics.length} />;
        })}
      </section>
    </main>
  );
}
