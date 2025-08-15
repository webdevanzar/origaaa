import { getStoryblokApi } from "@/utils/storyblock";

interface StoryblokTestimonialType {
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

export const fetchTestimonials = async (): Promise<TestimonialType[]> => {
  const storyblokApi = getStoryblokApi();

  // Fetch from Storyblok
  const { data } = await storyblokApi.get("cdn/stories/testimonials", {
    version: "published",
  });

  // Extract and format
  const testimonials = data.story.content.Testimonials as StoryblokTestimonialType[];

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

  return formattedTestimonials;
};
