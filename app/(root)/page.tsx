import About from "@/components/sections/About";
import AppointmentForm from "@/components/sections/AppointmentForm";
import CoreValues from "@/components/sections/CoreValues";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";
import BlogSection from "./demo/page";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About mh="500px" buttonText="View More" destination="/about" />
      <CoreValues />
      <Services />
      <AppointmentForm />
      <WhyChooseUs />
      <BlogSection />
      <Testimonials type="grid" />
      <ContactForm />
    </>
  );
}
