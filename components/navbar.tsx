"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b bg-white sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-xl font-semibold text-gray-800">
        HeroHive
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/#features" className="text-gray-600 hover:text-gray-900">
          Features
        </Link>
        <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900">
          How It Works
        </Link>
        <Link href="/#industries" className="text-gray-600 hover:text-gray-900">
          Industries
        </Link>
        <Link href="/#about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>

        {/* 🟡 Contact Us Button */}
        <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-white p-6">
            <div className="flex flex-col gap-6">
              <Link href="/#features" className="text-gray-800 hover:text-gray-900">
                Features
              </Link>
              <Link href="/#how-it-works" className="text-gray-800 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="/#industries" className="text-gray-800 hover:text-gray-900">
                Industries
              </Link>
              <Link href="/#about" className="text-gray-800 hover:text-gray-900">
                About
              </Link>

              {/* 🟡 Contact Us Button (mobile) */}
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
