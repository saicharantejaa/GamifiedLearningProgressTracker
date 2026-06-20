export const levelTable = [
  { level: 1, min: 0, max: 99 },
  { level: 2, min: 100, max: 249 },
  { level: 3, min: 250, max: 499 },
  { level: 4, min: 500, max: 799 },
  { level: 5, min: 800, max: Infinity }
];

export function getLevelInfo(totalXP) {
  const current = levelTable.find((level) => totalXP >= level.min && totalXP <= level.max) ?? levelTable[0];
  const next = levelTable.find((level) => level.level === current.level + 1);
  const range = next ? next.min - current.min : 1;
  const earnedInLevel = next ? totalXP - current.min : range;
  const progress = Math.min(100, Math.round((earnedInLevel / range) * 100));

  return {
    level: current.level,
    progress,
    nextLevelXP: next?.min ?? totalXP,
    xpToNext: next ? Math.max(0, next.min - totalXP) : 0
  };
}
