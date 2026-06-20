import { Link, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import { subjects } from "../data/subjects.js";

export default function TopicList() {
  const { subjectId } = useParams();
  const { currentUser } = useUser();
  const subject = subjects.find((item) => item.id === subjectId);

  if (!subject) {
    return <main className="page"><Link to="/subjects">Back to subjects</Link></main>;
  }

  return (
    <main className="page">
      <section className="section-title">
        <p className="eyebrow">Topic List</p>
        <h1>{subject.name}</h1>
      </section>

      <section className="topic-list">
        {subject.topics.map((topic, index) => {
          const key = `${subject.id}-${index}`;
          const completed = currentUser.completedTopics?.[key];

          return (
            <article key={`${subject.id}-${index}`} className={completed ? "topic-item complete" : "topic-item"}>
              <div className="topic-content">
                <div className="topic-heading">
                  <div>
                    <p className="eyebrow">Module {index + 1}</p>
                    <h3>{topic.title}</h3>
                  </div>
                  <span>{topic.xp} XP</span>
                </div>

                <p>{topic.explanation.slice(0, 150)}...</p>
              </div>
              <Link to={`/subjects/${subject.id}/topics/${index}`} className="button-link">
                {completed ? "Review topic" : "View topic"}
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
