import Navbar from "@/components/Navbar";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import { TiltCard } from "@/components/shared/TiltCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    id: "app",
    title: "Mobile app",
  },
  {
    id: "web",
    title: "Websites",
  },
  {
    id: "ecommerce",
    title: "E-commerse",
  },
  {
    id: "amc",
    title: "AMC",
  },
  {
    id: "erp",
    title: "ERP development",
  },
  {
    id: "marketing",
    title: "Digital marketing",
  },
];

const OurServices = [
  {
    id: "app",
    title: "App Development",
    description:
      "We build high-performance, user-friendly mobile apps that deliver seamless experiences across iOS and Android.",
    features: [
      "Custom mobile app solutions",
      "Cross-platform compatibility",
      "User-friendly interfaces",
      "API integration",
      "Scalable architecture",
    ],
    tags: ["App Development", "Mobile Solutions"],
    projectTitle: "Mobile Excellence",
    projectDescription:
      "Crafting innovative apps that engage users and drive business growth.",
    image: "/herolight/image1.jpg",
    projectLink: "#",
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "We create robust, responsive websites that perform flawlessly on all devices.",
    features: [
      "Responsive design",
      "High performance",
      "SEO optimized",
      "Secure architecture",
      "Custom functionality",
    ],
    tags: ["Web Development", "Frontend & Backend"],
    projectTitle: "Web Brilliance",
    projectDescription:
      "Delivering beautiful, functional websites tailored to your brand.",
    image: "/herolight/image2.jpg",
    projectLink: "#",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Development",
    description:
      "We design and develop secure, scalable eCommerce platforms that drive sales.",
    features: [
      "Custom eCommerce solutions",
      "Payment gateway integration",
      "Inventory management",
      "Mobile-optimized stores",
      "Analytics and reporting",
    ],
    tags: ["Ecommerce", "Online Store"],
    projectTitle: "ShopEase",
    projectDescription:
      "Helping brands sell more with optimized, user-friendly eCommerce sites.",
    image: "/herolight/image3.jpg",
    projectLink: "#",
  },
  {
    id: "amc",
    title: "AMC",
    description:
      "We provide Annual Maintenance Contracts to keep your systems running smoothly.",
    features: [
      "Regular updates",
      "Security monitoring",
      "Performance optimization",
      "24/7 support",
      "Backup management",
    ],
    tags: ["AMC", "IT Support"],
    projectTitle: "Always On",
    projectDescription:
      "Ensuring your business never faces downtime with proactive maintenance.",
    image: "/herolight/image1.jpg",
    projectLink: "#",
  },
  {
    id: "erp",
    title: "ERP Development",
    description:
      "We build powerful ERP systems to streamline business processes and improve efficiency.",
    features: [
      "Custom ERP modules",
      "Workflow automation",
      "Multi-user access",
      "Data security",
      "Integration with existing tools",
    ],
    tags: ["ERP", "Business Automation"],
    projectTitle: "ERP Power",
    projectDescription:
      "Boosting productivity with tailored ERP solutions for your business.",
    image: "/herolight/image2.jpg",
    projectLink: "#",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "We create data-driven marketing strategies that amplify your online presence.",
    features: [
      "SEO optimization",
      "Social media marketing",
      "PPC campaigns",
      "Content strategy",
      "Analytics tracking",
    ],
    tags: ["Digital Marketing", "Growth Strategies"],
    projectTitle: "Brand Boost",
    projectDescription:
      "Helping brands connect with audiences and grow their digital footprint.",
    image: "/herolight/image3.jpg",
    projectLink: "#",
  },
];

const ServicesPage = () => {
  return (
    <section>
      <div className="w-full h-[30vh] md:h-[45vh] relative">
        <Image
          src={"/hero4.jpg"}
          alt="image"
          fill
          className="-z-10 object-cover bg-center rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-b-xl z-0" />
        <Navbar />
      </div>

      {/* our services */}
      <div className="relative bg-white text-black z-10 mx-auto text-center px-4 py-20">
        <div className="">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            <span className="text-green-800">Our</span> Services
          </h2>

          {/* Tags */}
          <div className="flex  md:w-11/12 lg:w-2/3 xl:w-1/2 mx-auto flex-wrap justify-center gap-2 md:gap-4">
            {services.map((service) => (
              <Link
                href={`#${service.id}`} 
                key={service.id}
                className="px-2 hover:scale-110 transition-all text-white md:px-6 py-1 sm:py-2 bg-gradient-to-br from-green-800 to-yellow-600 hover:from-green-500 hover:to-green-500  border-2 border-black rounded-full text-base lg:text-lg font-medium hover:text-blac duration-300 cursor-pointer"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AnimatedBlobBackground uniqueId="services-section">
        <div className="bg-black/80 text-white">
          {OurServices.map((service, index) => (
            <div
            id={service.id}
              key={index}
              className={`py-10 md:py-20 px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center mx-auto border-b-[0.5px] border-white/20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side */}
              <div className="w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-green-200 mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed break-words">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 text-sm md:text-base">
                  {service.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.projectLink}
                  target="_blank"
                  className="inline-block border-[1px] border-white/50 rounded-full px-6 py-2 text-sm md:text-base hover:border-green-400 transition-all duration-300"
                >
                  See projects <span className="hover:animate-bounce">↗</span>
                </Link>
              </div>

              {/* Right Side */}
              <div className="w-full">
                <TiltCard>
                  <div className="relative h-[280px] sm:h-[400px] xl:h-[450px]  rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.projectTitle}
                      width={800}
                      height={500}
                      className="object-cover w-full h-full bg-center"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 text-white rounded-full px-6 py-3 font-medium cursor-pointer hover:bg-green-400 hover:text-black transition">
                        View Project
                      </div>
                    </div>
                  </div>
                </TiltCard>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold">
                    {service.projectTitle}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base">
                    {service.projectDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedBlobBackground>
    </section>
  );
};

export default ServicesPage;
