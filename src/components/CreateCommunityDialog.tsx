import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DropdownMenuSeparator } from "@/components/ui/Dropdown-menu";
import { Input } from "./ui/Input";
import CreateCommunity from "./CreateCommunity";

const CreateCommunityDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="pl-2 text-sm">Create Community</DialogTrigger>
      <DialogContent className="bg-[#1A1A1B] border-zinc-600">
        <DialogHeader>
          <DialogTitle>Create a community</DialogTitle>
          <DropdownMenuSeparator className="bg-zinc-700" />

          <DialogTitle>Name</DialogTitle>
          <DialogDescription>
            Community names including capitalization cannot be changed.
          </DialogDescription>
        </DialogHeader>
        <CreateCommunity />
      </DialogContent>
    </Dialog>
  );
};

export default CreateCommunityDialog;
