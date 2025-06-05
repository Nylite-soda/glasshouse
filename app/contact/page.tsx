import GeneralHero from "@/components/general/GeneralHero";
import ContactForm from "@/components/sections/ContactForm";
import React from "react";

const page = () => {
  return (
    <div>
      <GeneralHero title="Contact Us" subtitle="Contact us today" />
      <ContactForm />
    </div>
  );
};

export default page;
