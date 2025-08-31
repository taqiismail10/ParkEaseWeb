"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  return (
    <header className="bg-background text-foreground py-6 shadow-md">
      {" "}
      {/* Increased padding */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-semibold flex items-center">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="ParkEase Logo"
            width={30}
            height={30}
            className="mr-2"
          />
          ParkEase
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`relative text-base px-4 py-2 transition-colors ${
              isActive("/")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
            )}
          </Link>
          <Link
            href="/pricing"
            className={`relative text-base px-4 py-2 transition-colors ${
              isActive("/pricing")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            Pricing
            {isActive("/pricing") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
            )}
          </Link>
          <Link
            href="/investor"
            className={`relative text-base px-4 py-2 transition-colors ${
              isActive("/investor")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            Investors
            {isActive("/investor") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
            )}
          </Link>
          <Link
            href="/about"
            className={`relative text-base px-4 py-2 transition-colors ${
              isActive("/about")
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            About
            {isActive("/about") && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
            )}
          </Link>{" "}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {/* <Search className="h-6 w-6" /> */}
        {/* <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button> */}
        {/* <Button size="sm">Join Waitlist</Button> */}
      </div>
      <div className="md:hidden flex items-center">
        <Menu className="h-6 w-6" />
      </div>
    </header>
  );
}
