"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    formData.append(
      "subject",
      "New Contact Message From Portfolio"
    );

    formData.append(
      "from_name",
      "Portfolio Contact Form"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =================================
            SECTION HEADER
        ================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project, job opportunity, or just want to connect?
            Feel free to reach out. I would love to hear from you.
          </p>
        </motion.div>

        {/* =================================
            MAIN CONTENT
        ================================== */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* =================================
              LEFT SIDE
          ================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white">
              Let&apos;s Work Together
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-gray-400">
              I&apos;m a passionate Full-Stack Developer looking for
              opportunities to build meaningful digital experiences,
              solve real-world problems, and grow with a great team.
            </p>

            {/* =================================
                CONTACT INFORMATION
            ================================== */}
            <div className="mt-8 space-y-4">

              {/* EMAIL */}
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-amber-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300 transition group-hover:text-amber-400">
                    kundankumar02123@gmail.com
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+911234567890"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-amber-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300 transition group-hover:text-amber-400">
                    +91 7431814781
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-amber-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    Haldia,west Bengal,India 
                  </p>
                </div>
              </div>

            </div>

            {/* =================================
                AVAILABILITY CARD
            ================================== */}
            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/[0.03] p-5">
              <div className="flex items-center gap-3">

                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400" />
                </span>

                <p className="text-sm font-medium text-gray-300">
                  Open to new opportunities
                </p>

              </div>
            </div>
          </motion.div>

          {/* =================================
              RIGHT SIDE - CONTACT FORM
          ================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400/60"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400/60"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400/60"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-amber-400/60"
                />
              </div>

              {/* SUCCESS MESSAGE */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/5 p-4 text-sm text-green-400"
                >
                  <CheckCircle size={20} />

                  <span>
                    Message sent successfully! Thank you for reaching out.
                  </span>
                </motion.div>
              )}

              {/* ERROR MESSAGE */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-400"
                >
                  <XCircle size={20} />

                  <span>
                    Something went wrong. Please try again.
                  </span>
                </motion.div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />

                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />

                    Send Message

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}