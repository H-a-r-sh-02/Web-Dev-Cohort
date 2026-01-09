import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-pink-600 w-full p-2">
      <nav className="flex justify-center gap-10 text-xl font-semibold cursor-pointer">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
        <Link href="/product">Product</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/courses">Courses</Link>
      </nav>
    </div>
  );
};

export default Navbar;
