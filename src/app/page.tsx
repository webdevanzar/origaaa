import About from "@/components/About";
import Blogs from "@/components/Blogs";
import ClientLogo from "@/components/ClientLogo";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { HeroLight } from "@/components/HeroLight";
import { OurProcess } from "@/components/OurProcess";
import { Projects } from "@/components/Projects";
import WhatweDo from "@/components/WhatweDo";
import Testimonial from "@/components/Testimonial";
import Whatsapp from "@/components/Whatsapp";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import Overview from "@/components/Overview";
import ContactPopup from "@/components/ContactPopup";

const blobPositions = [
  { x: 10, y: 10 }, // Top-left
  { x: 90, y: 10 }, // Top-right
  { x: 10, y: 90 }, // Bottom-left
  { x: 90, y: 90 }, // Bottom-right
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <ContactPopup />
      <Hero />
      <HeroLight />
      <About />

      <AnimatedBlobBackground
        uniqueId="my-blobs"
        blobCount={25}
        blobPositions={blobPositions}
        animationDuration={2000} // Slower animation (3 seconds)
        blurAmount={30} // More blur for smoother effect
        minScale={2} // Minimum size
        maxScale={4} // Maximum size
        minOpacity={0.5}
        maxOpacity={0.9}
      >
        <WhatweDo />
        <Projects />
        <Overview />
        <OurProcess />
        <ClientLogo />
        <Testimonial />
      </AnimatedBlobBackground>
      <Blogs />

      <Contact />
      <Whatsapp />
    </div>
  );
}
