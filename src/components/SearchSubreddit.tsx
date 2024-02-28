"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { Input } from "./ui/Input";
import { Subscription, User } from "@prisma/client";
import UserAvatar from "./UserAvatar";
import CreateCommunityDialog from "./CreateCommunityDialog";
import { usePathname, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { InputContext } from "../context/Input";
interface SearchSubredditProp {
  subscription: Subscription &
    {
      subreddit: {
        id: string;
        name: string;
        subscribers: Subscription[];
      };
    }[];
  user: Pick<User, "image" | "username">;
}
const SearchSubreddit: FC<SearchSubredditProp> = ({ subscription, user }) => {
  const { subreddit, setSubreddit } = useContext(InputContext);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const pathname = usePathname();
  // const [input, setInput] = useState("");
  const router = useRouter();
  // useEffect(() => {
  //   if (pathname.startsWith("/r")) setInput(pathname.split("/")[2]);
  // }, [pathname]);
  return (
    // ((pathname.startsWith("/r") && pathname.endsWith("/submit")) ||
    //   pathname.startsWith("/submit")) && (
    <div className="flex flex-col">
      <div className="flex items-center bg-zinc-800 px-2 rounded-md">
        <Search />
        <Input
          placeholder="Search communities"
          className="bg-transparent placeholder:text-zinc-400 focus-visible:border-0 focus-visible:ring-0  focus-visible:ring-offset-0 ring-offset-0 border-0"
          onClick={() => setDropDownOpen((prev) => !prev)}
          onChange={(e) => setSubreddit(e.target.value)}
          value={subreddit}
        />
      </div>
      {dropDownOpen && (
        <div
          className="w-72 max-h-52 overflow-y-scroll bg-primary"
          id="dropdown"
        >
          <div className="px-2 py-1">
            <span className="text-zinc-500 text-xs font-bold">
              Your profile
            </span>
            <div className="flex items-center gap-2 mt-1">
              <UserAvatar profileImage={user.image} width="w-7"></UserAvatar>
              <span className="text-sm">u/{user.username}</span>
            </div>
          </div>
          <hr className="my-3" />

          <div className="px-2 py-1">
            <div className="flex justify-between items-center mb-3">
              <span className="text-zinc-500 text-xs font-bold">
                Your community
              </span>
              <CreateCommunityDialog>
                <span className="text-xs font-bold text-zinc-300">
                  Create new
                </span>
              </CreateCommunityDialog>
            </div>
            <ul className="flex flex-col items-start gap-y-3">
              {subscription?.map(({ subreddit }) => (
                <li
                  key={subreddit.id}
                  onClick={() => router.push(`r/${subreddit.name}/submit`)}
                  className="cursor-pointer text-sm font-semibold flex flex-col justify-center text-zinc-300 w-full hover:bg-zinc-900"
                >
                  {`r/${subreddit.name}`}
                  <span className="text-zinc-500 text-[12px] font-bold">
                    {subreddit.subscribers.length} members
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSubreddit;
