import confetti from "canvas-confetti";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { xpPerTopic } from "../data/subjects.js";
import { getUnlockedBadges } from "../utils/badgeLogic.js";
import { createEmptyUser, getInitialData, saveData, today, yesterday } from "../utils/localStorage.js";

const UserContext = createContext(null);

function addXpForDate(user, amount) {
  const currentDay = today();
  const history = [...(user.xpHistory ?? [])];
  const entry = history.find((item) => item.date === currentDay);

  if (entry) {
    entry.xp += amount;
  } else {
    history.push({ date: currentDay, xp: amount });
  }

  return history.slice(-14);
}

function refreshBadges(user) {
  const nextBadges = getUnlockedBadges(user);
  const newBadges = nextBadges.filter((badge) => !(user.badges ?? []).includes(badge));

  if (newBadges.length) {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.7 } });
  }

  return {
    ...user,
    badges: nextBadges,
    latestBadge: newBadges[0] ?? ""
  };
}

export function UserProvider({ children }) {
  const [data, setData] = useState(getInitialData);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const currentUser = data.currentUser ? data.users[data.currentUser] : null;

  function persistUser(nextUser, extra = {}) {
    const userWithBadges = refreshBadges(nextUser);
    setData((previous) => ({
      ...previous,
      ...extra,
      users: {
        ...previous.users,
        [userWithBadges.rollNo]: userWithBadges
      }
    }));
  }

  function login(name, rollNo) {
    setData((previous) => {
      const existing = previous.users[rollNo] ?? createEmptyUser(name, rollNo);
      let nextUser = { ...existing, name: name || existing.name };

      if (nextUser.lastLogin !== today()) {
        const streakContinues = nextUser.lastLogin === yesterday();
        const streak = streakContinues ? nextUser.streak + 1 : 1;
        const bonus = streakContinues ? 5 : 0;
        nextUser = {
          ...nextUser,
          streak,
          lastLogin: today(),
          totalXP: nextUser.totalXP + bonus,
          xpHistory: bonus ? addXpForDate(nextUser, bonus) : nextUser.xpHistory
        };
      }

      nextUser = refreshBadges(nextUser);

      return {
        ...previous,
        currentUser: rollNo,
        users: {
          ...previous.users,
          [rollNo]: nextUser
        }
      };
    });
  }

  function logout() {
    setData((previous) => ({ ...previous, currentUser: "" }));
  }

  function completeTopic(subjectId, topicIndex) {
    if (!currentUser) {
      return;
    }

    const topicKey = `${subjectId}-${topicIndex}`;
    if (currentUser.completedTopics?.[topicKey]) {
      return;
    }

    const nextUser = {
      ...currentUser,
      totalXP: currentUser.totalXP + xpPerTopic,
      modulesInARow: (currentUser.modulesInARow ?? 0) + 1,
      completedTopics: {
        ...currentUser.completedTopics,
        [topicKey]: true
      },
      xpHistory: addXpForDate(currentUser, xpPerTopic)
    };

    persistUser(nextUser);
  }

  function updateProfile(profile) {
    if (!currentUser) {
      return;
    }

    persistUser({ ...currentUser, ...profile });
  }

  function resetProgress() {
    if (!currentUser) {
      return;
    }

    persistUser({
      ...currentUser,
      totalXP: 0,
      streak: 1,
      modulesInARow: 0,
      completedTopics: {},
      badges: [],
      xpHistory: [],
      latestBadge: ""
    });
  }

  function toggleDarkMode() {
    setData((previous) => ({ ...previous, darkMode: !previous.darkMode }));
  }

  const value = useMemo(() => ({
    data,
    currentUser,
    darkMode: data.darkMode,
    users: Object.values(data.users),
    login,
    logout,
    completeTopic,
    updateProfile,
    resetProgress,
    toggleDarkMode
  }), [data, currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
}
