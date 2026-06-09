import Image from "next/image";
import HeroSlider from "./components/HeroSlider"
import AboutSection from "./components/AboutSection"
import WhyChooseUs from "./components/WhyChooseUs"
import ServiceSection from "./components/ServicesSection"
import TestimonialSection from "./components/TestimonialSection";
import HowItWorks from "./components/HowItWorks";
import FAQSection from "./components/Faq";
import Cta from "./components/Cta";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceSection />
            <FAQSection />

      <TestimonialSection />
      <Cta />
    </>
  );
}
