import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SonerProvider from "@/components/shared/SonnerProvider";
import Aurora from "@/components/ui/Aurora";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://www.zigzagdigitalsolutions.com"),
  twitter: {
    images: "/logo.svg",
    description:
      "Join Origa's community of developers to transform your digital presence. Specializing in web design, mobile app development, SEO, eCommerce, ERP, and digital marketing for business success.",
    card: "summary_large_image",
    title:
      "Origa is a community of developers united to revolutionize the IT industry through collaboration and creativity. We offer web design, mobile app development, SEO, eCommerce, ERP, and digital marketing services.",
  },
  title:
    "Origa - Revolutionizing the IT Industry with Collaborative Innovation",
  keywords:
    "Origa, IT industry, web design, mobile app development, SEO, eCommerce development, ERP development, digital marketing, developer community, innovative solutions, business solutions, digital transformation",
  openGraph: {
    type: "website",
    images: "/logo.svg",
    title:
      "Origa - Revolutionizing the IT Industry with Collaborative Innovation",
    description:
      "Origa is a community of developers united to revolutionize the IT industry through collaboration and creativity. We offer web design, mobile app development, SEO, eCommerce, ERP, and digital marketing services.",
  },
  description:
    "Join Origa, a dynamic community of developers, to transform your digital presence. We specialize in web design, mobile app development, SEO, eCommerce, ERP, and digital marketing to drive growth and success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <div className="absolute inset-0 -z-10 bg-black">
                <Aurora
                  colorStops={["#FF3232", "#3A29FF", "#FF94B4"]}
                  blend={0.8}
                  amplitude={1.0}
                  speed={0.4}
                />
              </div>
        {children}
        <Footer />
      </body>
      <SonerProvider />
    </html>
  );
}
