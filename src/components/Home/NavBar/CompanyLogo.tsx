import { Box } from "@mui/material";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { VituaxLogo } from "@/icons/VituaxLogo";

export default function CompanyLogo({ lan }: { lan: "pt" | "en" | "es" }) {
  return (
    <Box display={"inline-flex"} className={styles.logoBox}>
      <Link href={`/${lan}`} about="Home page" className={styles.logoLink}>
        <VituaxLogo color="var(--white)" />
      </Link>
    </Box>
  );
}
