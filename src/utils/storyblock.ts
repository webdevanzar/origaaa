import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.STORY_BLOCK_ACCESSTOKEN,
  use: [apiPlugin],
});

export { getStoryblokApi } from "@storyblok/react";
