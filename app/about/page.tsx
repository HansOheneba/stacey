import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

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
        {/* ── Page Hero ──────────────────────────────────────── */}
        <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <span className="section-label">Speaker Profile</span>
              <h1
                className="mt-4 text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-[#111111]"
                style={{ fontFamily: "var(--font-raleway), sans-serif" }}
              >
                Stacey <span className="text-[#e31c41]">Elsie</span>
              </h1>
              <p className="mt-4 text-lg text-[#111111]/55 leading-relaxed max-w-xl">
                Dynamic speaker, mindset mastery coach, and change agent whose
                voice has become a powerful instrument of transformation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Profile Bio ─────────────────────────────────────── */}
        <section className="bg-[#fafafa] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Image: 4:3 */}
              <AnimateOnScroll animation="slide-right">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/stacey/4.jpg"
                    alt="Stacey Elsie Lamptey"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                </div>
                {/* stat callout */}
                <div className="mt-6 flex gap-8">
                  <div>
                    <p
                      className="text-3xl font-extrabold text-[#e31c41]"
                      style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                    >
                      1,000+
                    </p>
                    <p className="text-xs text-[#111111]/50 mt-1 uppercase tracking-wider">
                      Audience Reached
                    </p>
                  </div>
                  <div className="border-l border-gray-200 pl-8">
                    <p
                      className="text-3xl font-extrabold text-[#111111]"
                      style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                    >
                      4
                    </p>
                    <p className="text-xs text-[#111111]/50 mt-1 uppercase tracking-wider">
                      Speaking Topics
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Bio text */}
              <div className="flex flex-col gap-6">
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <p className="text-base text-[#111111]/65 leading-relaxed">
                    Stacey Elsie is a dynamic speaker, mindset mastery coach,
                    and change agent whose voice has become a powerful
                    instrument of transformation across professional spaces,
                    faith-based communities, school halls, and digital
                    platforms.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200}>
                  <p className="text-base text-[#111111]/65 leading-relaxed">
                    She has carved a distinguished path as a woman in tech,
                    earning numerous certifications and qualifications in a
                    field where her presence alone inspires. Her professional
                    excellence is the foundation; her calling is the force that
                    multiplies it.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300}>
                  <p className="text-base text-[#111111]/65 leading-relaxed">
                    She stands at the rare intersection of technical mastery and
                    transformational leadership, making her one of the most
                    compelling voices of her generation. With 1,000+ audience
                    members reached across faith-based communities, youth
                    audiences, and professionals, she does not just speak. She
                    directs growth.
                  </p>
                </AnimateOnScroll>

                {/* Quote */}
                <AnimateOnScroll animation="fade-up" delay={400}>
                  <blockquote className="mt-4 border-l-4 border-[#e31c41] pl-6 py-2">
                    <p
                      className="text-xl font-semibold italic text-[#111111]"
                      style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                    >
                      &ldquo;The key to impact is turning potential into
                      possibilities.&rdquo;
                    </p>
                    <cite className="mt-3 block text-sm text-[#111111]/45 not-italic">
                      Stacey Elsie Lamptey
                    </cite>
                  </blockquote>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ── Speaking Topics ─────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-xl mb-14">
                <span className="section-label">Speaking Topics</span>
                <h2
                  className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#111111]"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  What Stacey Speaks On
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {speakingTopics.map((topic, i) => (
                <AnimateOnScroll
                  key={topic.title}
                  animation="fade-up"
                  delay={i * 80}
                >
                  <div className="card-hover h-full bg-[#fafafa] rounded-lg p-8 border border-transparent hover:border-[#e31c41]/20">
                    <span
                      className="text-4xl font-extrabold text-[#e31c41]/15"
                      style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                    >
                      {topic.icon}
                    </span>
                    <h3
                      className="mt-4 text-lg font-bold text-[#111111]"
                      style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                    >
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#111111]/55 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Training & Transforming ─────────────────────────── */}
        <section className="bg-[#0d0d0d] py-24 lg:py-32 overflow-hidden relative">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e31c41]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Text */}
              <div className="flex flex-col gap-8">
                <AnimateOnScroll animation="fade-up">
                  <span className="section-label">Training & Transforming</span>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={100}>
                  <h2
                    className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white"
                    style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    Guiding Individuals &amp; Organizations to{" "}
                    <span className="text-[#e31c41]">Transform</span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200}>
                  <p className="text-base text-white/55 leading-relaxed">
                    Transformation focuses on guiding individuals and
                    organizations to align identity, discipline, and
                    decision-making for long-term personal and professional
                    success.
                  </p>
                  <p className="mt-4 text-base text-white/55 leading-relaxed">
                    Her work reaches a wide range of audiences, including youth,
                    students, leaders, professionals, and faith-based
                    communities.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300}>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4"
                      style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                    >
                      Engagement Formats
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {formats.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1.5 text-xs font-medium border border-white/20 rounded-full text-white/60"
                          style={{
                            fontFamily: "var(--font-raleway), sans-serif",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={400}>
                  <Link href="/contact" className="btn-primary self-start mt-2">
                    Book a Session
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
                </AnimateOnScroll>
              </div>

              {/* Image: 4:3 */}
              <AnimateOnScroll animation="slide-left" delay={200}>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/stacey/5.jpg"
                    alt="Stacey Elsie Lamptey speaking"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#0d0d0d]/10" />
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
