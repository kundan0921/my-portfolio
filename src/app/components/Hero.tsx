"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-3xl">
            {personal.role}
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            {personal.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:bg-cyan-300"
            >
              View My Projects

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href={personal.resume}
              download
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
<div className="mt-10 flex flex-wrap gap-4">
  <a
    href={social.github}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
  >
    GitHub
  </a>

  <a
    href={social.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
  >
    LinkedIn
  </a>

  <a
    href={social.email}
    className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
  >
    Email
  </a>
</div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Image Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Image */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-white/5 p-2 shadow-2xl shadow-cyan-500/20 md:h-96 md:w-75">
              <img
                src={personal.profileImage}
                alt={`${personal.name} profile`}
                className="h-full w-full rounded-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}