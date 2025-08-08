import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Origa | Empowering Digital Innovation",
  description:
    "Learn about Origa’s mission to revolutionize the IT industry through collaboration, creativity, and cutting-edge technology. Meet the team behind web, mobile, ERP, and marketing innovations driving global business success.",
  openGraph: {
    title: "About Origa - Revolutionizing the IT Industry",
    description:
      "Discover Origa’s journey, values, and the passionate developer community driving innovation in web development, mobile apps, SEO, ERP systems, and digital marketing.",
    images: "/logo.svg",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Origa - Empowering Businesses Through Digital Solutions",
    description:
      "Origa is a collective of developers and creators transforming businesses with innovative software, design, and marketing solutions. Get to know our mission, vision, and team.",
    images: "/logo.svg",
  },
  keywords:
    "About Origa, Origa team, IT company, developer community, software company, web development, mobile app development, SEO, ERP solutions, digital marketing, tech innovation",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}