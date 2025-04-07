"use client";

import React, { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import styles from "./PrivacyModal.module.css";
import { t } from "@/language";

export interface IPrivacyBtnProps {
  lan: "pt" | "en" | "es";
  className?: string;
}

export default function PrivacyBtn({ lan, className = "" }: IPrivacyBtnProps) {
  const text = t[lan].privacyModal;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Link acessível que abre o modal */}
      <span
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        className={styles[className]}
        aria-label={text.privacyAriaLabel}
      >
        {text.privacyPolicy}
      </span>

      {/* Modal */}
      <PrivacyModal open={open} onClose={handleClose} lan={lan} />
    </>
  );
}
