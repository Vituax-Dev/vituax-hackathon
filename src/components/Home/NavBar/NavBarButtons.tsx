import { Button } from "@mui/material";
import { t } from "@/language";
import { INavBarProps } from ".";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { vinila } from "@/app/fonts/Vinila";

export default function NavBarButtons({ lan }: INavBarProps) {
  const text = t[lan].navBar;

  return (
    <div className={styles.navBarButtonsContainer}>
      <Button
        variant="contained"
        component={Link}
        href="#contactUs"
        color="primary"
        className={`${vinila} ${styles.contactUsButton}`}
      >
        {text.speakWithSpecialist}
      </Button>
    </div>
  );
}
