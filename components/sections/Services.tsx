import React from "react";
import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Button,
  Stack,
  Image,
  CardSection,
} from "@mantine/core";
import { IconDroplet, IconTool, IconBath } from "@tabler/icons-react";
import styles from "@/styles/Services.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  icon,
  delay,
}) => {
  return (
    <Card
      className={styles.serviceCard}
      style={{ animationDelay: `${delay}ms` }}
      shadow="sm"
      padding="lg"
      radius="lg"
      withBorder
    >
      <CardSection className={styles.imageSection}>
        <Image
          src={imageUrl}
          height={200}
          width="100%"
          alt={title}
          className={styles.cardImage}
        />
        <div className={styles.iconOverlay}>{icon}</div>
      </CardSection>

      <Stack gap="md" mt="md">
        <Title
          order={3}
          className={styles.cardTitle + " h-[62px] line-clamp-2"}
        >
          {title}
        </Title>
        <Text
          size="sm"
          className={styles.cardDescription + " line-clamp-3 h-[68px]"}
        >
          {description}
        </Text>
        <Button variant="subtle" className={styles.learnMoreBtn}>
          Learn More
        </Button>
      </Stack>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Water Treatment and Management",
      description:
        "Our team of experts has extensive experience in water treatment, purification, and distribution. We use state-of-the-art technology and innovative techniques to ensure that your water is clean, safe, and meets all quality standards.",
      imageUrl: "/images/services1.jpg",
      icon: <IconDroplet size={32} />,
    },
    {
      title: "Water Supply and Plumbing Works",
      description:
        "Our team of experienced plumbers and engineers ensures your water supply is uninterrupted and efficient. We handle everything from minor repairs to major installation projects with precision and care.",
      imageUrl: "/images/services2.jpg",
      icon: <IconTool size={32} />,
    },
    {
      title: "Borehole Drilling and Installations",
      description:
        "Our modern drilling equipment and techniques provide a reliable source of water, especially in areas where water supply is limited. We ensure professional installation and maintenance services.",
      imageUrl: "/images/services3.jpg",
      icon: <IconBath size={32} />,
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <Container size="xl" py={80} className="lg:!px-8">
        <div className={styles.header}>
          <Title order={1} className={styles.mainTitle}>
            Our Services
          </Title>
          <Text size="lg" className={styles.subtitle}>
            Your ultimate destination for everything water-related, providing
            comprehensive solutions to meet all your water needs, from clean
            drinking water and purification systems to irrigation equipment,
            plumbing supplies, and more.
          </Text>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              icon={service.icon}
              delay={index * 200}
            />
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <Button size="lg" className={styles.viewAllBtn} radius="md">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
