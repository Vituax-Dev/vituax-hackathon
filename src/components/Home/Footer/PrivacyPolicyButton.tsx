"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Languages } from "@/app/[lan]/page";
import PrivacyModal from "@/components/PrivacyModal/PrivacyModal";
import { t } from "@/language";

export const PrivacyPolicyButton = ({ lan }: { lan: Languages }) => {
  const text = t[lan].footer;
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={styles.footerLink}>
        {text.privacy}
      </button>
      <PrivacyModal open={open} onClose={() => setOpen(false)} lan={lan} />
    </>
  );
};
