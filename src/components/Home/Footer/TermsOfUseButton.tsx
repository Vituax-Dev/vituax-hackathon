"use client";

import styles from "./Footer.module.css";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";

export const TermsOfUseButton = ({ lan }: { lan: Languages }) => {
  const text = t[lan].termsModal;

  return (
    <>
      <a href="" className={styles.footerLink}>
        {text.terms}
      </a>
    </>
  );
};
