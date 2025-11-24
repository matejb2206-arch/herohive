"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

const baseLink =
  "text-sm font-semibold transition-all duration-300 hover:text-amber-300 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]";
const activeLink =
  "text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.75)]";

export function Navbar() {
  const pathname = usePathname();

  const renderLinks = (extraClass = "") =>
    navLinks.map((link) => {
      const isActive =
        link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
      return (
        <Link
          key={link.href}
          href={link.href}
          className={`${extraClass} ${baseLink} ${
            isActive ? activeLink : "text-slate-300"
          }`}
        >
          {link.label}
        </Link>
      );
    });

  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 sticky top-0 z-50">
      <Link
        href="/"
        className="text-xl font-semibold text-amber-400 drop-shadow-[0_0_14px_rgba(251,191,36,0.5)]"
      >
        HeroHive
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {renderLinks()}
        <Button
          asChild
          className="rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold shadow-[0_8px_20px_rgba(251,191,36,0.25)] hover:shadow-[0_10px_30px_rgba(251,191,36,0.35)] transition-all"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 text-slate-200 hover:text-amber-300 transition">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-slate-950 text-white p-6 border-l border-slate-800"
          >
            <div className="flex flex-col gap-5">
              {renderLinks("text-base")}
              <Button
                asChild
                className="rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
