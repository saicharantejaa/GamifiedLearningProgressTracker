const icons = {
  star: "*",
  bolt: "!",
  medal: "#",
  gem: "<>",
  calendar: "31",
  trophy: "^"
};

export default function BadgeCard({ badge, unlocked }) {
  return (
    <article className={unlocked ? "badge-card" : "badge-card locked"}>
      <span>{icons[badge.icon]}</span>
      <h3>{badge.name}</h3>
      <p>{unlocked ? "Unlocked" : badge.description}</p>
    </article>
  );
}
