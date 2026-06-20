import { Link } from "react-router-dom";
import XPBar from "./XPBar.jsx";

export default function SubjectCard({ subject, completed, total }) {
  const percent = Math.round((completed / total) * 100);

  return (
    <article className="subject-card" style={{ "--subject-color": subject.color }}>
      <div>
        <p className="eyebrow">Subject</p>
        <h3>{subject.name}</h3>
      </div>
      <XPBar progress={percent} label={`${subject.name} progress`} />
      <p>{completed} of {total} topics complete</p>
      <Link to={`/subjects/${subject.id}`} className="button-link">Open topics</Link>
    </article>
  );
}
