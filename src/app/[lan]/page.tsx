import React from "react";
import styles from "./home.module.css";
import { t } from "@/language";
import NavBar from "@/components/Home/NavBar";
import Carousel from "@/components/Home/Carousel";
import { Header } from "@/components/Home/Header";
import vituaxLogo from "../../assets/images/Vituax_LOGO_Versao_Principal_RBG.png";
import { SoftwareDescription } from "@/components/Home/SoftwareDescription";
import { Solutions } from "@/components/Home/Solutions";
import { VituaxPartners } from "@/components/Home/VituaxPartners";
import ContactUs from "@/components/Home/ContactUs";
import Functionalities from "@/components/Home/Functionalities";
import Footer from "@/components/Home/Footer";
import ScrollToTopButton from "@/components/ScrollUpBtn";
import { Calculator } from "@/components/Home/Calculator";
import { EspPage } from "@/components/EspPage";

export type Languages = "en" | "pt" | "es";

interface HomeProps {
  params: {
    lan: Languages;
  };
}

export const dynamicParams = false;

export async function generateMetadata({ params: { lan } }: HomeProps) {
  return {
    description: t[lan].home.description,
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: "Vituax",
      description: t[lan].home.description,
      url: `https://vituax.com/${lan}`,
      siteName: "Vituax",
      images: [
        {
          url: vituaxLogo.src,
          width: 512,
          height: 162,
        },
      ],

      type: "website",
    },
  };
}

export default async function Home({ params: { lan } }: HomeProps) {
  return (
    <div className={styles.mainDiv}>
      {lan === "es" ? (
        <EspPage />
      ) : (
        <>
          <Header lan={lan} />
          <NavBar lan={lan} />
          <Carousel lan={lan} />
          <SoftwareDescription lan={lan} />
          <Solutions lan={lan} />
          <VituaxPartners lan={lan} />
          <ContactUs lan={lan} />
          <Functionalities lan={lan} />
          <Calculator lan={lan} />
          <Footer lan={lan} />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

export const generateStaticParams = async () => {
  const languages = ["en", "pt", "es"];
  return languages.map((lan) => ({ lan }));
};
