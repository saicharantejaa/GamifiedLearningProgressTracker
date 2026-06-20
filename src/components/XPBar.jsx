export default function XPBar({ progress, label }) {
  return (
    <div className="xp-bar" aria-label={label}>
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}
