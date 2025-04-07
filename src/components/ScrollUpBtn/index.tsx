"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "@/icons/ArrowUp";
import styles from "./ScrollUpBtn.module.css";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão quando o usuário rolar mais de 300px para baixo
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="#mainHeader"
      className={`${styles.arrowUp} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <ArrowUp />
    </Link>
  );
}
