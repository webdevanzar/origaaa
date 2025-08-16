import { getStoryblokApi } from "@/utils/storyblock";

interface StoryblokCareerType {
  _uid: string;
  place: string;
  jobtitle: string;
  description: string;
  component: string;
}

export interface CareerType {
  id: string;
  place: string;
  jobtitle: string;
  description: string;
}

export const fetchCareers = async () => {
  const storyblokApi = getStoryblokApi();

  const { data: careerData } = await storyblokApi.get("cdn/stories/jobs", {
    version: "published",
  });

  const careers = careerData.story.content.Careers as StoryblokCareerType[];

  const formattedCareers: CareerType[] = careers.map((item, index) => ({
    id: item._uid || `career-${index}`,
    place: item.place,
    jobtitle: item.jobtitle,
    description: item.description,
  }));

  return formattedCareers;
};
