"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-zinc-950 px-6 py-24"
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
            Education
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My Academic Journey
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            My educational background and academic journey that helped
            me build a strong foundation in computer science and
            software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-10">
            {portfolioData.education.map((education, index) => (
              <motion.div
                key={`${education.degree}-${index}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-black text-cyan-400 md:flex">
                  {index === 0 ? (
                    <GraduationCap size={20} />
                  ) : (
                    <BookOpen size={20} />
                  )}
                </div>

                {/* Education Card */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">

                  {/* Duration */}
                  <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-400">
                    {education.duration}
                  </div>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-white">
                    {education.degree}
                  </h3>

                  {/* Field */}
                  <p className="mt-2 text-lg font-medium text-gray-300">
                    {education.field}
                  </p>

                  {/* Institution */}
                  <p className="mt-4 text-gray-400">
                    {education.institution}
                  </p>

                  {/* University */}
                  <p className="mt-1 text-sm text-gray-500">
                    {education.university}
                  </p>

                  {/* Grade */}
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <span className="text-sm text-gray-500">
                      Academic Result
                    </span>

                    <p className="mt-1 font-semibold text-cyan-400">
                      {education.grade}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}