import StoryblokClient from "storyblok-js-client";

const storyblokClient = new StoryblokClient({
  accessToken: process.env.STORY_BLOCK_ACCESSTOKEN, // use a public token
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default storyblokClient;
