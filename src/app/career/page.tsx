import { CareerBanner } from "@/components/career/careerBanner";
import { OpenPositions } from "@/components/career/openPositions";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";

const CareerPage = () => {
  return (
    <div>
      <CareerBanner />
      <AnimatedBlobBackground
        uniqueId="career"
        blobCount={20}
        animationDuration={1000} // Slower animation (3 seconds)
        blurAmount={40} // More blur for smoother effect
        minOpacity={0.5}
        maxOpacity={0.9}
      >
        <OpenPositions />
      </AnimatedBlobBackground>
    </div>
  );
};

export default CareerPage;
