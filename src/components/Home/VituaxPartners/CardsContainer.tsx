import { Box } from "@mui/material";
import React from "react";
import { DefaultCard } from "./DefaultCard";
import { IconBg } from "@/icons/IconBg";
import { RobotIcon } from "@/icons/RobotIcon";
import { NetworkIcon } from "@/icons/NetworkIcon";
import { CloudIcon } from "@/icons/CloudIcon";
import { CreditCardIcon } from "@/icons/CreditCardIcon";
import { MediumCard } from "./MediumCard";
import { MainCard } from "./MainCard";
import { Languages } from "@/app/[lan]/page";
import { t } from "@/language";

export const CardsContainer = ({ lan }: { lan: Languages }) => {
  const text = t[lan].vituaxPartners;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "48px",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "100%",
        }}
      >
        <DefaultCard
          Icon={
            <IconBg>
              <RobotIcon />
            </IconBg>
          }
          title={text.titleCardOne}
          description={text.descCardOne}
          paddingBottom="60px"
        />
        <DefaultCard
          Icon={
            <IconBg>
              <NetworkIcon />
            </IconBg>
          }
          title={text.titleCardTwo}
          description={text.descCardTwo}
          paddingBottom="48px"
          alignItems="flex-start"
        />
        <DefaultCard
          Icon={
            <IconBg>
              <CloudIcon />
            </IconBg>
          }
          title={text.titleCardThree}
          description={text.descCardThree}
          paddingBottom="42px"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "100%",
        }}
      >
        <MainCard title={text.titleCardFour} description={text.descCardFour} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "100%",
        }}
      >
        <DefaultCard
          Icon={
            <IconBg>
              <CreditCardIcon />
            </IconBg>
          }
          title={text.titleCardFive}
          description={text.descCardFive}
          paddingBottom="60px"
        />
        <MediumCard title={text.titleCardSix} description={text.descCardSix} />
      </Box>
    </Box>
  );
};
