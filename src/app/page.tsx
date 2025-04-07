import { getUserPreferences } from "@/lib/cookies";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomeRedirect() {
  const { language } = getUserPreferences();
  if (language && ["pt", "en", "es"].includes(language))
    return redirect(`/${language}`); // redirect to the user preferred language stored in the cookies

  const defaultLanguage = "en";
  const header = headers();
  const acceptLanguage = header.get("accept-language"); // get user system language in the browser

  const userLanguage = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : defaultLanguage;

  const redirectLanguage = ["pt", "en", "es"].includes(userLanguage) // check if system language is supported
    ? userLanguage
    : defaultLanguage;

  return redirect(`/${redirectLanguage}`);
}
