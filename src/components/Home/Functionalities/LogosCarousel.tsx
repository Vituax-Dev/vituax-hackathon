"use client";

import React from "react";
import { Box } from "@mui/material";
import styles from "./Partners.module.css";
import { CardImageOne } from "@/icons/CardsImagesSvg/CardImageOne";
import { CardImageTwo } from "@/icons/CardsImagesSvg/CardImageTwo";
import { CardImageThree } from "@/icons/CardsImagesSvg/CardImageThree";
import { CardImageFour } from "@/icons/CardsImagesSvg/CardImageFour";
import { CardImageFive } from "@/icons/CardsImagesSvg/CardImageFive";
import { t } from "@/language";
import { IPartnersProps } from ".";

export default function LogosCarousel({ lan }: IPartnersProps) {
  const text = t[lan].functionalities;

  const cards = [
    {
      title: text.cardOneTitle,
      subtitleStart: text.cardOneDescStart,
      subtitleBold: text.cardOneDescBold,
      subtitleEnd: text.cardOneDescEnd,
      img: CardImageOne,
    },
    {
      title: text.cardTwoTitle,
      subtitleStart: text.cardTwoDescStart,
      subtitleBold: text.cardTwoDescBold,
      subtitleEnd: text.cardTwoDescEnd,
      img: CardImageTwo,
    },
    {
      title: text.cardThreeTitle,
      subtitleStart: text.cardThreeDescStart,
      subtitleBold: text.cardThreeDescBold,
      subtitleEnd: text.cardThreeDescEnd,
      img: CardImageThree,
    },
    {
      title: text.cardFourTitle,
      subtitleStart: text.cardFourDescStart,
      subtitleBold: text.cardFourDescBold,
      subtitleEnd: text.cardFourDescEnd,
      img: CardImageFour,
    },
    {
      title: text.cardFiveTitle,
      subtitleStart: text.cardFiveDescStart,
      subtitleBold: text.cardFiveDescBold,
      subtitleEnd: text.cardFiveDescEnd,
      img: CardImageFive,
    },
  ];

  return (
    <Box className={styles.carouselContainer}>
      <Box className={styles.scrollingWrapper}>
        {[...cards, ...cards].map((card, index) => (
          <div key={index} className={styles.cardContainer}>
            <div className={styles.cardTextBox}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardSub}>
                {card.subtitleStart}
                <span className={styles.cardSubBold}>{card.subtitleBold}</span>
                {card.subtitleEnd}
              </p>
            </div>
            <card.img />
          </div>
        ))}
      </Box>
    </Box>
  );
}
