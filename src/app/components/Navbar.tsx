"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Socials", href: "#social" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-white"
        >
          <span className="text-cyan-400">&lt;</span>
          My Portfolio.
          <span className="text-cyan-400">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/KUNDAN KUMAR.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-cyan-400 px-5 py-2.5 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-medium text-black"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}