"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            My Credentials
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A collection of certifications and courses that showcase my
            continuous learning and technical growth.
          </p>
        </motion.div>

        {/* Certificate Cards */}
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

  {portfolioData.certificates.map((certificate, index) => (
    <motion.a
      key={certificate.title}
      href={certificate.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
    >

      {/* Certificate Image */}
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
      </div>

      {/* Certificate Content */}
      <div className="relative">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
            {certificate.organization}
          </span>

          <ExternalLink
            size={16}
            className="text-gray-600 transition-colors duration-300 group-hover:text-amber-400"
          />

        </div>

        {/* Title */}
        <h3 className="mt-3 line-clamp-2 text-base font-bold leading-6 text-white">
          {certificate.title}
        </h3>

        {/* Date */}
        <p className="mt-2 text-xs text-gray-600">
          {certificate.date}
        </p>

        {/* View Certificate */}
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-amber-400">
          <span>View Certificate</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>

    </motion.a>
  ))}

</div>

      </div>
    </section>
  );
}