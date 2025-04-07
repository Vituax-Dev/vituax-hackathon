import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { getUserPreferences } from "@/lib/cookies";
import vituaxLogo from "../assets/images/Vituax_LOGO_Versao_Principal_RBG.png";
import { vinila } from "./fonts/Vinila";

export const metadata: Metadata = {
  title: {
    default: "Vituax",
    template: "Vituax - %s",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vituax",
    description:
      "With servers in the largest data centers in Latin America and the United States, and an exclusive multicloud management platform, we provide MSPs (Managed Service Providers) the opportunity to generate recurring revenue and stand out in a highly competitive market.",
    url: "https://vituax.com",
    siteName: "Vituax",
    images: [
      {
        url: vituaxLogo.src,
        width: 512,
        height: 169,
      },
    ],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, language } = getUserPreferences();
  const lan = language || "en";
  return (
    <html lang={lan === "pt" ? "pt-BR" : lan} data-theme={theme}>
      <body className={`${vinila.className}`}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
