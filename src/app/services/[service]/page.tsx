import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Metadata } from "next";
import { services } from "@/lib";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: {
    service: string;
  };
};

export default async function Page({ params }: PageProps) {
  const decodedService = decodeURIComponent(params.service);
  const serviceContent = services.find((ser) => ser.title === decodedService);

  if (!serviceContent) {
    return <div className="p-10 text-center">Service not found.</div>;
  }

  return (
    <>
      <section className="min-h-screen h-full w-full bg-white">
        <div className="relative rounded-b-3xl bg-gray-100 overflow-y-hidden">
          <Navbar />
          <div className="w-full h-full">
            <div className="h-1/2 overflow-hidden relative bg-gray-900 mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
              <Image
                src="/hero.jpg"
                alt="hero"
                quality={100}
                fill
                className="scale-up z-0 w-full h-full object-cover top-0 opacity-80"
                priority
              />
            </div>
          </div>
          <div className="absolute w-full bottom-12">
            <div className="w-full max-w-screen-xl mx-auto">
              <h3 className="hidden md:block text-[40px] font-light text-white/95 px-5">
                {decodedService}
              </h3>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 my-16 text-gray-800">
          <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={serviceContent.image}
                alt={serviceContent.title}
                width={400}
                height={400}
                className="hover:scale-105 transition-all duration-300"
              />
            </div>
            <div>
              <h5 className="text-3xl font-medium text-btn">{decodedService}</h5>
              <p className="mt-6 md:text-[18px] leading-[35px] md:mr-10 text-gray-700">
                {serviceContent.content}
              </p>
              <Link href="/#contact">
                <button className="py-3 px-5 border border-green-900 mt-5 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>

          {Array.isArray(serviceContent.subData) && serviceContent.subData.length > 0 && (
            <div className="mt-16">
              <h4 className="mb-6 text-3xl font-medium text-btn">Platforms</h4>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {serviceContent.subData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 shadow-md p-6 rounded-xl hover:translate-y-2 transition-all duration-300"
                  >
                    <h5 className="text-lg font-medium">{item.title}</h5>
                    <p className="mt-3 text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <Services isMain={false} />
      </section>
    </>
  );
}

// ✅ Required for SSG
export async function generateStaticParams() {
  return services.map((ser) => ({
    service: encodeURIComponent(ser.title),
  }));
}

// ✅ Must be async and return Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const decoded = decodeURIComponent(params.service);
  return {
    title: `${decoded} | Origa`,
    description: `Explore ${decoded} service by Origa`,
  };
}
