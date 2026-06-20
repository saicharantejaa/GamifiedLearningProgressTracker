import { Link, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import { subjects } from "../data/subjects.js";

export default function TopicDetail() {
  const { subjectId, topicIndex } = useParams();
  const { currentUser, completeTopic } = useUser();
  const subject = subjects.find((item) => item.id === subjectId);
  const index = Number(topicIndex);
  const topic = subject?.topics[index];

  if (!subject || !topic || Number.isNaN(index)) {
    return (
      <main className="page">
        <Link to="/subjects" className="ghost-button">Back to subjects</Link>
      </main>
    );
  }

  const key = `${subject.id}-${index}`;
  const completed = currentUser.completedTopics?.[key];

  return (
    <main className="page">
      <Link to={`/subjects/${subject.id}`} className="ghost-button">Back to {subject.name}</Link>

      <article className={completed ? "topic-detail complete" : "topic-detail"}>
        <div className="topic-heading">
          <div>
            <p className="eyebrow">{subject.name} - Module {index + 1}</p>
            <h1>{topic.title}</h1>
          </div>
          <span>{topic.xp} XP</span>
        </div>

        <p>{topic.explanation}</p>

        <div className="topic-details">
          <section>
            <h4>Key Points</h4>
            <ul>
              {topic.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Example</h4>
            <p>{topic.example}</p>
          </section>
        </div>

        <section className="quiz-panel">
          <h4>Mini Quiz</h4>
          <p>{topic.quiz.question}</p>
          <ol>
            {topic.quiz.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ol>
          <strong>Correct answer: {topic.quiz.answer}</strong>
        </section>

        <button type="button" disabled={completed} onClick={() => completeTopic(subject.id, index)}>
          {completed ? "Completed" : "Mark as Complete"}
        </button>
      </article>
    </main>
  );
}
