import Navbar from "@/components/Navbar";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import { TiltCard } from "@/components/shared/TiltCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";

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

export const OurServices = [
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
    projectDescription2:
      "In today’s digital-first world, mobile applications have become the primary way people interact with brands, businesses, and services. At Origa, our app development process goes far beyond coding — it’s about understanding your vision, your audience, and the problem your app needs to solve. We start with in-depth consultation sessions to define features, user flow, and interface style before moving into prototyping and design. Every element, from color schemes to navigation patterns, is thoughtfully planned to create an engaging experience that resonates with your target audience. Our development team is skilled in both native and cross-platform technologies, including Swift, Kotlin, React Native, and Flutter, ensuring we can match the right tech stack to your needs. We place a strong emphasis on performance optimization, ensuring your app loads quickly, functions smoothly, and remains stable under heavy usage. Security is built into every step of development, with strong encryption, secure APIs, and best practices to protect user data. Once the app is built, we handle rigorous testing across multiple devices and operating systems to eliminate bugs and ensure seamless functionality. From there, we manage deployment to app stores, post-launch support, and ongoing updates to keep your app fresh and competitive. Our goal is to not just deliver an app, but to provide a long-term solution that grows alongside your business.",
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
    projectDescription2:
      "Your website is often the first impression potential customers have of your brand — and we believe it should be an unforgettable one. At Origa, we create websites that are visually stunning, technically robust, and user-focused. We combine modern design principles with clean, optimized code to ensure every site looks beautiful and works flawlessly across all devices. From landing pages to full-scale web applications, we tailor every project to align perfectly with your brand identity and goals. Our process begins with a deep dive into your business objectives, audience preferences, and industry trends. This allows us to design a site structure that guides visitors intuitively, encourages engagement, and supports conversions. We implement responsive design techniques so your site adapts seamlessly to desktops, tablets, and mobile devices, delivering a consistent experience everywhere. Behind the scenes, we build with performance and scalability in mind. Whether we’re using Next.js, React, Node.js, or other technologies, our websites are optimized for speed, SEO, and security. We also provide integrations with CRMs, analytics tools, and third-party APIs to extend your site’s functionality. Post-launch, we offer ongoing maintenance and updates, ensuring your site continues to perform at its peak.",
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
    projectDescription2:
      "Selling online is more than just setting up a store — it’s about delivering a shopping experience that keeps customers coming back. Our eCommerce development services are designed to help businesses of all sizes launch secure, high-performing, and conversion-focused online stores. We start by understanding your products, target market, and business model, then create a digital storefront that showcases your offerings with stunning visuals, intuitive navigation, and fast load times. We build on platforms like Shopify, WooCommerce, and Magento, as well as fully custom solutions using React, Node.js, and headless CMS integrations. Our stores feature secure payment gateways, easy checkout flows, inventory management systems, and tools for upselling and cross-selling. Everything is designed to enhance user trust and make the buying process effortless. To maximize your store’s success, we also implement advanced features like personalized product recommendations, automated email campaigns, and analytics dashboards to track sales performance. Security is a top priority, with measures like SSL encryption, PCI compliance, and fraud prevention systems in place. Whether you’re starting from scratch or upgrading an existing store, we deliver eCommerce platforms built for long-term growth.",
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
    projectDescription2:
      "Technology is the heartbeat of modern business — and keeping it running smoothly is essential. Our Annual Maintenance Contract (AMC) services provide you with peace of mind, knowing your systems, applications, and infrastructure are always in top condition. We offer comprehensive maintenance packages that cover software updates, security patches, performance monitoring, and technical support, all tailored to your specific needs. We take a proactive approach, identifying potential issues before they become major problems. This includes regular health checks, database optimization, and backup management to safeguard your critical data. In the event of an issue, our support team is ready to respond quickly, minimizing downtime and restoring functionality as fast as possible. Our AMC services also adapt as your business grows. Whether you need additional server capacity, integration of new tools, or security upgrades, we handle the technical side so you can focus on your operations. With Origa as your maintenance partner, you gain reliability, stability, and a trusted team dedicated to keeping your business running without interruptions.",
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
    projectDescription2:
      "Managing a growing business can quickly become complex without the right systems in place. Our ERP (Enterprise Resource Planning) development services are designed to centralize your operations, automate workflows, and give you real-time insights into performance. We create fully customized ERP solutions that align perfectly with your processes, ensuring every department — from sales to finance to inventory — operates in sync. We begin with an in-depth analysis of your business needs, mapping out current workflows and identifying bottlenecks. Based on this, we design ERP modules tailored to your operations, including HR management, CRM, inventory control, and analytics dashboards. Our solutions are built with scalability in mind, meaning you can add new features or modules as your business evolves. Security and data integrity are core to our ERP systems. We implement multi-level access controls, encrypted communications, and regular backups to ensure your business data stays safe. With an Origa ERP system, you gain complete control over your business operations, the ability to make data-driven decisions, and the confidence to scale without operational chaos.",
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
    projectDescription2:
      "In the digital landscape, visibility is everything. Our digital marketing services are built to not only get your brand noticed but to engage your audience and convert them into loyal customers. We craft tailored strategies that combine SEO, social media marketing, content creation, PPC advertising, and email campaigns to reach the right people at the right time. We start by understanding your brand voice, target audience, and market position. This allows us to create campaigns that resonate authentically while driving measurable results. Our SEO experts ensure your site ranks for relevant keywords, while our content team produces high-quality articles, graphics, and videos that attract and inform your audience. To maximize impact, we monitor every campaign’s performance in real-time, making data-driven adjustments for better ROI. Our goal is not just to generate clicks but to build long-term relationships with your customers, increasing brand loyalty and lifetime value. Whether you’re launching a new product, entering a new market, or strengthening your online presence, our team delivers strategies that work.",
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

      {/* Services Section */}
      <div className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">
          <span className="text-green-800">Our </span> Solutions
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
          <span className="font-semibold text-[#816C37]">Experience </span>a
          distinguished suite of solutions — from bespoke web and mobile apps to
          strategic marketing, branding, and enterprise systems.
        </p>

        {/* View All Services Button */}
        <Link href="/services">
          <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit mx-auto">
            <div className="bg-white backdrop-blur-sm p-1 rounded-[40px]">
              <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-6 py-2 text-lg font-semibold text-white">
                Discover Our Services
              </button>
            </div>
          </div>
        </Link>
      </div>

      <AnimatedBlobBackground uniqueId="services-section">
        <div className="bg-black/80 text-white">
          {/* our services */}
          <div className="relative z-10 mx-auto text-center px-4 py-20">
            <div className="">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                Our Services
              </h2>

              <p className="text-lg max-w-3xl mx-auto mb-8">
                <span className="font-semibold text-green-400"> Explore </span>
                our comprehensive range of professional services designed to
                empower businesses and inspire growth.
              </p>

              {/* Tags */}
              <div className="flex  md:w-11/12 lg:w-2/3 xl:w-1/2 mx-auto flex-wrap justify-center gap-2 md:gap-4">
                {services.map((service) => (
                  <Link
                    href={`#${service.id}`}
                    key={service.id}
                    className="px-2 transition-all bg-white/10 border liquid-glass-bg border-white hover:scale-110  hover:bg-green-800 hover:text-black md:px-6 py-1 sm:py-2 rounded-full text-base lg:text-lg font-medium duration-300 cursor-pointer"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
                  href={`/services/${service.id}`}
                  className="inline-block border-[1px] border-white/50 rounded-full px-6 py-2 text-sm md:text-base hover:border-green-400 transition-all duration-300"
                >
                  Find More <span className="hover:animate-bounce"> ↗</span>
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

        <div className="bg-black/80 text-white py-20 px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            Empower Your Brand with
            <span className="text-green-800"> Our Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            <span className="font-semibold text-[#816C37]">Partner </span>
            with us to deliver bespoke solutions that drive growth and lasting
            impact.
          </p>

          <div>
            <div className="p-[3px] rounded-[40px] bg-gradient-to-r from-[#FFC841] to-[#4CF8CD] w-fit h-fit mx-auto">
              <div className="bg-black backdrop-blur-sm p-1 rounded-[40px]">
                <button className="flex items-center gap-x-5 rounded-[40px] bg-gradient-to-r from-[#1B6153] to-[#816C37] hover:bg-gradient-to-l px-6 py-2 text-lg font-semibold text-white">
                  Enquire Now
                  <BiMessageRoundedDots size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBlobBackground>
    </section>
  );
};

export default ServicesPage;
