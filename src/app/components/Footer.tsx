"use client";

import {
  ArrowUp,
  Mail,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white">
              Kundan Kumar<span className="text-amber-400">.</span>
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              Full-Stack Developer passionate about building modern,
              scalable, and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <a
              href="#home"
              className="transition-colors hover:text-amber-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-amber-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-amber-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-amber-400"
            >
              Projects
            </a>

            <a
              href="#certifications"
              className="transition-colors hover:text-amber-400"
            >
              Certifications
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-amber-400"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">

           

            {/* Email */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400 hover:text-black"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">

          <p>
            © {new Date().getFullYear()} Kundan Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

           
            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400 hover:text-black"
            >
              <ArrowUp size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}