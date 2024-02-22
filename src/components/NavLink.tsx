"use client";

import React from "react";
import { Button } from "./ui/Button";
import ThreeDot from "./ThreeDot";
import Link from "next/link";
import { ArrowUpRightFromCircle, Shield, Plus } from "lucide-react";
import { MessageCircle } from "lucide-react";

const NavLink = () => {
  return (
    <div className="flex items-center justify-end gap-6">
      <Link href="/r/popular">
        <ArrowUpRightFromCircle />
      </Link>

      <Link href="/r/popular">
        <MessageCircle />
      </Link>
      <Link href="/submit">
        <Plus />
      </Link>
      <Button className="bg-[#ff5314d4] hover:bg-[#ff5314d4]/60 rounded-3xl">
        Log In
      </Button>
      <ThreeDot />
    </div>
  );
};

export default NavLink;
