import { getStoryblokApi } from "@/utils/storyblock";

interface StoryblokClientLogoType {
  logo: {
    filename: string;
    alt?: string;
    name?: string;
  };
}

export interface ClientLogoType {
  id: string;
  logo: string;
  alt: string;
  name: string;
}

export const fetchClientLogos = async () => {
  const storyblokApi = getStoryblokApi();

  // Fetch logos from Storyblok
  const { data: logosData } = await storyblokApi.get("cdn/stories/clientlogos", {
    version: "published",
  });

  // Get the logos array from content
  const clientLogos = logosData.story.content.logo as StoryblokClientLogoType[];

  // Format logos
  const formattedClientLogos: ClientLogoType[] = clientLogos.map((item, index) => ({
    id: `client-logo-${index}`,
    logo: item.logo.filename,
    alt: item.logo.alt || "",
    name: item.logo.name || "",
  }));

  // Split into two equal parts
  const middleIndex = Math.ceil(formattedClientLogos.length / 2);
  const clientLogos1 = formattedClientLogos.slice(0, middleIndex);
  const clientLogos2 = formattedClientLogos.slice(middleIndex);

  return { clientLogos1, clientLogos2 };
};
