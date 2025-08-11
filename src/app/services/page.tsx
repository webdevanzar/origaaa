import Navbar from "@/components/Navbar";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import Image from "next/image";
import React from "react";

const services = [
  "UX/UI design",
  "Development",
  "Mobile app",
  "Branding",
  "Video editing",
  "Product design",
  "Motion design",
];

const OurServices = [
  {
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
    image: "/herolight/image3.jpg",
    projectLink: "#",
  },
  {
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
    image: "/herolight/image3.jpg",
    projectLink: "#",
  },
  {
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
            <span className="text-green-500">Our</span> Services
          </h2>

          {/* Tags */}
          <div className="flex  md:w-11/12 lg:w-2/3 mx-auto flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-2 md:px-6 py-1 sm:py-2 bg-black/10 border border-gray-700 rounded-full text-base lg:text-lg font-medium hover:bg-green-700 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AnimatedBlobBackground uniqueId="haii">
        <div className="bg-black/80 text-white">
          {OurServices.map((service, index) => (
            <div
              key={index}
              className={`py-10 md:py-20 px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center mx-auto ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side */}
              <div className="w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-green-300 mb-4">
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

                <a
                  href={service.projectLink}
                  target="_blank"
                  className="inline-block border border-white rounded-full px-6 py-2 text-sm md:text-base hover:bg-green-400 hover:text-black transition-colors duration-300"
                >
                  See projects ↗
                </a>
              </div>

              {/* Right Side */}
              <div className="w-full">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.projectTitle}
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 text-white rounded-full px-6 py-3 font-medium cursor-pointer hover:bg-green-400 hover:text-black transition">
                      View Project
                    </div>
                  </div>
                </div>

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
