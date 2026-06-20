import { subjects } from "../data/subjects.js";

export const storageKey = "gamified-learning-tracker-react";

const starterUsers = {
  "2520080044": {
    rollNo: "2520080044",
    name: "A. Sai Charan Teja",
    avatarColor: "#176b87",
    totalXP: 150,
    streak: 2,
    lastLogin: "",
    modulesInARow: 0,
    completedTopics: {
      "maths-0": true,
      "maths-1": true,
      "science-0": true,
      "react-0": true
    },
    badges: [],
    xpHistory: []
  },
  "2520080077": {
    rollNo: "2520080077",
    name: "Meera K",
    avatarColor: "#24a67a",
    totalXP: 230,
    streak: 3,
    lastLogin: "",
    modulesInARow: 5,
    completedTopics: {},
    badges: ["First Step", "On a Roll"],
    xpHistory: []
  },
  "2520080031": {
    rollNo: "2520080031",
    name: "Aarav R",
    avatarColor: "#d99b24",
    totalXP: 310,
    streak: 4,
    lastLogin: "",
    modulesInARow: 6,
    completedTopics: {},
    badges: ["First Step", "On a Roll"],
    xpHistory: []
  }
};

export function createEmptyUser(name, rollNo) {
  return {
    rollNo,
    name,
    avatarColor: "#176b87",
    totalXP: 0,
    streak: 1,
    lastLogin: today(),
    modulesInARow: 0,
    completedTopics: {},
    badges: [],
    xpHistory: [{ date: today(), xp: 5 }]
  };
}

export function getInitialData() {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    return JSON.parse(saved);
  }

  return {
    currentUser: "",
    darkMode: false,
    users: starterUsers,
    subjects
  };
}

export function saveData(data) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export function yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().slice(0, 10);
}
