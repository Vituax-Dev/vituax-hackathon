"use client";

import React from "react";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./PrivacyModal.module.css";
import { t } from "@/language";

export interface IPrivacyModalProps {
  open: boolean;
  onClose: () => void;
  lan: "pt" | "en" | "es";
}

export default function PrivacyModal({
  open,
  onClose,
  lan,
}: IPrivacyModalProps) {
  const text = t[lan].privacyModal;

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
            <p className={styles.text}>{text.text1}</p>

            <p className={styles.title}>{text.title2}</p>
            <p className={styles.text}>{text.text2One}</p>
            <p className={styles.text}>
              {text.text2TwoStart}
              <span className={styles.bold}>{text.text2TwoBold}</span>
              {text.text2TwoEnd}
            </p>

            <p className={styles.title}>{text.title3}</p>
            <p className={styles.text}>
              {text.text3Start}
              <span className={styles.bold}>{text.text3Bold}</span>
              {text.text3End}
            </p>

            <p className={styles.title}>{text.title4}</p>
            <p className={styles.text}>
              {text.text4OneStart}
              <span className={styles.bold}>{text.text4OneBold}</span>
            </p>
            <p className={styles.text}>{text.text4Two}</p>
            <p className={styles.text}>
              {text.text4ThreeStart}
              <span className={styles.bold}>{text.text4ThreeBold}</span>
              {text.text4ThreeEnd}
            </p>
            <p className={styles.text}>{text.text4Four}</p>

            <p className={styles.title}>{text.title5}</p>
            <p className={styles.text}>
              {text.text5OneStart}
              <span className={styles.bold}>{text.text5OneBold}</span>
              {text.text5OneEnd}
            </p>
            <p className={styles.text}>{text.text5Two}</p>

            <p className={styles.title}>{text.title6}</p>
            <p className={styles.text}>{text.text6}</p>

            <p className={styles.title}>{text.title7}</p>
            <p className={styles.text}>
              {text.text7OneStart}
              <span className={styles.bold}>{text.text7OneBold}</span>
              {text.text7OneEnd}
            </p>
            <p className={styles.text}>{text.text7Two}</p>

            <p className={styles.title}>{text.title8}</p>
            <p className={styles.text}>{text.text8One}</p>
            <p className={styles.text}>{text.text8Two}</p>

            <p className={styles.title}>{text.title9}</p>
            <p className={styles.text}>{text.text9}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
