import CreatePostMock from "@/components/CreatePostMock";
import { getAuthSession } from "@/lib/auth";
import React from "react";

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const session = await getAuthSession();
  return (
    <div>
      <CreatePostMock user={session?.user} />
    </div>
  );
};

export default page;
