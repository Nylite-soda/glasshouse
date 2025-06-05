"use client";

import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Grid,
  GridCol,
  Image,
} from "@mantine/core";
import { title } from "process";

interface AdProps {
  onBookNow?: () => void;
  title: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

const Ad: React.FC<AdProps> = ({
  onBookNow,
  className,
  title,
  description,
  buttonText,
}) => {
  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      // Default action - could navigate to booking page
      console.log("Book Now clicked");
    }
  };

  return (
    <Grid gutter={0} className={className + " relative"}>
      <GridCol
        span={{ base: 12, md: 6.3 }}
        bg="#001535"
        className="!overflow-hidden"
      >
        <Container
          c="white"
          className="z-10 relative h-full w-full items-center flex"
          p="10%"
        >
          <Stack>
            <Title className=" md:!text-5xl" fw={600}>
              {title}
            </Title>
            <Text className="max-w-[500px]">{description}</Text>
            <Button className="md:max-w-[200px]">{buttonText}</Button>
          </Stack>
        </Container>
        <Circle2 classname="absolute top-0 z-1" />
        <Circle classname="absolute bottom-0 left-[25%] z-1 hidden md:block" />
      </GridCol>
      <GridCol span={{ base: 12, md: 5.7 }} className="z-10">
        <Image src="/images/ad.png" />
      </GridCol>
    </Grid>
  );
};

export default Ad;

const Circle = ({ classname }: { classname?: string }) => {
  return (
    <svg
      className={classname}
      width="501"
      height="161"
      viewBox="0 0 501 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M465.752 123.585C535.662 242.649 495.815 395.842 376.751 465.752C257.687 535.662 104.493 495.815 34.5831 376.751C-35.3268 257.687 4.52051 104.493 123.585 34.5831C242.649 -35.3268 395.842 4.52049 465.752 123.585ZM81.4133 349.254C136.137 442.454 256.053 473.646 349.254 418.922C442.454 364.198 473.646 244.282 418.922 151.081C364.198 57.881 244.282 26.6895 151.082 81.4133C57.881 136.137 26.6895 256.053 81.4133 349.254Z"
        fill="#182842"
      />
    </svg>
  );
};

const Circle2 = ({ classname }: { classname?: string }) => {
  return (
    <svg
      className={classname}
      width="355"
      height="270"
      viewBox="0 0 355 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M319.752 -107.415C389.662 11.6486 349.815 164.842 230.751 234.752C111.687 304.662 -41.5069 264.815 -111.417 145.751C-181.327 26.6868 -141.479 -126.507 -22.4154 -196.417C96.6487 -266.327 249.842 -226.48 319.752 -107.415ZM-64.5867 118.254C-9.86285 211.454 110.053 242.646 203.254 187.922C296.454 133.198 327.646 13.282 272.922 -79.9185C218.198 -173.119 98.282 -204.31 5.08152 -149.587C-88.119 -94.8629 -119.31 25.0534 -64.5867 118.254Z"
        fill="#182842"
      />
    </svg>
  );
};
