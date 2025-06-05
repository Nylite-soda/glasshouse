"use client";

import React from "react";
import {
  Button,
  Container,
  Grid,
  GridCol,
  Text,
  Title,
  Box,
} from "@mantine/core";
import styles from "@/styles/About.module.css";
import { useRouter } from "next/navigation";

interface AboutProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
  mh?: string;
  rev?: boolean;
  destination?: string;
  size?: "sm" | "md" | "lg"; // New size prop
}

const About: React.FC<AboutProps> = ({
  title = "About Us",
  description = "Glass House Waters is a team of professionals committed to providing high-quality water services. We are dedicated to ensuring reliable and sustainable water supply and management for our clients.\n\nWith years of experience in the field of Water Works, we have the expertise to deliver solutions tailored to your specific needs.",
  buttonText = "Get Started",
  imageUrl = "/images/about-logo.jpg",
  imageAlt = "Glass House Waters",
  mh,
  rev = false,
  destination,
  size = "lg", // Default to large size for backward compatibility
}) => {
  const reverse = rev ? -1 : 0;
  console.log(reverse);
  const router = useRouter();

  // Size-specific class names
  const sizeClasses = {
    sm: styles.sizeSmall,
    md: styles.sizeMedium,
    lg: styles.sizeLarge,
  };

  return (
    <Box className={`${styles.aboutSection} ${sizeClasses[size]}`}>
      <Container size="xl">
        <Grid
          className={styles.grid + " !flex"}
          // style={{ flexDirection: reverse }}
          gutter="xl"
        >
          {/* Image Column */}
          <GridCol span={{ base: 12, md: 6 }} offset={0}>
            <Box className={styles.imageColumn}>
              <Box
                className={styles.imageWrapper}
                style={{ maxHeight: mh || "100%" }}
              >
                <Box className={styles.imageInner}>
                  <img src={imageUrl} alt={imageAlt} className={styles.image} />
                </Box>
              </Box>
            </Box>
          </GridCol>

          {/* Content Column */}
          <GridCol span={{ base: 12, md: 6 }} order={reverse}>
            <Box className={styles.contentColumn}>
              <Title className={styles.title}>
                {title}
                <Box className={styles.titleUnderline} />
              </Title>

              <Text size="lg" className={styles.description}>
                {description.split(/(\n+)/).map((part, index) => {
                  if (/^\n+$/.test(part)) {
                    const breakCount = part.length;
                    return (
                      <React.Fragment key={index}>
                        {Array.from({ length: breakCount }, (_, i) => (
                          <br key={i} />
                        ))}
                      </React.Fragment>
                    );
                  }
                  // If it's actual text content and not empty
                  if (part.trim()) {
                    return <span key={index}>{part}</span>;
                  }
                  // Skip empty parts
                  return null;
                })}
              </Text>

              <Button
                className={styles.button}
                variant="filled"
                size="lg"
                onClick={() => router.push(destination || "#")}
              >
                {buttonText}
              </Button>
            </Box>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
