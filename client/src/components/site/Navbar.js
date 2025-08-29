// components/site/Navbar.js
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-background text-foreground py-6 shadow-md">
      {" "}
      {/* Increased padding */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-2xl font-semibold">
          ParkEase
        </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-base">
              Home
            </Link>
            <Link href="/pricing" className="text-base">
              Pricing
            </Link>
            <Link href="/investor" className="text-base">
              Investors
            </Link>
            {/* <Link href="/contact" className="text-base">
            Contact
          </Link> */}
            <Link href="/about" className="text-base">
              About
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
