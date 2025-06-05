import React from "react";
import Carousel from "../general/CarouselSection";

export const coreValuesData = [
  {
    id: "1",
    number: "1",
    title: "Integrity",
    description:
      "Commitment to honesty, transparency, and ethical practices in all interactions with clients, partners, and stakeholders. It is the foundation upon which we build lasting relationships.",
    color: "#1e40af",
  },
  {
    id: "2",
    number: "2",
    title: "Expertise",
    description:
      "With over 30 years of experience in the field of Water Works, we have the expertise to deliver sustainable solutions that meet the specific needs of our clients.",
    color: "#ca8a04",
  },
  {
    id: "3",
    number: "3",
    title: "Excellence",
    description:
      "Striving for innovation in every aspect of service delivery, from the quality of workmanship to the effectiveness of solutions provided.",
    color: "#1e40af",
  },
  {
    id: "4",
    number: "4",
    title: "Customer Focus",
    description:
      "Placing customers at the satisfaction of clients at the forefront of every decision, ensuring a positive and fulfilling experience for all stakeholders.",
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

const CoreValues = () => {
  return (
    <div className="bg-white">
      <Carousel
        title="Our Core Values"
        subtitle="We achieve our mission through a client-centric approach that prioritizes understanding their unique needs and delivering tailored solutions"
        items={coreValuesData}
        autoplayDelay={4000}
        showArrows={true}
        showDots={true}
      />
    </div>
  );
};

export default CoreValues;
