import Navbar from "@/components/Navbar";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import { FeaturedWorks } from "@/components/works/featuredworks";
import Image from "next/image";
import Link from "next/link";

const WorksPage = async () => {
  
  return (
    <section className="overflow-x-hidden">
      <div className="w-full h-[30vh] md:h-[45vh] relative">
        <Image
          src={"/hero.jpg"}
          alt="image"
          fill
          className="object-cover bg-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-b-xl z-0" />
        <Navbar />
      </div>
      
      {/* Portfolio Section */}
      <div className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">
          <span className="text-green-800">Our </span> Portfolio
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
          <span className="font-semibold text-[#816C37]">Discover </span> our
          exceptional work across web development, app development, digital
          marketing, and branding solutions
        </p>

        {/* Explore Our Work Button */}
        <Link href="/works">
          <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit mx-auto">
            <div className="bg-white backdrop-blur-sm p-1 rounded-[40px]">
              <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-6 py-2 text-lg font-semibold text-white">
                Explore Our Work
              </button>
            </div>
          </div>
        </Link>
      </div>

      {/* Featured Work Section */}
      <AnimatedBlobBackground uniqueId="featured work">
        <FeaturedWorks />
      </AnimatedBlobBackground>


    </section>
  );
};

export default WorksPage;
