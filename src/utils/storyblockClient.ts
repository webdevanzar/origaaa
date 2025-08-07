import StoryblokClient from "storyblok-js-client";

const storyblokClient = new StoryblokClient({
  accessToken: "glHqHKsLnN2WBlAAsF65DAtt", // use a public token
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default storyblokClient;
