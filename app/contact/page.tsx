"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

const faqs = [
  {
    q: "What is the booking process?",
    a: "Fill out the form on this page with your details. Our team will respond usually within 2 working days to confirm availability and discuss next steps.",
  },
  {
    q: "How far in advance should we book?",
    a: "At least 3–5 weeks in advance for local engagements. For large conferences or annual programs, earlier is always better.",
  },
  {
    q: "Does Stacey travel for events?",
    a: "Yes. Stacey travels for events and engagements.",
  },
  {
    q: "Is coaching available, and how is it different from a speaking engagement?",
    a: "Yes. Beyond the stage, Stacey works with individuals through one-on-one and group coaching. Coaching is a structured, ongoing process, not a one-time talk. If you are interested in personal coaching, use the contact form to indicate that and you will receive details on current availability and packages.",
  },
  {
    q: "What does Stacey need from event organisers to prepare?",
    a: "A clear brief on your audience, the outcome you want from the session, any theme or programme context, and logistical details such as venue setup and AV availability. Stacey prepares specifically for every engagement. The more context you provide, the sharper the delivery.",
  },
  {
    q: "What is the fee for speaking engagements?",
    a: "Fees vary depending on the type of engagement, audience size, duration, and whether travel is involved. Some community, school, and non-profit engagements are considered on a subsidised or pro bono basis. Reach out through the form and a conversation about fit and fee will follow.",
  },
];

const countryCodes = [
  { code: "+233", label: "GH +233" },
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+234", label: "NG +234" },
  { code: "+27", label: "ZA +27" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold font-heading text-[#111111]">
          {q}
        </span>
        <span
          className={`flex-shrink-0 text-golden-chestnut-500 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
        </span>
      </button>
      <div className={`faq-content ${open ? "open" : ""}`}>
        <p className="text-sm text-[#111111]/60 leading-relaxed pb-5 pr-8">
          {a}
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+233");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a brief send delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-full bg-golden-chestnut-50 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-8 h-8 text-golden-chestnut-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-[#111111]">
          Message Received
        </h3>
        <p className="text-sm text-[#111111]/55 max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you within 2
          working days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-golden-chestnut-500 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#111111]/50 uppercase tracking-wider">
            First Name <span className="text-golden-chestnut-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="First name"
            className="px-4 py-3 border border-gray-200 rounded text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-golden-chestnut-500 transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#111111]/50 uppercase tracking-wider">
            Last Name <span className="text-golden-chestnut-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Last name"
            className="px-4 py-3 border border-gray-200 rounded text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-golden-chestnut-500 transition-colors duration-200"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#111111]/50 uppercase tracking-wider">
          Email <span className="text-golden-chestnut-500">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="px-4 py-3 border border-gray-200 rounded text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-golden-chestnut-500 transition-colors duration-200"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#111111]/50 uppercase tracking-wider">
          Phone
        </label>
        <div className="flex gap-2">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="px-3 py-3 border border-gray-200 rounded text-sm text-[#111111] focus:outline-none focus:border-golden-chestnut-500 transition-colors duration-200 bg-white"
          >
            {countryCodes.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="Phone number"
            className="flex-1 px-4 py-3 border border-gray-200 rounded text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-golden-chestnut-500 transition-colors duration-200"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#111111]/50 uppercase tracking-wider">
          Subject <span className="text-golden-chestnut-500">*</span>
        </label>
        <select
          required
          defaultValue=""
          className="px-4 py-3 border border-gray-200 rounded text-sm text-[#111111] focus:outline-none focus:border-golden-chestnut-500 transition-colors duration-200 bg-white"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="general">General Enquiry</option>
          <option value="speaking">Speaking Engagement</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#111111]/50 uppercase tracking-wider">
          Message <span className="text-golden-chestnut-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your event or enquiry..."
          className="px-4 py-3 border border-gray-200 rounded text-sm text-[#111111] placeholder-[#111111]/30 focus:outline-none focus:border-golden-chestnut-500 transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary self-start mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Submit
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ── Page Hero ──────────────────────────────────────── */}
        <section className="bg-[#0d0d0d] pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="section-label">Get In Touch</span>
                <h1 className="font-heading mt-4 text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                  Let&apos;s Work{" "}
                  <span className="text-golden-chestnut-500">Together</span>
                </h1>
                <p className="mt-4 text-base text-white/50 leading-relaxed max-w-md">
                  Stacey Elsie partners with individuals and organizations for
                  structured, high-impact experiences that move beyond
                  inspiration and deliver measurable growth activation.
                </p>
              </div>

              {/* Image: 1:1 square */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/stacey/6.jpg"
                    alt="Stacey Elsie Lamptey"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 80vw, 400px"
                  />
                  <div className="absolute inset-0 bg-[#0d0d0d]/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Form + FAQs ─────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form */}
              <AnimateOnScroll animation="fade-up">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#111111] mb-8">
                    Send a Message
                  </h2>
                  <ContactForm />
                </div>
              </AnimateOnScroll>

              {/* FAQs */}
              <AnimateOnScroll animation="fade-up" delay={150}>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#111111] mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div>
                    {faqs.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
