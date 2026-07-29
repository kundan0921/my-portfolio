"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

const socialLinks = [
  {
    name: "GitHub",
    description:
      "Explore my projects, source code, and development work.",
    href: portfolioData.social.github,
    logo: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    description:
      "Connect with me and explore my professional journey.",
    href: portfolioData.social.linkedin,
    logo: "/icons/linkedin.svg",
  },
  {
    name: "LeetCode",
    description:
      "Check out my coding practice and problem-solving skills.",
    href: portfolioData.social.leetcode,
    logo: "/icons/leetcode.svg",
  },
  {
    name: "HackerRank",
    description:
      "Explore my coding challenges, skills, and certifications.",
    href: portfolioData.social.hackerrank,
    logo: "/icons/hackerrank.svg",
  },
];

export default function Socials() {
  return (
    <section
      id="social"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          My Online Presence
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Find Me Online
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Connect with me across different platforms and explore my
  projects, coding journey, and professional profile.
          </p>
        </motion.div>

        {/* =========================
            SOCIAL MEDIA CARDS
        ========================== */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

              <div className="relative">

                {/* Logo + External Link */}
                <div className="flex items-start justify-between">

                  {/* Platform Logo */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400">

                    <Image
                      src={social.logo}
                      alt={`${social.name} logo`}
                      width={30}
                      height={30}
                      className="object-contain transition duration-300 group-hover:brightness-0"
                    />

                  </div>

                  {/* External Link */}
                  <ExternalLink
                    size={18}
                    className="text-gray-600 transition-colors duration-300 group-hover:text-cyan-400"
                  />
                </div>

                {/* Platform Name */}
                <h3 className="mt-7 text-xl font-bold text-white">
                  {social.name}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                  {social.description}
                </p>

                {/* Visit Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  <span>Visit Profile</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

        {/* =========================
            RESUME & EMAIL CTA
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:p-10"
        >
          {/* CTA Text */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
              Open to Opportunities
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Interested in working together?
            </h3>

            <p className="mt-3 max-w-xl text-gray-500">
              I&apos;m currently open to entry-level opportunities,
              internships, and exciting software development projects.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            {/* Email */}
            <a
              href={portfolioData.social.email}
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <Mail size={18} />
              Email Me
            </a>

            {/* Resume */}
            <a
              href={portfolioData.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <FileText size={18} />
              View Resume
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}