import About from "@/components/About";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import ClientLogo from "@/components/ClientLogo";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import { OurProcess } from "@/components/OurProcess";
import { Projects } from "@/components/Projects";
import Services from "@/components/Services";
import Stat from "@/components/Stat";
import Aurora from "@/components/ui/Aurora";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />

      <Services />
      <Banner />
      <Industries />
      <OurProcess />
      {/* <Features /> our process */}
      {/* <Stat /> */}
      <ClientLogo />
      <Blogs />
      {/* <Testimonial /> */}
      <Contact />
      <Whatsapp />
    </div>
  );
}
