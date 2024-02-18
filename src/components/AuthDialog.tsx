import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/Button";
import { Icons } from "./icons";

const AuthDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>Log In / Sign Up</DialogTrigger>
      <DialogContent className="bg-[#131F23] border-0 p-16">
        <DialogHeader>
          <DialogTitle className="text-2xl">Log In</DialogTitle>
          <DialogDescription>
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-3">
          <Button className="bg-white text-black hover:bg-white/90 rounded-3xl">
            <Icons.google className="h-8 w-8 sm:h-6 sm:w-6 mr-4" />
            Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
