import Carousel from "@/components/general/CarouselSection2";
import GeneralHero from "@/components/general/GeneralHero";
import {
  Card,
  CardSection,
  Container,
  Grid,
  GridCol,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import {
  IconTrendingUp,
  IconShieldCheck,
  IconDroplet,
  IconSettings,
} from "@tabler/icons-react";
import Ad from "@/components/general/ad";

interface WaterTreatmentService {
  id: string;
  title: string;
  description: string;
  image: string;
}

const carouselData = [
  {
    id: "1",
    title: "Increase Property Value",
    description:
      "Installing clean, high-quality water. Our solutions ensure your properties meet the highest water safety standards, boosting their market appeal.",
    color: "#1e40af",
    icon: <IconTrendingUp size={24} />,
  },
  {
    id: "2",
    title: "Prevent Infrastructure Damage",
    description:
      "Hard water and contaminants cause scaling, corrosion, and pipe blockages. Protect your investment and reduce costly, long-term maintenance.",
    color: "#0891b2",
    icon: <IconShieldCheck size={24} />,
  },
  {
    id: "3",
    title: "100% Safe Drinking Water",
    description:
      "With our cutting-edge filtration, reverse osmosis, UV sterilization, carbon filtration, and ion-exchange harmful substances are eliminated, ensuring pure, safe water.",
    color: "#0891b2",
    icon: <IconDroplet size={24} />,
  },
  {
    id: "4",
    title: "Custom Solutions for Every Property",
    description:
      "From cozy residential homes to upscale hotels, expansive resorts, high-rise buildings, and commercial developments, our water treatment systems are tailored to your needs.",
    color: "#0891b2",
    icon: <IconSettings size={24} />,
  },
  {
    id: "5",
    title: "Custom Solutions for Every Property",
    description:
      "From cozy residential homes to upscale hotels, expansive resorts, high-rise buildings, and commercial developments, our water treatment systems are tailored to your needs.",
    color: "#0891b2",
    icon: <IconSettings size={24} />,
  },
  {
    id: "6",
    title: "Custom Solutions for Every Property",
    description:
      "From cozy residential homes to upscale hotels, expansive resorts, high-rise buildings, and commercial developments, our water treatment systems are tailored to your needs.",
    color: "#0891b2",
    icon: <IconSettings size={24} />,
  },
  {
    id: "7",
    title: "Custom Solutions for Every Property",
    description:
      "From cozy residential homes to upscale hotels, expansive resorts, high-rise buildings, and commercial developments, our water treatment systems are tailored to your needs.",
    color: "#0891b2",
    icon: <IconSettings size={24} />,
  },
];

const defaultServices: WaterTreatmentService[] = [
  {
    id: "1",
    title: "Advanced Filtration & Purification",
    description:
      "Reverse osmosis, UV sterilization, carbon filtration, and ion exchange for pristine water quality.",
    image: "/images/service1.png",
  },
  {
    id: "2",
    title: "Borehole & Well Water Treatment",
    description:
      "Eliminate iron, sediment, bacteria, and unpleasant odors, ensuring your borehole water is fresh and clean.",
    image: "/images/service2.png",
  },
  {
    id: "3",
    title: "Whole-House & Estate-Wide Purification",
    description:
      "Comprehensive systems that deliver safe water across entire properties, developments, or commercial spaces.",
    image: "/images/service3.png",
  },
  {
    id: "4",
    title: "Water Softening Systems",
    description:
      "Prevent damage from hard water minerals that corrode plumbing and appliances, safeguarding your infrastructure.",
    image: "/images/service4.png",
  },
  {
    id: "5",
    title: "Routine Maintenance",
    description: "24/7 service to keep your water systems running flawlessly.",
    image: "/images/service5.png",
  },
  {
    id: "6",
    title: "Quality Testing",
    description:
      "Ensuring Every Drop Meets the Highest Standard, with regular inspections and tests for ongoing assurance.",
    image: "/images/service6.png",
  },
];

const getGridCols = (count: number) => {
  if (count === 1) return { base: 1, sm: 1, md: 1, lg: 1 };
  if (count === 2) return { base: 1, sm: 1, md: 2, lg: 2 };
  if (count === 3) return { base: 1, sm: 2, md: 3, lg: 3 };
  if (count === 4) return { base: 1, sm: 2, md: 2, lg: 4 };
  if (count === 5) return { base: 1, sm: 2, md: 3, lg: 3 };
  // For 6 or more items, use 3 columns
  return { base: 1, sm: 2, md: 3, lg: 3 };
};

// Remove the props parameter and use default services directly
export default function ServicesPage() {
  const services = defaultServices;

  return (
    <div>
      <GeneralHero
        title="Our Services"
        subtitle="We provide breakthrough solutions from advanced purification to precision irrigation and premium plumbing supplies ensuring every drop is pure, reliable, and sustainable."
      />

      <Container size="lg" pt="xl">
        <Grid>
          <GridCol span={{ base: 12, md: 9 }}>
            <Container>
              <Title
                order={1}
                fw={700}
                className="text-[var(--mantine-color-myColor-9)]"
              >
                Why Trusted Property Owners Choose Us?
              </Title>
              <Text py="lg">
                Did you know that 70% of water sources contain harmful
                contaminants like bacteria, lead, and heavy metals? Poor water
                quality can ruin property value, damage plumbing, and even put
                lives at risk
              </Text>
            </Container>
          </GridCol>
          <GridCol span={{ base: 12, md: 3 }}></GridCol>
        </Grid>
      </Container>

      <Carousel
        items={carouselData}
        autoplayDelay={5000}
        showArrows={true}
        showDots={true}
        itemsPerView={{
          mobile: 1,
          tablet: 2,
          desktop: 4,
        }}
      />

      <Container size="lg" py="xl">
        <Title order={1} size="h1" fw={700} c="myColor.9" mb="xl" ta="left">
          Our Water Treatment Services
        </Title>

        <SimpleGrid
          cols={getGridCols(services.length)}
          spacing="xl"
          verticalSpacing="xl"
        >
          {services.map((service) => (
            <Card
              key={service.id}
              shadow="sm"
              padding="lg"
              radius="lg"
              withBorder
              h="100%"
            >
              <CardSection>
                <Image
                  src={service.image}
                  height={200}
                  alt={service.title}
                  fit="cover"
                />
              </CardSection>

              <Stack gap="md" mt="md">
                <Title order={3} size="h4" fw={600} lh={1.3}>
                  {service.title}
                </Title>

                <Text size="sm" c="dimmed" lh={1.5}>
                  {service.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      <Container px={0} my="xl" fluid>
        <Ad
          title="Book Your FREE Water Test Today "
          description="Secure Your Property's Water Future, Limited Slots Available – Don't miss out!"
          buttonText="Book Now"
        />
      </Container>
    </div>
  );
}
