"use client";
import { navbarLists } from "@/constant";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed top-0 w-full z-1000 md:p-5 p-3 flex justify-between items-center backdrop-blur-lg border-b border-green-500/30">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <Link href={"/"} onClick={() => setActive("/")}>
          <Image
            src="/logo.png"
            alt="PMC Logo"
            width={250}
            height={250}
            className="md:w-auto md:h-10 w-45"
          />
        </Link>

        {/* Links */}
        <div className="md:flex hidden items-center gap-8">
          {navbarLists.map((navbar) => (
            <Link
              key={navbar.href}
              href={navbar.href}
              className={cn(
                `text-[0.82rem] tracking-[0.06em] uppercase transition-colors duration-300 no-underline relative group`,
                navbar.href === active
                  ? "text-green-500 font-semibold"
                  : "font-normal hover:text-green-600/90",
              )}
              onClick={() => setActive(navbar.href)}
            >
              {navbar.name}
              {/* Underline — expands from center outward */}
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-[#52b788]",
                  "w-0 group-hover:w-full transition-all duration-300 ease-out",
                  active === navbar.href && "w-full", // always visible if active
                )}
              />
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant={"ghost"} onClick={() => setIsOpen(true)}>
            <Menu />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className=" z-5000 pt-16 px-4">
              {navbarLists.map((navbar) => (
                <Link
                  key={navbar.href}
                  href={navbar.href}
                  className={cn(
                    `text-[0.82rem] tracking-[0.06em] uppercase transition-colors duration-300 no-underline relative group`,
                    navbar.href === active
                      ? "text-green-500 font-semibold"
                      : "font-normal hover:text-green-600/90",
                  )}
                  onClick={() => {
                    setActive(navbar.href);
                    setIsOpen(false);
                  }}
                >
                  {navbar.name}
                  {/* Underline — expands from center outward */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-[#52b788]",
                      "w-0 group-hover:w-full transition-all duration-300 ease-out",
                      active === navbar.href && "w-full", // always visible if active
                    )}
                  />
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
