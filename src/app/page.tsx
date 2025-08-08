import About from "@/components/About";
import Blogs from "@/components/Blogs";
import ClientLogo from "@/components/ClientLogo";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { HeroLight } from "@/components/HeroLight";
import { OurProcess } from "@/components/OurProcess";
import { Projects } from "@/components/Projects";
import WhatweDo from "@/components/WhatweDo";
import Testimonial from "@/components/Testimonial";
import Whatsapp from "@/components/Whatsapp";
import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import Overview from "@/components/Overview";
import ContactPopup from "@/components/ContactPopup";
import { getStoryblokApi } from "@/utils/storyblock";
import { fetchblogs } from "@/utils/fetchblogs";

const blobPositions = [
  { x: 10, y: 10 }, // Top-left
  { x: 90, y: 10 }, // Top-right
  { x: 10, y: 90 }, // Bottom-left
  { x: 90, y: 90 }, // Bottom-right
];

interface StoryblockTestimonialType {
  name: string;
  role?: string;
  content: string;
  image: { filename: string };
  logo: { filename: string };
}
export interface TestimonialType {
  id: string;
  name: string;
  role?: string;
  content: string;
  image: string;
  logo: string;
}

export default async function Home() {
  const storyblokApi = getStoryblokApi();

  //testimonials
  const { data } = await storyblokApi.get("cdn/stories/testimonials", {
    version: "published",
  });
  // Get the testimonials array from content
  const testimonials = data.story.content
    .Testimonials as StoryblockTestimonialType[];
  // Format testimonials as needed
  const formattedTestimonials: TestimonialType[] = testimonials.map(
    (item, index) => ({
      id: `testimonial-${index}`,
      name: item.name,
      role: item.role,
      content: item.content,
      image: item.image.filename,
      logo: item.logo.filename,
    })
  );

  //blogs
  const blogs = await fetchblogs();

  return (
    <div className="overflow-x-hidden">
      <ContactPopup />
      <Hero />
      <HeroLight />
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
        <Projects />
        <Overview />
        <OurProcess />
        <ClientLogo />
        <Testimonial Testimonials={formattedTestimonials} />
      </AnimatedBlobBackground>
      <Blogs blogs={blogs} />

      <Contact />
      <Whatsapp />
    </div>
  );
}
