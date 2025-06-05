import GeneralHero from "@/components/general/GeneralHero";
import About from "@/components/sections/About";
import { Box, Title, Text, Container } from "@mantine/core";
import React from "react";

const features = [
  {
    id: 1,
    title: "Expertise & Precision",
    description:
      "With years of hands-on experience, our elite team of water specialists delivers precision-engineered installations that work flawlessly from day one. Whether you need a residential, commercial, or industrial water system, we ensure everything is done right the first time—no leaks, no failures, no headaches.",
    buttonText: "Book Installation",
    imageUrl: "/images/feature1.png",
    imageAlt: "Book Installation",
    rev: false,
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "We don’t believe in one-size-fits-all solutions. Your property has unique water needs, and we design a system that fits perfectly—whether it’s a home, office, real estate development, or factory. We analyze, customize, and deliver the perfect water setup for your exact requirements.",
    buttonText: "Get Custom Plan",
    rev: true,
    imageUrl: "/images/feature2.png",
    imageAlt: "Get Custom Plan",
  },
  {
    id: 3,
    title: "Uncompromising Quality & Workmanship",
    description:
      "Water systems must last for decades—and we ensure they do. We source only top-tier pipes, pumps, valves, and filtration systems from the world’s most trusted manufacturers. No cheap materials. No shortcuts. Just premium, long-lasting installations that stand the test of time.",
    buttonText: "See Materials",
    rev: false,
    imageUrl: "/images/feature3.png",
    imageAlt: "See Materials",
  },
  {
    id: 4,
    title: "Ultimate Efficiency & Reliability",
    description:
      "Your water system should work seamlessly, providing steady, powerful flow without waste or inefficiencies. Our expertly designed installations guarantee minimal downtime, zero water loss, and optimized pressure control—whether you’re filling a glass of water or running an industrial process.",
    buttonText: "Optimize Flow",
    rev: true,
    imageUrl: "/images/feature4.png",
    imageAlt: "Optimize Flow",
  },
  {
    id: 5,
    title: "Complete, Hassle-Free Services",
    description: `From concept to completion, we handle everything:
✔ Planning & design
✔ Installation
✔ Testing & fine-tuning
✔ Ongoing maintenance & support
You don’t lift a finger—we handle it all with unmatched professionalism and attention to detail.
    `,
    buttonText: "Book Full Service",
    rev: false,
    imageUrl: "/images/feature5.png",
    imageAlt: "Book Full Service",
  },
  {
    id: 6,
    title: "100% Satisfaction Guaranteed",
    description:
      "We don’t just deliver results—we overdeliver. Our clients rave about our attention to detail, fast response times, and flawless execution. Your satisfaction isn’t just a priority—it’s our goal",
    buttonText: "Try Risk-Free",
    rev: true,
    imageUrl: "/images/feature6.png",
    imageAlt: "Try Risk-Free",
  },
];

const page = () => {
  return (
    <div>
      <GeneralHero
        title="Features"
        subtitle="At Glass House Waters, we are your lasting solution to your water problems! We don’t just provide water solutions, we transform your water systems into high-performance, worry-free assets."
      />

      <Container size="lg">
        <Title
          order={1}
          fw={700}
          className="text-[var(--mantine-color-myColor-9)]"
        >
          Core Features That Set Us Apart
        </Title>
        <Text py="lg">
          When it comes to water installations, you don’t just need a service,
          you need a game-changing solution that guarantees efficiency,
          durability, and long-term savings. We don’t settle for ‘good enough’we
          engineer perfection into every project.
        </Text>
      </Container>

      <Container size="lg">
        {features.map((feature) => (
          <About
            key={feature.id}
            title={feature.title}
            description={feature.description}
            buttonText={feature.buttonText}
            size="sm"
            rev={feature.rev}
            imageUrl={feature.imageUrl}
            imageAlt={feature.imageAlt}
          />
        ))}
      </Container>
    </div>
  );
};

export default page;
