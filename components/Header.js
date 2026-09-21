"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Practice Areas", href: "/focus-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Book Appointment", href: "https://calendly.com/amasandrhodlaw-info/new-meeting",target:"_blank" }
  ];

  return (
    <header className="bg-gray-50 fixed w-full top-0 z-20 text-blue-950 py-4 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Amas & Rhod Law home"
            className="h-14 w-auto"
          />
          {/* <span className="font-bold hidden md:block text-xl tracking-wide">Honoredge Legal Practice</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target={item.target?item.target:""}
              rel={item.target ? "noopener noreferrer" : undefined}
              className="relative font-semibold text-sm hover:text-blue-800 transition-colors"
            >
              {item.name}
              {/* <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-950 transition-all group-hover:w-full"></span> */}
            </Link>
          ))}
          {/* {["About", "Attorneys", "Practice Areas", "Blog", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                href={
                  item === "Practice Areas"
                    ? "/#practice-areas"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="relative group font-semibold tracking-wide"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </Link>
            )
          )} */}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="lg:hidden text-blue-950 p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden mt-4 px-4 py-4 bg-gray-50 text-blue-950 space-y-4">
          <Link
            href="/"
            className="font-semibold block"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target={item.target?item.target:""}
              rel={item.target ? "noopener noreferrer" : undefined}
              className="block font-semibold hover:text-blue-800"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* {["About", "Attorneys", "Practice Areas", "Blog", "Contact"].map(
            (item, idx) => (
              <Link
                key={idx}
                href={
                  item === "Practice Areas"
                    ? "/#practice-areas"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                className="block font-semibold"
              >
                {item}
              </Link>
            )
          )} */}
        </nav>
      )}
    </header>
  );
}
