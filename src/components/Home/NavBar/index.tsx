import Toolbar from "@mui/material/Toolbar";
import CompanyLogo from "./CompanyLogo";
import NavFields from "./NavFields";
import NavBarButtons from "./NavBarButtons";
import styles from "./NavBar.module.css";
import { Box } from "@mui/material";
import { HeaderLanguages } from "./HeaderLanguages";

export interface INavBarProps {
  lan: "pt" | "en" | "es";
}

export default function NavBar({ lan }: INavBarProps) {
  return (
    <>
      <Box position="static" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          {/* Logo da Empresa */}
          <CompanyLogo lan={lan} />
          {/* Menu responsivo */}
          {/* <HamburgerMenu lan={lan} /> */}
          {/* Abas de Navegação */}
          <NavFields lan={lan} />
          {/* Botões de Estilo e Navegação */}
          <NavBarButtons lan={lan} />
        </Toolbar>
      </Box>
      <HeaderLanguages />
    </>
  );
}
