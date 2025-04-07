"use client";

import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./Solutions.module.css";
import { MulticloudPlataform } from "./MulticloudPlataform";
import { CloudComputing } from "./CloudComputing";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";

export const Solutions = ({ lan }: { lan: Languages }) => {
  const text = t[lan].solutions;
  const [firstButtonActive, setFirstButtonActive] = useState(true);
  return (
    <Box
      sx={{ width: "100%", boxSizing: "border-box", padding: "32px" }}
      id="solutions"
    >
      <Box
        sx={{
          borderRadius: "24px",
          background: "linear-gradient(270deg, #2E0282 0%, #3D04AA 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          padding: "112px 40px",
        }}
      >
        <p className={styles.title}>{text.title}</p>
        <div className={styles.panelContainer}>
          <Button
            className={firstButtonActive ? styles.active : styles.inactive}
            onClick={() => setFirstButtonActive(true)}
          >
            {text.btnOne}
          </Button>
          <Button
            className={firstButtonActive ? styles.inactive : styles.active}
            onClick={() => setFirstButtonActive(false)}
          >
            {text.btnTwo}
          </Button>
        </div>
        {firstButtonActive ? (
          <MulticloudPlataform lan={lan} />
        ) : (
          <CloudComputing lan={lan} />
        )}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            marginTop: "48px",
            aspectRatio: "16 / 9", // Mantém a proporção do vídeo
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/FgtYsofsBFe?si=QaD5YRY3XyzUDhIu"
            title="YouTube video player"
            allowFullScreen
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};
