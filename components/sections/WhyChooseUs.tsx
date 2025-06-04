import React from "react";
import Carousel from "../general/CarouselSection";

const reasons = [
  {
    id: "1",
    title: "Expertise and Precision",
    description:
      "With years of experience in the industry, our skilled technicians bring expertise and precision to every water installation project. Whether it's installing a new water supply system, upgrading existing infrastructure, or fitting plumbing fixtures, we ensure that every installation is done right the first time.",
    bgcolor: "#D2ECFF",
  },
  {
    id: "2",
    title: "Customized Solutions",
    description:
      "We recognize that every property has unique water requirements. We tailor our solutions to meet your specific needs. Whether you're building a new home, renovating a commercial space, or expanding an industrial facility, we have the expertise to design and install a water system that fits your requirements perfectly",
    bgcolor: "#FFEFC0",
  },
  {
    id: "3",
    title: "Quality Materials and Workmanship",
    description:
      "We believe in using only the highest quality materials and delivering workmanship of the highest standards. From pipes and fittings to pumps and valves, we source premium products from trusted manufacturers to ensure the reliability and durability of your water installations",
    bgcolor: "#CCDBFF",
  },
  {
    id: "4",
    title: "Efficiency and Reliability",
    description:
      "Our water installations are designed for efficiency and reliability, ensuring consistent water flow, minimal waste, and optimal performance. Whether you're filling a glass of water or running a commercial operation, you can trust that your water installations will meet your needs reliably and efficiently",
    bgcolor: "#C7FFD6",
  },
  {
    id: "5",
    title: "Comprehensive Services",
    description:
      "From initial design and planning to installation, testing, and maintenance, Glass House Waters offers comprehensive services to meet all your water installation needs. Our team is with you every step of the way, providing expert guidance and support to ensure the success of your project",
    bgcolor: "#EBD9FF",
  },
  {
    id: "6",
    title: "Customer Satisfaction Guaranteed",
    description:
      "At Glass House Waters, customer satisfaction is our top priority. We go above and beyond to ensure that our clients are happy with the results of our work. From timely communication to attention to detail, we strive to exceed your expectations in every aspect of our service",
    bgcolor: "#FFD2D2",
  },
];

const WhyChooseUs = () => {
  return (
    // <div className="bg-white">
    <Carousel
      title="Why Choose Us"
      subtitle="Glass House Waters believes in providing customized water management solutions tailored to each client's unique needs. Our team of experts is committed to delivering high-quality water services that are reliable, sustainable and cost-effective. We take pride in our work and are dedicated to exceeding our clients' expectations."
      items={reasons}
      autoplayDelay={4000}
      showArrows={true}
      showDots={false}
      height={260}
      titleHeight={58}
    />
    // </div>
  );
};

export default WhyChooseUs;
