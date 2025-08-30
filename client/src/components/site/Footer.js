// components/site/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-8 mt-16 border-t border-t-[var(--pe-gray)]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold">ParkEase</h4>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link href="/about" className="hover:pe-hover-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:pe-hover-underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:pe-hover-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link href="/features" className="hover:pe-hover-underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:pe-hover-underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link
                  href="https://facebook.com"
                  className="hover:text-primary"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="hover:text-primary"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="hover:text-primary"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 mt-4 text-sm">
              <li>hello@parkease.com</li>
              <li>+880 123 456 789</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          &copy; 2024 ParkEase, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
