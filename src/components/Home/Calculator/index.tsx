import { Box } from "@mui/material";
import { sxStyles } from "./sxStyles";
import styles from "./calculator.module.css";
import { SlidersContainer } from "./SlidersContainer";
import { t } from "@/language";

const getUsdRate = async () => {
  try {
    const response = await fetch(
      "https://economia.awesomeapi.com.br/json/last/USD-BRL,USD-EUR",
    );
    const data = await response.json();
    return {
      usdBrl: parseFloat(data.USDBRL.bid),
      usdEur: parseFloat(data.USDEUR.bid),
    };
  } catch (error) {
    console.error("Erro ao buscar a cotação do dólar", error);
    return null;
  }
};

export const Calculator = async ({ lan }: { lan: "pt" | "en" | "es" }) => {
  const exchanges = await getUsdRate();
  const text = t[lan].calculator;

  return (
    <Box sx={sxStyles.container} id="calculator">
      <Box sx={sxStyles.box}>
        <p className={styles.title}>{text.title}</p>
        <p className={styles.subtitle}>{text.subtitle}</p>
        <SlidersContainer lan={lan} exchanges={exchanges} />
      </Box>
    </Box>
  );
};
