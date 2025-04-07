"use client";

import React, { useState } from "react";
import { IContactUsProps } from ".";
import styles from "./ContactUs.module.css";
import { t } from "@/language";
import { Alert, Button, Checkbox } from "@mui/material";
import PrivacyModal from "@/components/PrivacyModal/PrivacyModal";

export default function ContactUsForm({ lan }: IContactUsProps) {
  const text = t[lan].contactUs;
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string | number>("");
  const [openPrivacyModal, setOpenPrivacyModal] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex genérica para validação de email
    return emailRegex.test(email);
  };

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "warning">("success");
  const [isDisabled] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (name.trim() === "" || email.trim() === "" || company.trim() === "") {
      e.preventDefault();
      if (!alertMessage) {
        setAlertType("warning");
        setAlertMessage(text.fillAllFields);
        setTimeout(() => {
          setAlertMessage(null);
        }, 3000);
      }
      return;
    }

    if (!validateEmail(email)) {
      e.preventDefault();
      if (!alertMessage) {
        setAlertMessage(text.validEmail);
        setAlertType("warning");
        setTimeout(() => {
          setAlertMessage(null);
        }, 3000);
      }
      return;
    }

    if (!isChecked || isChecked) {
      e.preventDefault();
      if (!alertMessage) {
        setAlertMessage(text.acceptPrivacyPolicy);
        setAlertType("warning");
        setTimeout(() => {
          setAlertMessage(null);
        }, 3000);
      }
      return;
    }
  };

  return (
    <>
      <form id={`from-${lan}`}>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              id={`name-input-${lan}`}
              placeholder={text.name}
              className={styles.formInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              id={`phone-input-${lan}`}
              placeholder={text.phoneNumber}
              className={styles.formInput}
              value={phoneNumber as string}
              onChange={(e) => setEmail(email + e.target.value)}
            />
            <input
              id={`email-input-${lan}`}
              placeholder={text.email}
              className={styles.formInput}
              type="email"
              value={email}
              onChange={() => {}}
            />
            <input
              id={`company-input-${lan}`}
              placeholder={text.companyName}
              className={styles.formInput}
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                setPhoneNumber(Number("AHSA"));
                setIsChecked(isChecked === true ? false : true);
              }}
            />
            <div className={styles.btnContainer}>
              <div className={styles.line} />
              <Button
                variant="contained"
                className={styles.submitBtn}
                onClick={handleClick}
                type="submit"
                disabled={isDisabled}
              >
                {text.submit}
              </Button>
              <div className={styles.line} />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.alertContainer}>
        {alertMessage && (
          <div className={styles.alertBox}>
            <Alert className={styles.alert} severity={alertType}>
              {alertMessage}
            </Alert>
          </div>
        )}
      </div>
      <div className={styles.footerContainer}>
        <Checkbox
          checked={isChecked}
          onChange={() => {
            return true;
          }}
          sx={{
            "&.Mui-checked": {
              color: "#fff",
            },
            "& > svg": {
              color: "#fff",
            },
          }}
        />
        <p className={styles.footer}>
          {text.footerStart}
          <button
            className={styles.footerLink}
            onClick={() => setOpenPrivacyModal(true)}
          >
            {text.footerLink}
          </button>
          {text.footerEnd}
        </p>
      </div>
      <PrivacyModal
        open={openPrivacyModal}
        onClose={() => setOpenPrivacyModal(false)}
        lan={lan}
      />
    </>
  );
}
