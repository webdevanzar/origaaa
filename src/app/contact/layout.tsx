import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Origa | Let's Build Something Great Together",
  description:
    "Get in touch with Origa to start your journey toward digital innovation. Reach out for web, mobile, ERP, or marketing services and let’s collaborate to make your ideas a reality.",
  openGraph: {
    title: "Connect with Origa - Your Digital Innovation Partner",
    description:
      "Whether you're looking to create a stunning website, powerful mobile app, or smart ERP system — contact Origa's team of expert developers and marketers today.",
    images: "/logo.svg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Origa - Transforming Ideas Into Digital Reality",
    description:
      "Speak with our expert team at Origa for tailored software and marketing solutions. Let's collaborate to empower your business.",
    images: "/logo.svg",
  },
  keywords:
    "Contact Origa, Origa contact page, get in touch Origa, IT services contact, software consultation, web development, ERP systems, digital marketing, mobile app development",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
