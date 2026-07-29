"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            My Projects
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Projects I&apos;ve Built
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A collection of projects that showcase my skills in frontend
            development, backend development, databases, and full-stack
            application development.
          </p>
        </motion.div>

        {/* =========================
            PROJECTS GRID
        ========================== */}
        <div className="grid gap-5 sm:grid-cols-8 lg:grid-cols-3">

          {portfolioData.projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
            >

              {/* =========================
                  PROJECT IMAGE
              ========================== */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">

                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

              </div>

              {/* =========================
                  PROJECT CONTENT
              ========================== */}
              <div className="p-4">

                {/* Project Title */}
                <h3 className="line-clamp-2 text-base font-bold leading-6 text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-3 text-sm leading-5 text-gray-500">
                  {project.description}
                </p>

                {/* =========================
                    TECHNOLOGIES
                ========================== */}
                {/* Technologies */}
<div className="mt-3 flex flex-wrap gap-1.5">
  {project.technologies.map((technology) => (
    <span
      key={technology}
      className="rounded-full border border-amber-400/20 bg-amber-400/5 px-2.5 py-1 text-xs font-medium text-amber-400"
    >
      {technology}
    </span>
  ))}
</div>

                 

                {/* =========================
                    BUTTONS
                ========================== */}
                <div className="mt-4 flex flex-wrap gap-2">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-amber-400/40 hover:text-amber-400"
                  >
                    <span>↗</span>
                    GitHub
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}