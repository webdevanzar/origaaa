import { getStoryblokApi } from "@/utils/storyblock";

interface StoryblokProjectType {
  _uid: string;
  title: string;
  date: string;
  link: string;
  image1?: { filename: string };
  image2?: { filename: string };
  details: string;
  category: string;
  isCompleted: boolean;
  component: string;
}

export interface ProjectType {
  id: string;
  title: string;
  date: string;
  link: string;
  image1?: string;
  image2?: string;
  details: string;
  category: string;
  isCompleted: boolean;
}

export const fetchProjects = async (): Promise<ProjectType[]> => {
  const storyblokApi = getStoryblokApi();

  const { data: projectData } = await storyblokApi.get("cdn/stories/projects", {
    version: "published",
  });

  const projects = projectData.story.content.contents as StoryblokProjectType[];

  const formattedProjects: ProjectType[] = projects.map((item, index) => ({
    id: item._uid || `project-${index}`,
    title: item.title,
    date: item.date,
    link: item.link,
    image1: item.image1?.filename,
    image2: item.image2?.filename,
    details: item.details,
    category: item.category,
    isCompleted: item.isCompleted,
  }));

  return formattedProjects;
};
