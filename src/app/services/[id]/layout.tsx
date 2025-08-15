import { OurServices } from "../page";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const service = OurServices.find((s) => s.id === id);

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
