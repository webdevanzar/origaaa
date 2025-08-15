import { AllServices } from "@/lib";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
 const service = Array.isArray(AllServices) 
  ? AllServices.find((s) => s.id === params.id)
  : null;

  if (!service) {
    return {
      title: "Service Not Found",
      description: "This service does not exist.",
    };
  }

  return {
    title: `${service.title} | Your Company Name`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
}

export default function ServiceDetalpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
