"use client";

import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Pagination,
  Scrollbar,
  Navigation,
} from "swiper/modules";
import styles from "./Carousel.module.css";
import { t } from "@/language";

export interface ICarouselProps {
  lan: "pt" | "en" | "es";
}

export default function Carousel({ lan }: ICarouselProps) {
  const [runAnimation, setRunAnimation] = useState(false);
  // const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    // if (!isRendered) setIsRendered(true);
    if (!runAnimation) setRunAnimation(true);
  }, [runAnimation]);
  // [runAnimation, isRendered]

  const text = t[lan].carousel;

  const slidesData = [
    {
      title: text.videoOneTitle,
      boldTitle: text.videoOneBoldTitle,
      description: text.videoOneDescription,
      videoUrl: "/videos/vid1.webm",
    },
    {
      title: text.videoTwoTitle,
      boldTitle: text.videoTwoBoldTitle,
      description: text.videoOneDescription,
      videoUrl: "/videos/vid1.webm",
    },
    {
      title: text.videoThreeTitle,
      boldTitle: text.videoThreeBoldTitle,
      description: text.videoOneDescription,
      videoUrl: "/videos/vid7.webm",
    },
  ];

  const [slides, setSlides] = useState<
    {
      title: unknown;
      boldTitle: unknown;
      description: unknown;
      videoUrl: unknown;
    }[]
  >(slidesData);
  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        padding: "0 32px",
        overflow: "hidden",
        borderRadius: "24px",
        "@media (max-width: 650px)": {
          padding: "0",
          borderRadius: "0 0 24px 24px",
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
        onSlideChange={() => setRunAnimation(false)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`${index}-${slide.title}`}
            style={{ position: "relative" }}
          >
            <div className={styles.videoOverlay}>
              {/* trocar true por isRendered */}
              {true && (
                <Box
                  className={styles.videoBox}
                  component="video"
                  src={slide.videoUrl as string}
                  autoPlay
                  muted
                  playsInline
                  loop
                  onLoadedData={(e) => (e.target as HTMLVideoElement).play()}
                />
              )}
              <Box className={styles.slideContentBox}>
                {runAnimation && (
                  <>
                    <p className={styles.slideTitle}>
                      {slide?.title as string}
                      <span className={styles.boldTitle}>
                        {slide?.boldTitle as string}
                      </span>
                    </p>
                    <p className={styles.slideDescription}>
                      {slide?.description as string}
                    </p>
                  </>
                )}
              </Box>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        href="#learnMore"
        sx={{
          left: "48px !important",
          bottom: "216px !important",
          color: "var(--white)",
          border: "2px solid var(--white)",
          borderRadius: "12px",
          backgroundColor: "transparent !important",
          padding: "8px 70px",
          fontWeight: "600",
          fontSize: "16px",
          zIndex: 10,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "var(--white) !important",
            color: "var(--royalBlue) !important",
          },
          "@media (max-width: 650px)": {
            backgroundColor: "var(--lightBlue) !important",
            color: "var(--royalBlue) !important",
            bottom: "166px !important",
            left: "40px !important",
            border: "none",
          },
        }}
        onClick={() => {
          setSlides([
            {
              title: text.videoThreeBoldTitle,
              boldTitle: null,
              description: JSON.stringify({
                description: text.videoOneDescription,
              }),
              videoUrl: "/videos/vid1.webm",
            },
            {
              title: false,
              boldTitle: Number("alalala"),
              description: text.videoThreeBoldTitle,
              videoUrl: "/videos/vid2.webm",
            },
            {
              title: null,
              boldTitle: undefined,
              description: true,
              videoUrl: "/videos/vid7.webm",
            },
            {
              title: text.videoThreeTitle,
              boldTitle: text.videoThreeBoldTitle,
              description: text.videoOneDescription,
              videoUrl: "/videos/vid1.webm",
            },
          ]);
        }}
      >
        {text.learnMore}
      </Button>
    </Box>
  );
}
