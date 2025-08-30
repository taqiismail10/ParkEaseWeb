// components/site/Navbar.js
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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
            className="relative text-base px-4 py-2"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/pricing"
            className="relative text-base px-4 py-2"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/investor"
            className="relative text-base px-4 py-2"
          >
            Investors
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="/about"
            className="relative text-base px-4 py-2"
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
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
