"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const speakingTopics = [
  {
    title: "Identity & Personal Development",
    description:
      "Anchoring decisions in values. Understanding who you are shapes how you show up, lead, and grow.",
    icon: "01",
  },
  {
    title: "Business Strategy & Corporate Confidence",
    description:
      "Practical frameworks for operating with clarity and confidence in professional environments.",
    icon: "02",
  },
  {
    title: "Faith Integrated Growth",
    description:
      "Aligning faith with real-world action. Growth that is deeply personal and structurally sound.",
    icon: "03",
  },
  {
    title: "Ladies in Leadership",
    description:
      "Equipping women to lead with conviction, navigate complexity, and build enduring influence.",
    icon: "04",
  },
];

const formats = [
  "Keynotes",
  "Panel Discussions",
  "Breakout Sessions",
  "Webinars",
  "Podcasts",
  "Workshops",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ── Page Hero: full-bleed ──────────────────────────── */}
        <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/stacey/4.jpg"
              alt="Stacey Elsie Lamptey"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
          </motion.div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Speaker Profile
            </motion.span>
            <motion.h1
              className="mt-3 font-heading text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[1.0] tracking-tight text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            >
              Stacey{" "}
              <span className="text-golden-earth-400">Elsie</span>
            </motion.h1>
          </div>
        </section>

        {/* ── Profile Bio: half-and-half ─────────────────────── */}
        <section className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Text half */}
          <div className="w-full lg:w-1/2 bg-platinum-50 flex items-center order-2 lg:order-1">
            <div className="px-10 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col gap-6 max-w-xl">
              <motion.p
                className="text-base text-platinum-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Stacey Elsie is a dynamic speaker, mindset mastery coach, and
                change agent whose voice has become a powerful instrument of
                transformation across professional spaces, faith-based
                communities, school halls, and digital platforms.
              </motion.p>

              <motion.p
                className="text-base text-platinum-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                She has carved a distinguished path as a woman in tech, earning
                numerous certifications and qualifications in a field where her
                presence alone inspires.
              </motion.p>

              <motion.p
                className="text-base text-platinum-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                She stands at the rare intersection of technical mastery and
                transformational leadership, making her one of the most
                compelling voices of her generation.
              </motion.p>

              <motion.blockquote
                className="mt-4 border-l-4 border-golden-earth-500 pl-6 py-2"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                <p className="font-heading text-xl font-semibold italic text-platinum-900">
                  &ldquo;The key to impact is turning potential into
                  possibilities.&rdquo;
                </p>
                <cite className="mt-3 block text-sm text-platinum-400 not-italic">
                  Stacey Elsie Lamptey
                </cite>
              </motion.blockquote>

              {/* Stats */}
              <motion.div
                className="flex gap-8 mt-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                <div>
                  <p className="font-heading text-3xl font-extrabold text-golden-earth-500">
                    1,000+
                  </p>
                  <p className="text-xs text-platinum-400 mt-1 uppercase tracking-wider">
                    Audience Reached
                  </p>
                </div>
                <div className="border-l border-platinum-200 pl-8">
                  <p className="font-heading text-3xl font-extrabold text-platinum-900">
                    4
                  </p>
                  <p className="text-xs text-platinum-400 mt-1 uppercase tracking-wider">
                    Speaking Topics
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image half */}
          <motion.div
            className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full overflow-hidden order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/stacey/1.jpg"
              alt="Stacey Elsie Lamptey"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-0 left-0 w-1 h-24 bg-golden-earth-500" />
          </motion.div>
        </section>

        {/* ── Speaking Topics ─────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              className="max-w-xl mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Speaking Topics</span>
              <h2 className="font-heading mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-platinum-900">
                What Stacey Speaks On
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {speakingTopics.map((topic, i) => (
                <motion.div
                  key={topic.title}
                  className="card-hover h-full bg-platinum-50 rounded-lg p-8 border border-transparent hover:border-golden-earth-500/20"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                >
                  <span className="font-heading text-4xl font-extrabold text-golden-earth-500/20">
                    {topic.icon}
                  </span>
                  <h3 className="font-heading mt-4 text-lg font-bold text-platinum-900">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-platinum-500 leading-relaxed">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Training & Transforming: half-and-half ──────────── */}
        <section className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Dark text half */}
          <div className="w-full lg:w-1/2 bg-platinum-950 flex items-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-golden-earth-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="px-10 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col gap-8 max-w-xl relative z-10">
              <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Training &amp; Transforming
              </motion.span>

              <motion.h2
                className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Guiding Individuals &amp; Organizations to{" "}
                <span className="text-golden-earth-400">Transform</span>
              </motion.h2>

              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                <p className="text-base text-iron-grey-300 leading-relaxed">
                  Transformation focuses on guiding individuals and
                  organizations to align identity, discipline, and
                  decision-making for long-term personal and professional
                  success.
                </p>
                <p className="text-base text-iron-grey-300 leading-relaxed">
                  Her work reaches youth, students, leaders, professionals, and
                  faith-based communities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              >
                <p className="font-heading text-xs font-semibold uppercase tracking-widest text-platinum-600 mb-4">
                  Engagement Formats
                </p>
                <div className="flex flex-wrap gap-2">
                  {formats.map((f) => (
                    <span
                      key={f}
                      className="font-heading px-3 py-1.5 text-xs font-medium border border-platinum-700 rounded-full text-platinum-400"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              >
                <Link href="/contact" className="btn-primary self-start mt-2">
                  Book a Session
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Image half */}
          <motion.div
            className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/stacey/5.jpg"
              alt="Stacey Elsie Lamptey speaking"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-platinum-950/10" />
            <div className="absolute top-0 right-0 w-1 h-24 bg-golden-earth-500" />
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
