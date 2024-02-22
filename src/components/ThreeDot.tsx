import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LogOut } from "lucide-react";
import AuthDialog from "./AuthDialog";

const ThreeDot = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-slate-800 p-3 rounded-full transition-all">
        {" "}
        <HiOutlineDotsHorizontal size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10 mt-3 bg-[#131F23] border-none text-white">
        <DropdownMenuLabel className="flex gap-5 border-none">
          <LogOut />
          <AuthDialog />
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThreeDot;
