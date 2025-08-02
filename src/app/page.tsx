import About from "@/components/About";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import ClientLogo from "@/components/ClientLogo";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { HeroLight } from "@/components/HeroLight";
import Industries from "@/components/Industries";
import { OurProcess } from "@/components/OurProcess";
import { Projects } from "@/components/Projects";
import WhatweDo from "@/components/WhatweDo";
import Stat from "@/components/Stat";
import Testimonial from "@/components/Testimonial";
import Whatsapp from "@/components/Whatsapp";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";

const blobPositions = [
  { x: 10, y: 10 }, // Top-left
  { x: 90, y: 10 }, // Top-right
  { x: 10, y: 90 }, // Bottom-left
  { x: 90, y: 90 }, // Bottom-right
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <HeroLight />
      {/* <div className="radial-bg"> */}
      <About />
      <WhatweDo />
      {/* </div> */}
      {/* <Banner /> */}
      <Projects />
      <Industries />
      <OurProcess />
      {/* <Features /> our process */}
      {/* <Stat /> */}
      {/* Additional children can go here */}

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
        <ClientLogo />
        <Testimonial />
      </AnimatedBlobBackground>
      <Blogs />
         
      <Contact />
      <Whatsapp />
    </div>
  );
}
