import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="fixed top-0 h-fit border-b border-zinc-700 py-3 inset-x-5 z-10 px-2">
      <div className="grid justify-between grid-cols-12">
        {/* logo */}
        <div className="col-span-2">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="assets/reddit.svg"
              alt="Reddit Logo"
              width={35}
              height={35}
            />
            <p className="hidden md:block text-2xl font-extrabold">reddit</p>
          </Link>
        </div>
        {/* Search bar */}
        <div className="col-span-8"></div>
        {/* nav link */}
        <div className="col-span-2">
          <NavLink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
