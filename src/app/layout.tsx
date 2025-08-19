import type { Metadata } from "next";
import { Inter, Manrope, Passion_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import SonerProvider from "@/components/shared/SonnerProvider";
import { SidebarProvider } from "@/context/SidebarContext";
import ContactButtons from "@/components/Phone";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
export const passionone = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passionone",
});

export const metadata: Metadata = {
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (Script) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5V859JMF');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={manrope.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5V859JMF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Tawk.to Script */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68a00be5d8c4f119281969b6/1j2oisuj3';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        <SidebarProvider>{children}</SidebarProvider>
        <Footer />
        <SonerProvider />
        <ContactButtons />
      </body>
    </html>
  );
}
