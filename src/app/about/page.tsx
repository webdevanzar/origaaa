import { AboutBanner } from "@/components/about/aboutBanner";
import { AboutLastBlock } from "@/components/about/sectionBelow";
import { About } from "@/components/home/aboutUs";
import { GrowTogether } from "@/components/home/growTogether";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutBanner />
      <About />
      <GrowTogether />
      <AboutLastBlock />
    </div>
  );
};

export default AboutPage;
