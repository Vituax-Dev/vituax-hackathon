// lib/cookies.js
import { cookies } from "next/headers";

export type Theme = "dark" | "light";

export type Language = "pt" | "en" | "es" | undefined;

export interface IUserPreferencesProps {
  language?: Language;
}

export interface ISetUserPreferencesProps extends IUserPreferencesProps {
  theme?: Theme;
}

export interface IGetUserPreferencesProps extends IUserPreferencesProps {
  theme: Theme;
}

export function getUserPreferences(): IGetUserPreferencesProps {
  const cookieStore = cookies();
  const theme = (cookieStore.get("theme")?.value || "dark") as Theme;
  const language = cookieStore.get("language")?.value as Language;
  return { theme, language };
}

export async function setUserPreferences({
  theme,
  language,
}: ISetUserPreferencesProps) {
  const cookieStore = await cookies();
  if (theme) cookieStore.set("theme", theme, { path: "/", httpOnly: false });
  if (language)
    cookieStore.set("language", language, { path: "/", httpOnly: false });
}
