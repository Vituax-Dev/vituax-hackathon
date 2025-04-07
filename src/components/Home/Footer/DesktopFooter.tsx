import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./Footer.module.css";
import { VituaxLogo } from "@/icons/VituaxLogo";
import { Box, IconButton, Typography } from "@mui/material";
import { FooterBgLogo } from "@/icons/FooterBgLogo";
import Link from "next/link";
import { FooterArrow } from "@/icons/FooterArrow";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";
import { PrivacyPolicyButton } from "./PrivacyPolicyButton";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { TermsOfUseButton } from "./TermsOfUseButton";

export const DesktopFooter = ({ lan }: { lan: Languages }) => {
  const text = t[lan].footer;

  return (
    <footer className={styles.desktopFooter}>
      <FooterBgLogo className={styles.bgLogo} />
      <div className={styles.logoContainer}>
        <VituaxLogo color="#BDC5E6" className={styles.logo} />
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "48px",
          justifyContent: "center",
          position: "relative",
          "@media (max-width: 750px)": {
            flexDirection: "column",
            gap: "40px",
            alignItems: "flex-start",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "132px",
            "@media (max-width: 750px)": { height: "fit-content", gap: "16px" },
          }}
        >
          <p className={styles.title}>
            {text.titleStart}
            <span className={styles.boldTitle}>{text.titleBold}</span>
          </p>
          <Box
            sx={{ display: "flex", gap: "16px", justifyContent: "flex-start" }}
          >
            <IconButton
              href="https://www.instagram.com/vituax/"
              rel="noopener noreferrer"
              LinkComponent={Link}
              target="_blank"
              sx={{
                backgroundColor: "#647AF4",
                zIndex: 100,
              }}
            >
              <InstagramIcon sx={{ color: "var(--white)" }} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/vituax/"
              LinkComponent={Link}
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                backgroundColor: "#647AF4",
                zIndex: 100,
              }}
            >
              <LinkedInIcon sx={{ color: "var(--white)" }} />
            </IconButton>
          </Box>
        </Box>
        <div className={styles.divider} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            "@media (max-width: 750px)": { gap: "16px", marginTop: "24px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <PhoneIcon />
            <Typography
              sx={{
                color: "#FFF6B2",
                fontFamily: `"__vinila_1710d6", "__vinila_Fallback_1710d6" !important`,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              {text.phoneNumber}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <FooterArrow />
            <TermsOfUseButton lan={lan} />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "30px",
            }}
          >
            <FooterArrow />
            <PrivacyPolicyButton lan={lan} />
          </Box>
        </Box>
      </Box>
      <p className={styles.footerText}>{text.copyright}</p>
    </footer>
  );
};
