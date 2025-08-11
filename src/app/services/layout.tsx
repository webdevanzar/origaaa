import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Origa Networks | Web, App, Marketing & Branding in Kerala",
  description:
    "Discover Origa Networks' full range of digital solutions in Kerala — from custom web and mobile app development to SEO, branding, e-commerce, and AMC services. We help your business grow online with innovative technology and design.",
  openGraph: {
    title: "Services - Origa Networks | Digital Solutions in Kerala",
    description:
      "Explore Origa Networks' professional services: web development, mobile app creation, SEO, branding, e-commerce solutions, and annual maintenance contracts across Kerala.",
    images: "/logo.svg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origa Networks Services | Transform Your Digital Presence",
    description:
      "From websites and mobile apps to marketing, branding, and e-commerce — Origa Networks delivers expert digital solutions across Kerala.",
    images: "/logo.svg",
  },
  keywords:
    "Origa Networks services, web development Kerala, mobile app development Kerala, SEO Kerala, branding Kerala, e-commerce development Kerala, website AMC Kerala, digital marketing Kerala",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
