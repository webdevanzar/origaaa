import { OurServices } from "@/components/services/ourServices";
import { ServicesBanner } from "@/components/services/servicesBanner";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";

const ServicesPage = () => {
  return (
    <div>
      <ServicesBanner />
      <AnimatedBlobBackground uniqueId="services-section">
        <OurServices />
      </AnimatedBlobBackground>
    </div>
  );
};

export default ServicesPage;
