import React from "react";
import TestimonialSection from "../general/TestimonialSection";

const testimonialsData = [
  {
    id: "1",
    name: "Mr. Samson",
    role: "Businessman",
    message:
      "Thank you immensely for the outstanding service provided by Glass House Waters. I am genuinely grateful for entrusting them with our project, as their expertise and dedication have yielded to remarkable results",
    avatar: "/path/to/avatar.jpg",
  },
  {
    id: "2",
    name: "Durojaiye Sunday",
    role: "Accountant",
    message:
      "Absolutely delighted with Glass House Waters' recent borehole drilling and installations. The system is running flawlessly, and I have to complaints whatsoever.",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    id: "3",
    name: "Mr. Samson",
    role: "Businessman",
    message:
      "Thank you immensely for the outstanding service provided by Glass House Waters. I am genuinely grateful for entrusting them with our project, as their expertise and dedication have yielded to remarkable results",
    avatar: "/path/to/avatar.jpg",
  },
  {
    id: "4",
    name: "Durojaiye Sunday",
    role: "Accountant",
    message:
      "Absolutely delighted with Glass House Waters' recent borehole drilling and installations. The system is running flawlessly, and I have to complaints whatsoever.",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    id: "5",
    name: "Mr. Samson",
    role: "Businessman",
    message:
      "Thank you immensely for the outstanding service provided by Glass House Waters. I am genuinely grateful for entrusting them with our project, as their expertise and dedication have yielded to remarkable results",
    avatar: "/path/to/avatar.jpg",
  },
  {
    id: "6",
    name: "Durojaiye Sunday",
    role: "Accountant",
    message:
      "Absolutely delighted with Glass House Waters' recent borehole drilling and installations. The system is running flawlessly, and I have to complaints whatsoever.",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    id: "7",
    name: "Mr. Samson",
    role: "Businessman",
    message:
      "Thank you immensely for the outstanding service provided by Glass House Waters. I am genuinely grateful for entrusting them with our project, as their expertise and dedication have yielded to remarkable results",
    avatar: "/path/to/avatar.jpg",
  },
  {
    id: "8",
    name: "Durojaiye Sunday",
    role: "Accountant",
    message:
      "Absolutely delighted with Glass House Waters' recent borehole drilling and installations. The system is running flawlessly, and I have to complaints whatsoever.",
    avatar: "/path/to/avatar2.jpg",
  },
  // ... more testimonials
];

interface TestimonialProps {
  type: "grid" | "carousel";
  title?: string;
  subtitle?: string;
  max?: number;
  showArrows?: boolean;
  showDots?: boolean;
}

const Testimonials: React.FC<TestimonialProps> = ({
  type = "grid",
  title,
  subtitle,
  max,
  showArrows,
  showDots,
}) => {
  return (
    <div className="bg-white">
      {type == "grid" ? (
        <TestimonialSection
          title={title}
          subtitle={subtitle}
          testimonials={testimonialsData.slice(0, max || 5)}
          layout={type}
          columns={{ desktop: 2, tablet: 1, mobile: 1 }}
          showArrows={showArrows}
          showDots={showDots}
        />
      ) : (
        <TestimonialSection
          title={title}
          subtitle={subtitle}
          testimonials={testimonialsData.slice(0, 5)}
          layout={type}
          maxItemsPerView={max || 2}
          autoplayDelay={5000}
          showArrows={showArrows}
          showDots={showDots}
        />
      )}
    </div>
  );
};

export default Testimonials;
