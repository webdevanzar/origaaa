import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "glHqHKsLnN2WBlAAsF65DAtt",
  use: [apiPlugin],
});

export { getStoryblokApi } from "@storyblok/react";
