"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Shravan Viradiya
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={cn(
            "absolute left-0 right-0 top-full flex flex-col items-center gap-4 bg-black/90 p-4 md:relative md:flex md:flex-row md:gap-8 md:bg-transparent md:p-0",
            isOpen ? "flex" : "hidden md:flex"
          )}
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={cn(
                  "relative block py-2",
                  pathname === item.path
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-white"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
