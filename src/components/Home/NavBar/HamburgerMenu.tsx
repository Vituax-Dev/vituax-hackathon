"use client";

import { Box, Button, Drawer, IconButton, List, ListItem } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { t } from "@/language";
import { INavBarProps } from ".";
import styles from "./NavBar.module.css";
import Link from "next/link";

export default function HamburgerMenu({ lan }: INavBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const text = t[lan].navBar;

  return (
    <>
      <IconButton
        color="inherit"
        edge="end"
        onClick={toggleDrawer(true)}
        className={styles.hamburgerMenu}
      >
        <Menu className={styles.hamburgerList} />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className={styles.drawer}
      >
        <Box
          className={styles.box}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {/* Campos de navegação */}
            <ListItem>
              <Button
                component={Link}
                className={styles.menuListPopper}
                href={`#ourSolutions`}
              >
                {text.aboutUs}
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component={Link}
                className={styles.menuListPopper}
                href={`#upixNetworks`}
              >
                {text.advantages}
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component={Link}
                className={styles.menuListPopper}
                href={`#partners`}
              >
                {text.solutions}
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
