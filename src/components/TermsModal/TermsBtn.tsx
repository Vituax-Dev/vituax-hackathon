"use client";

import React, { useState } from "react";
import styles from "./PrivacyModal.module.css";
import { t } from "@/language";
import TermsModal from "./TermsModal";

export interface ITermsBtnProps {
  lan: "pt" | "en" | "es";
  className?: string;
}

export default function TermsBtn({ lan, className = "" }: ITermsBtnProps) {
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
      <TermsModal open={open} onClose={handleClose} lan={lan} />
    </>
  );
}
