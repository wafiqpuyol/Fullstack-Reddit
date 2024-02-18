"use client";

import React from "react";
import { Button } from "./ui/Button";
import ThreeDot from "./ThreeDot";

const NavLink = () => {
  return (
    <div className="flex items-center justify-end gap-6">
      <Button className="bg-[#ff5314d4] hover:bg-[#ff5314d4]/60 rounded-3xl">
        Log In
      </Button>
      <ThreeDot />
    </div>
  );
};

export default NavLink;
