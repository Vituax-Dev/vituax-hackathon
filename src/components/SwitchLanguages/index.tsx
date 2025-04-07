"use client";

import { Button, List, ListItem, Popover, Stack } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import brazilFlag from "../../assets/flags/brazilFlag.png";
import usaFlag from "../../assets/flags/usaFlag.png";
import spainFlag from "../../assets/flags/spainFlag.png";
import { changeLanguage } from "@/app/actions";
import styles from "./switchLanguages.module.css";

type Languages = "pt" | "en" | "es";

export const ImgFlagOfBrazil = () => (
  <Image
    src={brazilFlag}
    alt="Brazil flag"
    width={80}
    height={56}
    className={styles.flag}
  />
);

export const ImgFlagOfEUA = () => (
  <Image
    src={usaFlag}
    alt="USA flag"
    width={80}
    height={56}
    className={styles.flag}
  />
);

export const ImgFlagOfSpain = () => (
  <Image
    src={spainFlag}
    alt="SPANISH flag"
    width={80}
    height={56}
    className={styles.flag}
  />
);

export default function SwitchLanguages() {
  const path = usePathname();
  const pageLan = path.slice(1, 3) as Languages;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [lan, setLan] = useState<Languages | null>(pageLan);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectLanguage = async (newLan: Languages) => {
    handleClose();
    await changeLanguage(newLan);
    setLan(newLan);
  };

  if (pageLan !== lan && lan !== null) {
    window.location.href = "/" + lan + path.slice(3);
    setLan(null);
    return;
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const getFlag = (languages: Languages) => {
    switch (languages) {
      case "pt":
        return <ImgFlagOfBrazil />;
      case "en":
        return <ImgFlagOfEUA />;
      case "es":
        return <ImgFlagOfSpain />;
      default:
        return <ImgFlagOfBrazil />;
    }
  };

  return (
    <Stack height={"40px"}>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        className={styles.listButton}
      >
        {getFlag(pageLan)}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List className={styles.list}>
          <ListItem
            className={styles.listItem}
            onClick={() => handleSelectLanguage("en")}
          >
            <ImgFlagOfEUA />
          </ListItem>
          <ListItem
            className={styles.listItem}
            onClick={() => handleSelectLanguage("pt")}
          >
            <ImgFlagOfBrazil />
          </ListItem>
          <ListItem
            className={styles.listItem}
            onClick={() => handleSelectLanguage("es")}
          >
            <ImgFlagOfSpain />
          </ListItem>
        </List>
      </Popover>
    </Stack>
  );
}
