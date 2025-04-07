import React from "react";
import styles from "./ContactUs.module.css";
import ContactUsForm from "./ContactUsForm";
import { t } from "@/language";
export interface IContactUsProps {
  lan: "pt" | "en" | "es";
}

export default function ContactUs({ lan }: IContactUsProps) {
  const text = t[lan].contactUs;

  return (
    <div className={styles.container} id="contactUs">
      <div className={styles.box}>
        <p className={styles.title}>
          <span className={styles.boldTitle}>{text.boldTitle}</span>
          {text.titleEnd}
        </p>
        <p className={styles.slogan}>
          {text.sloganStart}
          <span className={styles.sloganBold}>{text.sloganBold}</span>
        </p>
        <ContactUsForm lan={lan} />
      </div>
    </div>
  );
}
