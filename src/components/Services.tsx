import { services } from "@/lib";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MotiionDiv } from "./shared/MotionDiv";
const serviceVarients = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const headVareints = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
};
const Services = ({ isMain = true }: { isMain?: boolean }) => {
  return (
    <section id="expertice" className="bg-gray-100">
      <div className="container py-16  max-w-screen-xl mx-auto  m-auto px-6 text-gray-500 ">
        <MotiionDiv
          variants={headVareints}
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.15,
            ease: "easeInOut",
            duration: 0.25,
          }}
          viewport={{ once: true }}
        >
          {isMain ? (
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
              Your Perfect Business Solution
            </h2>
          ) : (
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
              Our Other services
            </h2>
          )}
        </MotiionDiv>

        <div className="mx-auto  pt-10   grid gap-6  grid-cols-1 md:grid-cols-2  lg:w-full lg:grid-cols-3 ">
          {services.map((service, index) => (
            <Link href={`/services/${service.title}`} key={nanoid()}>
              <MotiionDiv
                variants={serviceVarients}
                initial="hidden"
                whileInView="visible"
                transition={{
                  type: "spring",
                  delay: 0.15 * index,
                  ease: "easeInOut",
                  duration: 0.25,
                }}
                viewport={{ once: true }}
                className="border border-gray-100 h-full  hover:scale-[1.02] transition-all duration-300 rounded-3xl bg-white px-8 pt-12 shadow-2xl shadow-gray-600/10
lg:px-8 sm:px-12"
              >
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-gray-600 leading-7">
                    {service.descritpion}
                  </p>
                </div>

                <Image
                  src={service.image}
                  alt=""
                  width={900}
                  height={600}
                  className="ml-auto w-2/3"
                />
              </MotiionDiv>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
