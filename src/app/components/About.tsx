"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Rocket } from "lucide-react";

import { portfolioData } from "../data/portfolio";

const stats = [
  {
    icon: GraduationCap,
    value: "B.Tech",
    label: "Computer Science Graduate",
  },
  {
    icon: Code2,
    value: "5+",
    label: "Projects Built",
  },
  {
    icon: Rocket,
    value: "10+",
    label: "Technologies Learned",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Turning ideas into digital experiences
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-gray-400">
              {portfolioData.personal.about}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I am passionate about learning new technologies, solving
              real-world problems, and creating applications that are
              both functional and visually engaging.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              As a fresher, my goal is to begin my professional journey
              in the software industry, work with experienced developers,
              contribute to real-world projects, and continuously improve
              my technical and problem-solving skills.
            </p>

            {/* Skills Highlight */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Problem Solving",
                "Clean Code",
                "Responsive Design",
                "Continuous Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >
                  {/* Icon */}
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {stat.value}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}