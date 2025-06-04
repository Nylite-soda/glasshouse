"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Title, ActionIcon, Group } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import classes from "@/styles/Carousel.module.css";

interface CarouselItem {
  id?: string;
  number?: string;
  title: string;
  description: string;
  color?: string;
  bgcolor?: string;
}

interface CarouselProps {
  title: string;
  subtitle: string;
  items: CarouselItem[];
  autoplayDelay?: number;
  showArrows?: boolean;
  showDots?: boolean;
  height?: string | number;
  titleHeight?: string | number;
}

const Carousel: React.FC<CarouselProps> = ({
  title,
  subtitle,
  items,
  autoplayDelay = 4000,
  showArrows = true,
  showDots = true,
  height,
  titleHeight,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoplayDelay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, items.length, autoplayDelay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Get items to display (3 on desktop, 1 on mobile)
  const getVisibleItems = () => {
    const itemsToShow = isMobile ? 1 : 3;
    const visibleItems = [];

    for (let i = 0; i < itemsToShow; i++) {
      const itemIndex = (currentIndex + i) % items.length;
      visibleItems.push(items[itemIndex]);
    }

    return visibleItems;
  };

  const visibleItems = getVisibleItems();

  return (
    <Box className={classes.carouselContainer}>
      {/* Header */}
      <Box className={classes.carouselHeader}>
        <Title order={2} className={classes.carouselTitle}>
          {title}
        </Title>
        <Text className={classes.carouselSubtitle}>{subtitle}</Text>
      </Box>

      {/* Carousel */}
      <Box
        className={classes.carouselWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselRef}
      >
        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && !isMobile && (
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
        <Group className={classes.carouselItems} gap="xl" justify="center">
          {visibleItems.map((item, index) => (
            <Box
              key={`${item.id}-${index}`}
              className={classes.carouselItem}
              style={{ backgroundColor: item.bgcolor || "transparent" }}
            >
              {item.number ? (
                <Box
                  className={classes.itemNumber}
                  style={{ backgroundColor: item.color }}
                >
                  <Text fw={700} c="white" size="lg">
                    {item.number}
                  </Text>
                </Box>
              ) : null}
              <Title
                order={3}
                className={classes.itemTitle}
                style={{ height: titleHeight ? titleHeight : "auto" }}
              >
                {item.title}
              </Title>
              <Text
                className={classes.itemDescription}
                style={{ height: height ? height : "146px" }}
              >
                {item.description}
              </Text>
            </Box>
          ))}
        </Group>

        {/* Dots Indicator */}
        {showDots && items.length > 1 && (
          <Group className={classes.carouselDots} justify="center" gap="xs">
            {items.map((_, index) => (
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
