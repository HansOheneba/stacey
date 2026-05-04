import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import EmailSignup from "./components/EmailSignup";

const roles = ["Speaker", "Leader", "Voice", "Strategist", "Growth"];
const tickerItems = [...roles, ...roles];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="min-h-screen flex items-center bg-white pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">
              {/* Text */}
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <div className="hero-item">
                  <span className="section-label">
                    Speaker & Growth Strategist
                  </span>
                </div>

                <h1 className="hero-item font-heading text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#111111]">
                  Stacey <span className="text-golden-chestnut-500">Elsie</span>
                  <br />
                  Lamptey
                </h1>

                <div className="hero-item flex flex-wrap gap-3">
                  {["Speaker", "Growth Strategist"].map((title) => (
                    <span
                      key={title}
                      className="inline-block px-4 py-1.5 border border-[#111111]/20 rounded-full text-sm font-semibold font-heading text-[#111111]/70 tracking-wide"
                    >
                      {title}
                    </span>
                  ))}
                </div>

                <p className="hero-item text-lg text-[#111111]/60 leading-relaxed max-w-md">
                  Purpose, Mindset, Growth and Development.
                </p>

                <div className="hero-item flex flex-wrap gap-4 pt-2">
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
                  <Link href="/about" className="btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Image: strictly square */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="hero-image-reveal relative w-full max-w-[480px]">
                  {/* Accent decorative block */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-golden-chestnut-50 rounded-lg -z-10" />
                  <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/stacey/2.jpg"
                      alt="Stacey Elsie Lamptey, Speaker and Growth Strategist"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 1024px) 90vw, 480px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Teaser ─────────────────────────────────── */}
        <section className="bg-[#fafafa] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image: 4:3 */}
              <AnimateOnScroll animation="slide-right" className="relative">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/stacey/1.jpg"
                    alt="Stacey Elsie Lamptey"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                </div>
                {/* Accent */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-golden-chestnut-500 rounded-lg opacity-40 -z-10" />
              </AnimateOnScroll>

              {/* Text */}
              <div className="flex flex-col gap-6">
                <AnimateOnScroll animation="fade-up" delay={50}>
                  <span className="section-label">About Stacey</span>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={150}>
                  <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-[#111111]">
                    A speaker on{" "}
                    <span className="text-golden-chestnut-500">
                      Mindset Mastery
                    </span>{" "}
                    and Growth.
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={250}>
                  <p className="text-base text-[#111111]/65 leading-relaxed">
                    Stacey Elsie Lamptey is a speaker and growth strategist
                    focused on identity, faith-based growth, and mindset
                    development. Through practical and relatable sessions, she
                    equips audiences to take responsibility for their choices,
                    build strong personal values, and act with purpose in their
                    everyday lives.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={350}>
                  <p className="text-base text-[#111111]/65 leading-relaxed">
                    Her approach blends an analytical background with honest,
                    structured frameworks, turning insight into action.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={450}>
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
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ── Roles Ticker ─────────────────────────────────── */}
        <div className="bg-white py-10 border-y border-gray-100 overflow-hidden">
          <div className="marquee-track select-none">
            {tickerItems.map((role, i) => (
              <span
                key={i}
                className="flex items-center gap-6 px-6 text-sm font-semibold font-heading uppercase tracking-[0.2em] text-[#111111]/30 whitespace-nowrap"
              >
                {role}
                <span className="text-golden-chestnut-500 text-base leading-none">
                  ·
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Community ────────────────────────────────────── */}
        <section className="bg-[#0d0d0d] py-24 lg:py-32 relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-golden-chestnut-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Text */}
              <div className="flex flex-col gap-8">
                <AnimateOnScroll animation="fade-up">
                  <span className="section-label">Community</span>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={100}>
                  <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight text-white">
                    A New Kind of{" "}
                    <span className="text-golden-chestnut-500">Community</span>
                  </h2>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200}>
                  <p className="text-base text-white/55 leading-relaxed">
                    A space built for people who are done with surface-level
                    living. People who want to think deeper, grow faster, and
                    move with intention.
                  </p>
                  <p className="text-base text-white/55 leading-relaxed mt-4">
                    A community rooted in mindset, anchored in faith, and
                    oriented toward real, measurable growth. This is a gathering
                    of people who take their inner work seriously and understand
                    that transformation is not a moment. It is a lifestyle.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={300}>
                  <EmailSignup />
                </AnimateOnScroll>
              </div>

              {/* Image: 4:3 */}
              <AnimateOnScroll animation="slide-left" delay={200}>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/stacey/3.jpg"
                    alt="Stacey Elsie speaking"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#0d0d0d]/20" />
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
