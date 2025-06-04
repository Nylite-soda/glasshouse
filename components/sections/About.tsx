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

interface AboutProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
  onButtonClick?: () => void;
}

const About: React.FC<AboutProps> = ({
  title = "About Us",
  description = "Glass House Waters is a team of professionals committed to providing high-quality water services. We are dedicated to ensuring reliable and sustainable water supply and management for our clients.\n\nWith years of experience in the field of Water Works, we have the expertise to deliver solutions tailored to your specific needs.",
  buttonText = "Get Started",
  imageUrl = "/images/about-logo.jpg",
  imageAlt = "Glass House Waters",
  onButtonClick,
}) => {
  return (
    <Box className={styles.aboutSection}>
      <Container size="xl">
        <Grid className={styles.grid}>
          {/* Image Column */}
          <GridCol
            span={{ base: 12, md: 5, lg: 5 }}
            order={{ base: 2, md: 1 }}
            className={styles.imageColumn}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageInner}>
                <img src={imageUrl} alt={imageAlt} className={styles.image} />
              </div>
            </div>
          </GridCol>

          {/* Content Column */}
          <GridCol
            span={{ base: 12, md: 7, lg: 6 }}
            order={{ base: 1, md: 2 }}
            // offset={{ lg: 1 }}
            className={styles.contentColumn + " lg:!py-7"}
          >
            <Title order={2} className={styles.title}>
              {title}
              <div className={styles.titleUnderline} />
            </Title>

            <Text size="lg" className={styles.description}>
              {description.split("\n\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < description.split("\n\n").length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </Text>

            <Button
              variant="gradient"
              gradient={{
                from: "var(--mantine-color-myColor-6)",
                to: "var(--mantine-color-myColor-8)",
              }}
              size="xl"
              radius="md"
              className={styles.button}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
