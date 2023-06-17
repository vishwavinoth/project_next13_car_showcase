"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  const handleVishwa = () => {
    const url = "https://www.linkedin.com/in/vishwaoffl/"; // Replace with the URL of the website you want to open
    window.open(url, "_blank");
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={handleVishwa}
        />
      </nav>
    </header>
  );
};

export default Navbar;
