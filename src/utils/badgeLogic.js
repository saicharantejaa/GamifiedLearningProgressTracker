import { subjects } from "../data/subjects.js";

function completedCount(user) {
  return Object.values(user.completedTopics ?? {}).filter(Boolean).length;
}

function completedInAnySubject(user) {
  return subjects.some((subject) => subject.topics.every((_, index) => user.completedTopics?.[`${subject.id}-${index}`]));
}

function completedEverything(user) {
  return subjects.every((subject) => subject.topics.every((_, index) => user.completedTopics?.[`${subject.id}-${index}`]));
}

export const badgeDefinitions = [
  {
    name: "First Step",
    icon: "star",
    description: "Complete your first module",
    isUnlocked: (user) => completedCount(user) >= 1
  },
  {
    name: "On a Roll",
    icon: "bolt",
    description: "Complete 5 modules in a row",
    isUnlocked: (user) => (user.modulesInARow ?? 0) >= 5
  },
  {
    name: "Subject Master",
    icon: "medal",
    description: "Reach 100% in any one subject",
    isUnlocked: completedInAnySubject
  },
  {
    name: "XP Hunter",
    icon: "gem",
    description: "Cross 500 total XP",
    isUnlocked: (user) => user.totalXP >= 500
  },
  {
    name: "Dedicated Learner",
    icon: "calendar",
    description: "Log in 3 days in a row",
    isUnlocked: (user) => user.streak >= 3
  },
  {
    name: "Completionist",
    icon: "trophy",
    description: "Complete all topics in all subjects",
    isUnlocked: completedEverything
  }
];

export function getUnlockedBadges(user) {
  return badgeDefinitions.filter((badge) => badge.isUnlocked(user)).map((badge) => badge.name);
}
