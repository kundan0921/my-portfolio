"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section
      id="experience"
      className="bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My Professional Journey
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            My practical experience, internships, and opportunities where
            I have applied my technical skills to real-world problems.
          </p>
        </motion.div>

        {/* No Experience Yet */}
        {experiences.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
              <BriefcaseBusiness size={30} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Open to New Opportunities
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              I am currently looking for an opportunity where I can apply
              my skills, contribute to real-world projects, learn from
              experienced professionals, and grow as a Full-Stack Developer.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Let's Connect
            </a>
          </motion.div>
        ) : (

          /* Experience Cards */
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.role}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >

                {/* Decorative Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

                <div className="relative">

                  {/* Top Row */}
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                    {/* Role */}
                    <div className="flex gap-5">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                        <BriefcaseBusiness size={25} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-lg text-cyan-400">
                          {experience.company}
                        </p>
                      </div>

                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays size={17} />
                      {experience.duration}
                    </div>

                  </div>

                  {/* Type */}
                  {experience.type && (
                    <div className="mt-7 inline-flex rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-gray-400">
                      {experience.type}
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-6 max-w-4xl leading-8 text-gray-400">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                      <Code2 size={17} />
                      Technologies:
                    </div>

                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}