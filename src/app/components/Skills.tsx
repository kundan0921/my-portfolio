"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Binary,
  BinaryIcon,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";
import { GiArtificialIntelligence } from "react-icons/gi";
import { code } from "framer-motion/client";

const skillCategories = [
  {
    title: "Languages",
    description: "Programming languages and their applications.",
    icon: BinaryIcon,
    skills: portfolioData.skills.Languages,
  },
  {
    title: "Concepts",
    description: "Core programming concepts and principles.",
    icon: GiArtificialIntelligence,
    skills: portfolioData.skills.Concepts,
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: portfolioData.skills.frontend,
  },
  {
    title: "Backend Development",
    description: "Developing scalable APIs and server-side applications.",
    icon: Server,
    skills: portfolioData.skills.backend,
  },
  {
    title: "Database",
    description: "Working with databases and managing application data.",
    icon: Database,
    skills: portfolioData.skills.database,
  },
  {
    title: "Tools & Technologies",
    description: "Using modern tools to build, test, and deploy applications.",
    icon: Wrench,
    skills: portfolioData.skills.tools,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            My Skills
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Here are the technologies and tools I have learned and used
            while building academic, personal, and full-stack projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                {/* Category Header */}
                <div className="flex items-start gap-5">

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-black">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>
                  </div>

                </div>

                {/* Skill Tags */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}