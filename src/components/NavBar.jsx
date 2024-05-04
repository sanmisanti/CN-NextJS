import React from "react";
import Link from "next/link";

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

const NavBar = () => {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-[#f0f4f8]">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base text-[#0077b6]"
          href="#"
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link className="font-bold text-[#0077b6]" href="#">
          About
        </Link>
        <Link className="text-[#4a4a4a]" href="#">
          Services
        </Link>
        <Link className="text-[#4a4a4a]" href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
