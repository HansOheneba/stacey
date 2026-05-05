"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSignup from "./components/EmailSignup";

const roles = ["Speaker", "Leader", "Voice", "Strategist", "Growth"];
const tickerItems = [...roles, ...roles];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ── Hero: full-bleed image with text overlay ─────── */}
        <section className="relative min-h-screen flex items-end overflow-hidden bg-white">
          {/* Background image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/stacey/1.jpg"
              alt="Stacey Elsie Lamptey"
              fill
              className="object-contain object-top"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
          </motion.div>

          {/* Text content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Speaker &amp; Growth Strategist
            </motion.span>

            <motion.h1
              className="mt-4 font-heading text-[clamp(3.5rem,8vw,7rem)] font-extrabold leading-[1.0] tracking-tight text-white"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.55,
              }}
            >
              Stacey <span className="text-golden-earth-400">Elsie</span>
              <br />
              Lamptey
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-white/60 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.7,
              }}
            >
              Purpose, Mindset, Growth and Development.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.85,
              }}
            >
              <Link href="/contact" className="btn-primary">
                Book Stacey
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="/about" className="btn-outline-light">
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Bottom-right role badges */}
          <motion.div
            className="absolute bottom-8 right-6 lg:right-12 z-10 flex gap-2 flex-wrap justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {["Speaker", "Growth Strategist"].map((title) => (
              <span
                key={title}
                className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-semibold font-heading text-white/60 tracking-wide backdrop-blur-sm"
              >
                {title}
              </span>
            ))}
          </motion.div>
        </section>

        {/* ── Roles Ticker ─────────────────────────────────── */}
        <div className="bg-platinum-900 py-8 border-y border-platinum-800 overflow-hidden">
          <div className="marquee-track select-none">
            {tickerItems.map((role, i) => (
              <span
                key={i}
                className="flex items-center gap-6 px-6 text-sm font-semibold font-heading uppercase tracking-[0.2em] text-platinum-400 whitespace-nowrap"
              >
                {role}
                <span className="text-golden-earth-500 text-base leading-none">
                  ·
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── About Teaser: half-and-half ───────────────────── */}
        <section className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Image half */}
          <motion.div
            className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/stacey/2.jpg"
              alt="Stacey Elsie Lamptey"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 w-1 h-24 bg-golden-earth-500" />
          </motion.div>

          {/* Text half */}
          <div className="w-full lg:w-1/2 bg-white flex items-center">
            <div className="px-10 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col gap-6 max-w-xl">
              <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                About Stacey
              </motion.span>

              <motion.h2
                className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-platinum-900"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
              >
                A speaker on{" "}
                <span className="text-golden-earth-500">Mindset Mastery</span>{" "}
                and Growth.
              </motion.h2>

              <motion.p
                className="text-base text-platinum-600 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
              >
                Stacey Elsie Lamptey is a speaker and growth strategist focused
                on identity, faith-based growth, and mindset development.
                Through practical and relatable sessions, she equips audiences
                to take responsibility for their choices, build strong personal
                values, and act with purpose in their everyday lives.
              </motion.p>

              <motion.p
                className="text-base text-platinum-600 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
              >
                Her approach blends an analytical background with honest,
                structured frameworks, turning insight into action.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
              >
                <Link href="/about" className="btn-outline self-start mt-2">
                  Full Profile
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
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
        </section>

        {/* ── Community: half-and-half reversed ────────────── */}
        <section className="flex flex-col lg:flex-row-reverse min-h-[80vh]">
          {/* Image half */}
          <motion.div
            className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/stacey/3.jpg"
              alt="Stacey Elsie speaking"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-platinum-950/20" />
            <div className="absolute top-0 right-0 w-1 h-24 bg-golden-earth-500" />
          </motion.div>

          {/* Text half — dark */}
          <div className="w-full lg:w-1/2 bg-platinum-950 flex items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-golden-earth-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="px-10 lg:px-16 xl:px-20 py-16 lg:py-24 flex flex-col gap-6 max-w-xl relative z-10">
              <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Community
              </motion.span>

              <motion.h2
                className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
              >
                A New Kind of{" "}
                <span className="text-golden-earth-400">Community</span>
              </motion.h2>

              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
              >
                <p className="text-base text-iron-grey-300 leading-relaxed">
                  A space built for people who are done with surface-level
                  living. People who want to think deeper, grow faster, and move
                  with intention.
                </p>
                <p className="text-base text-iron-grey-300 leading-relaxed">
                  A community rooted in mindset, anchored in faith, and oriented
                  toward real, measurable growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
              >
                <EmailSignup />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
