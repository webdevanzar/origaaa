import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import { AllServices } from "@/lib";

export default async function ServiceDetail({
  params,
}: {
  params: { id: string };
}) {
  console.log("AllServices type:", typeof AllServices, AllServices);

  const service = Array.isArray(AllServices)
    ? AllServices.find((s) => s.id === params.id)
    : null;

  if (!service) return notFound();

  return (
    <section>
      <AnimatedBlobBackground uniqueId="career-detailpage">
        <div className="bg-black/80 w-full h-[30vh] md:h-[45vh] relative">
          <Image
            src={"/hero4.jpg"}
            alt="image"
            fill
            className="object-cover bg-center rounded-b-xl"
          />
          <div className="absolute inset-0 bg-black/60 rounded-b-xl z-10" />
          <Navbar />
        </div>

        <div className="bg-black/80 text-white min-h-screen py-20 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            {/* <Link
              href={"/services"}
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <FaArrowLeft size={20} />
              Back
            </Link> */}

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8">{service.description}</p>

            <div className="relative h-[280px] sm:h-[400px] xl:h-[450px]  rounded-2xl overflow-hidden mb-5  md:mb-10">
              <Image
                src={service.image}
                alt={service.title}
                width={1000}
                height={1000}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-transparent border liquid-glass-bg rounded-lg">
              <h3 className="text-2xl font-semibold mb-2 leading-loose">
                About this project
              </h3>
              <p>{service.projectDescription2}</p>
            </div>
          </div>
        </div>
      </AnimatedBlobBackground>
    </section>
  );
}
