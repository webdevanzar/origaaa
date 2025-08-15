import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Origa Networks | Join Our Innovative Team in Kerala",
  description:
    "Explore exciting career opportunities at Origa Networks in Kerala. Join our talented team of developers, designers, and marketers to shape the future of digital innovation.",
  openGraph: {
    title: "Careers - Origa Networks | Work With Us",
    description:
      "Be part of Origa Networks' creative and tech-driven team. Discover open positions and grow your career in web development, mobile apps, marketing, and more.",
    images: "/logo.svg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Origa Networks | Build Your Future With Us",
    description:
      "We’re hiring! Join Origa Networks' team in Kerala and collaborate on innovative projects in web, mobile, marketing, and branding.",
    images: "/logo.svg",
  },
  keywords:
    "Origa Networks careers, jobs at Origa Networks, web development jobs Kerala, mobile app development jobs Kerala, digital marketing jobs Kerala, branding careers Kerala, tech jobs Kerala",
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
