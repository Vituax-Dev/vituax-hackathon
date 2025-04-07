"use client";

import React from "react";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./TermsModal.module.css";
import { t } from "@/language";

export interface ITermsModalProps {
  open: boolean;
  onClose: () => void;
  lan: "pt" | "en" | "es";
}

export default function TermsModal({ open, onClose, lan }: ITermsModalProps) {
  const text = t[lan].termsModal;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      closeAfterTransition
      className={styles.modalContainer}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(4px)", // Adiciona um desfoque no fundo
      }}
    >
      <div className={styles.modalInsideContainer}>
        <div className={styles.modalBoxSpacing}>
          <IconButton onClick={onClose} className={styles.closeButton}>
            <CloseIcon className={styles.closeIcon} />
          </IconButton>
          <div className={styles.modalBox}>
            <p className={styles.title}>{text.title1}</p>
            <p className={styles.text}>{text.text1One}</p>
            <p className={styles.text}>{text.text1Two}</p>

            <p className={styles.title}>{text.title2}</p>
            <p className={styles.text}>
              {text.text2Start}
              <span className={styles.bold}>{text.text2Bold}</span>
              {text.text2End}
            </p>

            <p className={styles.title}>{text.title3}</p>
            <p className={styles.text}>{text.text3}</p>
            <p className={styles.text}>{text.text3One}</p>
            <p className={styles.text}>{text.text3Two}</p>
            <p className={styles.text}>{text.text3Three}</p>

            <p className={styles.title}>{text.title4}</p>
            <p className={styles.text}>
              {text.text4Start}
              <span className={styles.bold}>{text.text4Bold}</span>
              {text.text4End}
            </p>

            <p className={styles.title}>{text.title5}</p>
            <p className={styles.text}>{text.text5}</p>

            <p className={styles.title}>{text.title6}</p>
            <p className={styles.text}>{text.text6}</p>

            <p className={styles.title}>{text.title7}</p>
            <p className={styles.text}>{text.text7}</p>

            <p className={styles.title}>{text.title8}</p>
            <p className={styles.text}>
              {text.text8Start}
              <span className={styles.bold}>{text.text8Bold}</span>
              {text.text8End}
            </p>
            <p className={styles.title}>{text.title9}</p>
            <p className={styles.text}>{text.text9}</p>

            <p className={styles.title}>{text.title10}</p>
            <p className={styles.text}>{text.text10}</p>
            <p className={styles.text}>{text.text10One}</p>
            <p className={styles.text}>{text.text10Two}</p>
            <p className={styles.text}>{text.text10Three}</p>

            <p className={styles.title}>{text.title11}</p>
            <p className={styles.text}>{text.text11}</p>

            <p className={styles.title}>{text.title12}</p>
            <p className={styles.text}>
              {text.text12Start}
              <span className={styles.bold}>{text.text12BoldOne}</span>
              {text.text12Middle}
              <span className={styles.bold}>{text.text12BoldOne}</span>
              {text.text12End}
            </p>

            <p className={styles.title}>{text.title13}</p>
            <p className={styles.text}>{text.text13Start}</p>
            <p className={styles.text}>
              <span className={styles.bold}>{text.text13Bold}</span>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
