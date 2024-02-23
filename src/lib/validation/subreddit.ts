import { z } from "zod";

export const createSubredditValidator = z.object({
  subRedditName: z.string(),
});

export type createSubredditPayload = z.infer<typeof createSubredditValidator>;
