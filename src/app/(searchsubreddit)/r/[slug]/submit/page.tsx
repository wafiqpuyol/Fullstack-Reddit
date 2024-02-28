import SearchSubreddit from "@/components/SearchSubreddit";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import React from "react";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const session = await getAuthSession();
  const subscriptions = await db.subscription.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      subreddit: {
        select: {
          id: true,
          name: true,
          subscribers: true,
        },
      },
    },
  });

  return (
    <div>
      <SearchSubreddit user={session?.user} subscription={subscriptions} />
    </div>
  );
};

export default page;
