"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Title,
  ActionIcon,
  Group,
  Card,
  ThemeIcon,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import classes from "@/styles/Carousel2.module.css";

interface CarouselItem {
  id?: string;
  title: string;
  description: string;
  color?: string;
  bgcolor?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
}

interface CarouselProps {
  title?: string;
  subtitle?: string;
  items: CarouselItem[];
  autoplayDelay?: number;
  showArrows?: boolean;
  showDots?: boolean;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

const Carousel: React.FC<CarouselProps> = ({
  title,
  subtitle,
  items,
  autoplayDelay = 6000,
  showArrows = true,
  showDots = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 4 },
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying && items.length > itemsPerView[screenSize]) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = items.length - itemsPerView[screenSize];
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, autoplayDelay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, items.length, autoplayDelay, itemsPerView, screenSize]);

  const goToSlide = (index: number) => {
    const maxIndex = items.length - itemsPerView[screenSize];
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = items.length - itemsPerView[screenSize];
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = items.length - itemsPerView[screenSize];
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Get items to display based on current screen size
  const getVisibleItems = () => {
    const itemsToShow = itemsPerView[screenSize];
    const visibleItems = [];

    for (let i = 0; i < itemsToShow && i < items.length; i++) {
      const itemIndex = (currentIndex + i) % items.length;
      if (itemIndex < items.length) {
        visibleItems.push({ ...items[itemIndex], displayIndex: i });
      }
    }

    return visibleItems;
  };

  const visibleItems = getVisibleItems();
  const maxIndex = Math.max(0, items.length - itemsPerView[screenSize]);
  const showNavigation = items.length > itemsPerView[screenSize];

  return (
    <Box className={classes.carouselContainer}>
      {/* Header */}
      {(title || subtitle) && (
        <Box className={classes.carouselHeader}>
          {title && (
            <Title order={2} className={classes.carouselTitle}>
              {title}
            </Title>
          )}
          {subtitle && (
            <Text className={classes.carouselSubtitle}>{subtitle}</Text>
          )}
        </Box>
      )}

      {/* Carousel */}
      <Box
        className={classes.carouselWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselRef}
      >
        {/* Navigation Arrows */}
        {showArrows && showNavigation && (
          <>
            <ActionIcon
              className={`${classes.carouselArrow} ${classes.carouselArrowLeft}`}
              onClick={goToPrevious}
              variant="default"
              size="lg"
              aria-label="Previous slide"
            >
              <IconChevronLeft size={20} />
            </ActionIcon>
            <ActionIcon
              className={`${classes.carouselArrow} ${classes.carouselArrowRight}`}
              onClick={goToNext}
              variant="default"
              size="lg"
              aria-label="Next slide"
            >
              <IconChevronRight size={20} />
            </ActionIcon>
          </>
        )}

        {/* Items Container */}
        <Group
          className={classes.carouselItems}
          gap="lg"
          justify="flex-start"
          wrap="nowrap"
        >
          {visibleItems.map((item, index) => (
            <Card
              key={`${item.id}-${currentIndex}-${index}`}
              className={`${classes.carouselCard} ${
                index === 0
                  ? classes.firstCard
                  : " !bg-[var(--mantine-color-myColor-1)]"
              }`}
              padding="xl"
              radius="md"
              withBorder
            >
              {/* Icon or Image */}
              <Box className={classes.cardIconContainer}>
                {item.imageUrl ? (
                  <Box
                    className={classes.cardImage}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                ) : item.icon ? (
                  <ThemeIcon
                    size={48}
                    radius="md"
                    style={{ backgroundColor: item.color || "#3b82f6" }}
                    className={classes.cardIcon}
                  >
                    {item.icon}
                  </ThemeIcon>
                ) : (
                  <ThemeIcon
                    size={48}
                    radius="md"
                    style={{ backgroundColor: item.color || "#3b82f6" }}
                    className={classes.cardIcon}
                  >
                    <Box />
                  </ThemeIcon>
                )}
              </Box>

              {/* Content */}
              <Box className={classes.cardContent}>
                <Title order={4} className={classes.cardTitle}>
                  {item.title}
                </Title>
                <Text className={classes.cardDescription}>
                  {item.description}
                </Text>
              </Box>
            </Card>
          ))}
        </Group>

        {/* Dots Indicator */}
        {showDots && showNavigation && (
          <Group className={classes.carouselDots} justify="center" gap="xs">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                className={`${classes.carouselDot} ${
                  index === currentIndex ? classes.active : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </Group>
        )}
      </Box>
    </Box>
  );
};

export default Carousel;
