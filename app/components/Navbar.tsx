"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const darkHeroRoutes = ["/contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu when route changes (React-approved pattern for syncing state with prop)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const isDarkHero = !scrolled && darkHeroRoutes.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-18 py-5">
          {/* Logo */}
          <Link
            href="/"
            className={`font-heading font-extrabold text-xl tracking-tight transition-colors duration-200 hover:text-golden-chestnut-500 ${
              isDarkHero ? "text-white" : "text-[#111111]"
            }`}
          >
            Stacey Elsie
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? "active" : ""} ${
                  isDarkHero ? "!text-white/80 hover:!text-white" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="btn-primary text-sm py-3 px-6">
              Book Stacey
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkHero ? "bg-white" : "bg-[#111111]"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkHero ? "bg-white" : "bg-[#111111]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkHero ? "bg-white" : "bg-[#111111]"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-base ${pathname === href ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-sm py-3 px-6 self-start mt-2"
          >
            Book Stacey
          </Link>
        </nav>
      </div>
    </header>
  );
}
