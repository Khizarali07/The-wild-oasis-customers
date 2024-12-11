"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <nav className="border-r border-primary-900 md:w-64 flex-shrink-0">
        {/* Burger Menu Button */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-primary-900">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="text-primary-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`md:static md:block transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 md:gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                    pathname === link.href ? "bg-primary-900" : ""
                  }`}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}

            <li className="mt-auto">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideNavigation;
