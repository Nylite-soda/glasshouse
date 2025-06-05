import GeneralHero from "@/components/general/GeneralHero";
import {
  Box,
  Card,
  CardSection,
  Container,
  Grid,
  GridCol,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import classes from "@/styles/Carousel.module.css";
import About from "@/components/sections/About";

const coreValuesData = [
  {
    id: "1",
    number: "1",
    title: "Integrity",
    description:
      "We stand by unwavering honesty and transparency. Every interaction—with clients, partners, and stakeholders—is guided by ethical practices that form the rock-solid foundation of our lasting relationships. We believe trust is built drop by drop",
    color: "#16649C",
  },
  {
    id: "2",
    number: "2",
    title: "Expertise",
    description:
      "With decades of combined experience in water works, we harness deep industry knowledge to deliver precision-engineered solutions. Our expertise means that every project is executed with skill, ensuring that your unique water challenges are met with unmatched professionalism",
    color: "#ca8a04",
  },
  {
    id: "3",
    number: "3",
    title: "Excellence",
    description:
      "Excellence isn’t just a goal—it’s our standard. From the meticulous craftsmanship of our installations to the innovative technology behind our solutions, we strive to surpass expectations in every facet of service delivery. Every drop of water we touch reflects our relentless pursuit of perfection",
    color: "#1e40af",
  },
  {
    id: "4",
    number: "4",
    title: "Customer Focus",
    description:
      "Our clients are at the very core of everything we do. By actively listening and tailoring our solutions to meet your individual needs, we create experiences that are not only satisfying but truly transformative. Your success is our success, and we’re here to ensure you receive nothing short of exceptional service",
    color: "#16a34a",
  },
  {
    id: "5",
    number: "5",
    title: "Sustainability",
    description:
      "A commitment to environmental protection and sustainable water resource management. Delivering sustainable solutions that safeguard the environment.",
    color: "#7922d8",
  },
  {
    id: "6",
    number: "6",
    title: "Empowerment",
    description:
      "Empowering clients and communities through knowledge-sharing, education, and collaboration to make informed decisions about water management and conservation.",
    color: "#F64B4B",
  },
];

const page = () => {
  return (
    <>
      <GeneralHero
        title="About Us"
        subtitle="At Glass House Waters, we’re your trusted partner in building a water-secure future"
      />

      <Container size="lg" className="my-10">
        <SimpleGrid>
          <Title
            order={2}
            fw={600}
            className="text-[var(--mantine-color-myColor-9)]"
          >
            We’re more than just a water service provider
          </Title>
          <Grid gutter={40}>
            <GridCol span={{ base: 12, md: 6 }}>
              <Text>
                Our team of seasoned professionals is dedicated to delivering
                innovative, high-quality water solutions that guarantee
                reliability, sustainability, and peace of mind. <br />
                <br />
                With years of hands-on experience in water works, we excel at
                tailoring solutions to meet your unique needs. From
                state-of-the-art water treatment and borehole drilling to expert
                plumbing services, we transform water challenges into
                opportunities for growth and efficiency.
              </Text>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <Text>
                At the heart of our mission is a passion for excellence and a
                commitment to ensuring every drop counts—boosting property
                values, protecting investments, and supporting communities with
                clean, safe water. Discover the difference with Glass House
                Waters, where expertise meets innovation for a brighter,
                water-secure tomorrow.
              </Text>
            </GridCol>
          </Grid>
        </SimpleGrid>
      </Container>

      <Container fluid p="xl" className="stack blue-grad">
        <Title
          className="text-white text-center my-5"
          order={2}
          p="xl"
          fw={600}
        >
          Our Core Values
        </Title>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            {coreValuesData.slice(0, 4).map((item, index) => (
              <Box
                key={item.id}
                p="xl"
                className="border-[0.2] border-white rounded-2xl bg-white/8 backdrop-blur-2xl"
              >
                {/* <Card
                    > */}
                <Grid
                  h="fit-content"
                  gutter={30}
                  justify="flex-start"
                  align="center"
                >
                  <GridCol
                    span={{ base: 12, md: 2 }}
                    className="stack justify-center items-center flex"
                  >
                    <Box
                      className={classes.itemNumber + " !m-0"}
                      style={{ backgroundColor: item.color }}
                    >
                      <Text fw={500} c="white" size="lg">
                        {item.number}
                      </Text>
                    </Box>
                  </GridCol>
                  <GridCol
                    span={{ base: 12, md: 10 }}
                    className="noTop text-center md:text-left"
                  >
                    <Box className="text-white">
                      <Box>
                        <Text fw={600} size="1.2rem" lh="h3">
                          {item.title}
                        </Text>
                      </Box>
                      <Box>{item.description}</Box>
                    </Box>
                  </GridCol>
                </Grid>
                {/* </Card> */}
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Container>

      <Container size="lg">
        <About
          title="Our mission"
          description={`Our mission is to revolutionize water management by delivering state-of-the-art, reliable, and sustainable water solutions tailored to your unique needs. We empower communities, businesses, and homeowners with pristine water—enhancing property value, boosting operational efficiency, and safeguarding our precious resources for future generations.\n\nDriven by innovation and an unwavering commitment to quality, we transform water challenges into opportunities for growth and prosperity`}
          imageUrl="/images/mission.png"
          rev={true}
          buttonText="Contact Us"
          size="sm"
        />
      </Container>
    </>
  );
};

export default page;
