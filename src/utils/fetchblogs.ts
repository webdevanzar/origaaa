import { getStoryblokApi } from "@/utils/storyblock";

interface StoryblokBlogType {
  _uid: string;
  title: string;
  date: string;
  image: { filename: string };
  blogcontent: string;
  component: string;
}

export interface BlogType {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

export const fetchblogs = async () => {
  const storyblokApi = getStoryblokApi();

  const { data: blogData } = await storyblokApi.get("cdn/stories/blogs", {
    version: "published",
  });
  const blogs = blogData.story.content.blogs as StoryblokBlogType[];
  const formattedBlogs: BlogType[] = blogs.map((item, index) => ({
    id: item._uid || `blog-${index}`,
    title: item.title,
    date: item.date,
    image: item.image.filename,
    content: item.blogcontent,
  }));

  return formattedBlogs;
};
