import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import ContactPopup from "@/components/ContactPopup";
import { getStoryblokApi } from "@/utils/storyblock";
import { fetchblogs } from "@/utils/fetchblogs";
import { fetchClientLogos } from "@/utils/fetchclientlogos";
import { fetchProjects } from "@/utils/fetchprojects";
import Hero from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { About } from "@/components/home/aboutUs";
import { WhatweDo } from "@/components/home/whatWeDo";
import { Projects } from "@/components/home/projects";
import { Overview } from "@/components/home/overview";
import { OurProcess } from "@/components/home/ourProcess";
import { ClientLogo } from "@/components/home/clientLogos";
import { Testimonial } from "@/components/home/testimonial";
import { Blogs } from "@/components/home/blogs";
import { Contact } from "@/components/home/contactUs";
import { fetchTestimonials } from "@/utils/fetchtestimonials";

export const blobPositions = [
  { x: 10, y: 10 }, // Top-left
  { x: 90, y: 10 }, // Top-right
  { x: 10, y: 90 }, // Bottom-left
  { x: 90, y: 90 }, // Bottom-right
];


export default async function Home() {

  //fetch testimonials
  const testimonials = await fetchTestimonials();

  //fetch projects
  const projects = await fetchProjects();

  // Fetch client logos
  const { clientLogos1, clientLogos2 } = await fetchClientLogos();

  //fetch blogs
  const blogs = await fetchblogs();

  return (
    <div className="overflow-x-hidden">
      <ContactPopup />
      <Hero />
      <Services />
      <About />

      <AnimatedBlobBackground
        uniqueId="my-blobs"
        blobCount={25}
        blobPositions={blobPositions}
        animationDuration={2000} // Slower animation (3 seconds)
        blurAmount={30} // More blur for smoother effect
        minScale={2} // Minimum size
        maxScale={4} // Maximum size
        minOpacity={0.5}
        maxOpacity={0.9}
      >
        <WhatweDo />
        <Projects projects={projects} />
        <Overview />
        <OurProcess />
        <ClientLogo clientLogos1={clientLogos1} clientLogos2={clientLogos2} />
        <Testimonial Testimonials={testimonials} />
      </AnimatedBlobBackground>
      <Blogs blogs={blogs} />

      <Contact />
    </div>
  );
}
