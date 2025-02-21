"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";
import Link from "next/link";
import Logo from "./media/Logo";
import Pill from "./Pill";
import TitleWithLogo from "./media/TitleWithLogo";

export default function Header() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close the menu when the window resizes past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`px-2 py-2 md:px-20 md:py-6 fixed top-0 left-0 right-0 z-50 ${theme === "dark" ? "bg-[#0a090d]" : "bg-brand"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-white hover:opacity-90 transition-opacity"
          >
            {/* <Logo style={{ width: '150px', height: 'auto' }} />
             */}
            <TitleWithLogo />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:opacity-90 transition-opacity"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leaderboard"
                    className="text-white hover:opacity-90 transition-opacity"
                  >
                    Leaderboard
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="https://t.me/+OqS-Y3s-dvZjZWFh"
                    className="text-white hover:opacity-90 transition-opacity"
                    target="_blank"
                  >
                    Telegram
                  </Link>
                </li> */}
              </ul>
            </nav>

            {/* <ThemeToggle /> */}

            <button
              onClick={toggleMenu}
              className="text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            fixed top-0 left-0 w-full h-full bg-black/70 z-40
            transition-opacity duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`
            md:hidden
            fixed top-0 right-0 w-3/4 h-full z-50 p-6
            ${theme === "dark" ? "bg-[#0a090d]" : "bg-brand"}
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <nav className="py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-white text-lg block hover:opacity-90 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-white text-lg block hover:opacity-90 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leaderboard
                </Link>
              </li>
              {/* <li>
                <Link
                  href="https://t.me/+OqS-Y3s-dvZjZWFh"
                  className="text-white text-lg block hover:opacity-90 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                  target="_blank"
                >
                  Telegram
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
