import React, { ReactNode } from "react";
// import styles from "@/styles/HeroImageRight.module.css";
import { Container, Text, Title } from "@mantine/core";

interface HeroProps {
  title: string;
  subtitle?: string;
}

const GeneralHero: React.FC<HeroProps> = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="hero">
      {/* <Container size="lg">
          <div className={styles.inner}>
            <div className={styles.content}>
              <Title className={styles.title + " lg:!text-5xl"}>
                Your{" "}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "white", to: "#acc5ed" }}
                  className={styles.gradientText}
                >
                  lasting solution
                </Text>{" "}
                <br />
                to your Water Problems
              </Title>
              <Text className={styles.description} mt={30}>
                Dedicated to ensuring reliable and sustainable water supply and
                management.
              </Text>
              <Button
                variant="gradient"
                gradient={{ from: "white", to: "#d8e3f5" }}
                size="xl"
                className={styles.control + " !text-[#0e3877]"}
                mt={40}
              >
                Get started
              </Button>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src="/images/hero-img.png"
                  alt="Water drops"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </Container> */}

      <Container>
        <Title className="title">{title}</Title>
        <Text className="description">{subtitle}</Text>
      </Container>
    </section>
  );
};

export default GeneralHero;
