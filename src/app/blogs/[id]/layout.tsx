// app/blogs/[id]/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Insights - Origa | Software & Digital Solutions",
  description:
    "Explore expert blogs and insights from Origa on web development, mobile apps, SEO, ERP systems, and digital marketing. Stay ahead with the latest trends and innovations in the IT industry.",
  openGraph: {
    title: "Blogs & Insights - Origa | Software & Digital Solutions",
    description:
      "Stay informed with expert blogs from Origa on cutting-edge software, mobile development, digital marketing, and IT innovations.",
    images: "/logo.svg",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origa Blog | Web, App, ERP & Marketing Insights",
    description:
      "Gain valuable insights from Origa’s blog covering software development, mobile apps, SEO, ERP, and digital transformation strategies.",
    images: "/logo.svg",
  },
  keywords:
    "Origa blog, software development blog, web development, mobile apps, SEO insights, ERP trends, digital marketing, IT industry news, developer updates",
};

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
