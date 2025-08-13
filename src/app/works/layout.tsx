import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works - Origa Networks | Web, App, Marketing & Branding Projects",
  description:
    "Browse Origa Networks' portfolio showcasing web development, mobile apps, branding, SEO, e-commerce, and marketing projects delivered across Kerala. See how we bring ideas to life.",
  openGraph: {
    title: "Works - Origa Networks | Digital Portfolio in Kerala",
    description:
      "Discover Origa Networks' completed projects: websites, mobile applications, branding, SEO campaigns, e-commerce platforms, and digital marketing works across Kerala.",
    images: "/logo.svg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origa Networks Works | Showcasing Our Digital Creations",
    description:
      "Explore Origa Networks' portfolio — from websites and mobile apps to marketing, branding, and e-commerce solutions delivered across Kerala.",
    images: "/logo.svg",
  },
  keywords:
    "Origa Networks works, web development portfolio Kerala, mobile app portfolio Kerala, SEO case studies Kerala, branding portfolio Kerala, e-commerce projects Kerala, digital marketing works Kerala",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
