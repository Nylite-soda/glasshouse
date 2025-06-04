"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Text,
  Title,
  ActionIcon,
  Group,
  Avatar,
  SimpleGrid,
  Grid,
  GridCol,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styles from "@/styles/Testimonials.module.css";

interface Testimonial {
  id?: string;
  name: string;
  role: string;
  company?: string;
  message: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  layout?: "grid" | "carousel";
  columns?: { desktop: number; tablet: number; mobile: number };
  autoplayDelay?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showRating?: boolean;
  backgroundColor?: string;
  maxItemsPerView?: number;
}

const TestimonialSection: React.FC<TestimonialsProps> = ({
  title = "What Our Clients Say",
  subtitle = "Our tailored solutions cater to the exacting standards and expectations of our esteemed clients, ensuring their water needs are met with precision and excellence",
  testimonials,
  layout = "grid",
  columns = { desktop: 2, tablet: 1, mobile: 1 },
  autoplayDelay = 4000,
  showArrows = true,
  showDots = true,
  showRating = false,
  backgroundColor,
  maxItemsPerView = 4,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Autoplay functionality for carousel
  useEffect(() => {
    if (
      isPlaying &&
      testimonials.length > maxItemsPerView &&
      layout === "carousel"
    ) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, autoplayDelay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, testimonials.length, autoplayDelay, layout, maxItemsPerView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Get testimonials to display based on layout
  const getVisibleTestimonials = () => {
    if (layout === "grid") {
      return testimonials;
    }

    // For carousel layout
    const itemsToShow = isMobile
      ? 1
      : Math.min(maxItemsPerView, testimonials.length);
    const visibleItems = [];

    for (let i = 0; i < itemsToShow; i++) {
      const itemIndex = (currentIndex + i) % testimonials.length;
      visibleItems.push(testimonials[itemIndex]);
    }

    return visibleItems;
  };

  const visibleTestimonials = getVisibleTestimonials();
  const shouldShowNavigation =
    layout === "carousel" && testimonials.length > maxItemsPerView;

  // Render testimonial card
  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <Box className={styles.testimonialCard}>
      <Text
        className={
          styles.testimonialMessage +
          " line-clamp-5 !md:min-h-[250px] !md:line-clamp-4"
        }
      >
        {testimonial.message}
      </Text>

      <Group className={styles.testimonialAuthor} gap="sm">
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          color="myColor.7"
          size="md"
          className={styles.authorAvatar}
        >
          {testimonial.name.charAt(0)}
        </Avatar>
        <Box>
          <Text className={styles.authorName}>{testimonial.name}</Text>
          <Text className={styles.authorRole}>
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </Text>
        </Box>
      </Group>

      {showRating && testimonial.rating && (
        <Group className={styles.rating} gap="xs">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${styles.star} ${
                i < testimonial.rating! ? styles.starFilled : styles.starEmpty
              }`}
            >
              ★
            </span>
          ))}
        </Group>
      )}
    </Box>
  );

  return (
    <Box
      className={styles.testimonialsContainer}
      style={{ backgroundColor: backgroundColor || "transparent" }}
    >
      {/* Header */}
      <Box className={styles.testimonialsHeader}>
        <Title order={2} className={styles.testimonialsTitle}>
          {title}
        </Title>
        <Text className={styles.testimonialsSubtitle}>{subtitle}</Text>
      </Box>

      {/* Testimonials Content */}
      <Box
        className={styles.testimonialsWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation Arrows for Carousel */}
        {shouldShowNavigation && showArrows && !isMobile && (
          <>
            <ActionIcon
              className={`${styles.testimonialArrow} ${styles.testimonialArrowLeft}`}
              onClick={goToPrevious}
              variant="default"
              size="lg"
              aria-label="Previous testimonial"
            >
              <IconChevronLeft size={20} />
            </ActionIcon>
            <ActionIcon
              className={`${styles.testimonialArrow} ${styles.testimonialArrowRight}`}
              onClick={goToNext}
              variant="default"
              size="lg"
              aria-label="Next testimonial"
            >
              <IconChevronRight size={20} />
            </ActionIcon>
          </>
        )}

        {/* Testimonials Grid/Carousel */}
        {layout === "grid" ? (
          <SimpleGrid
            cols={columns}
            spacing="xl"
            className={styles.testimonialsGrid}
          >
            <Grid
              gutter={{ base: 20, xs: "md", md: "xl" }}
              justify="center"
              //   align="center"
              className="flex justify-center"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <GridCol
                  key={testimonial.id || index}
                  span={{ base: 12, md: 6 }}
                >
                  {renderTestimonialCard(testimonial, index)}
                </GridCol>
              ))}
            </Grid>
          </SimpleGrid>
        ) : (
          <Group
            className={styles.testimonialsCarousel}
            gap="xl"
            justify="center"
          >
            {visibleTestimonials.map((testimonial, index) =>
              renderTestimonialCard(testimonial, index)
            )}
          </Group>
        )}

        {/* Dots Indicator for Carousel */}
        {shouldShowNavigation && showDots && (
          <Group className={styles.testimonialDots} justify="center" gap="xs">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.testimonialDot} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </Group>
        )}
      </Box>
    </Box>
  );
};

export default TestimonialSection;
