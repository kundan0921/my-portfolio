"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Trophy,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Achievements() {
  return (
    <section
      id="achievements"
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
            Achievements & Certifications
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Learning, Growth & Milestones
          </h2>

          
        </motion.div>


        {/* Achievements */}
        <div className="mt-24">

          <div className="mb-8 flex items-center gap-3">
            <Trophy className="text-cyan-400" size={26} />

            <h3 className="text-2xl font-bold text-white">
              Key Achievements
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {portfolioData.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
                  {achievement.icon}
                </div>

                <h4 className="mt-6 text-xl font-bold text-white">
                  {achievement.title}
                </h4>

                <p className="mt-3 leading-7 text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}