"use server";

import {
  getUserPreferences,
  Language,
  setUserPreferences,
} from "@/lib/cookies";

export async function changeLanguage(lan: Language) {
  await setUserPreferences({ language: lan });
}

export async function toggleTheme() {
  const { theme: oldTheme } = await getUserPreferences();
  const theme = oldTheme === "dark" ? "light" : "dark";
  await setUserPreferences({ theme });
}
