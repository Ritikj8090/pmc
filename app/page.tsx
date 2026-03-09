"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { EVENTS, FEATURES, SPEAKERS, STATS, STORIES } from "@/constant";
import FeatureCard from "@/components/FeatureCard";
import Badge from "@/components/Badge";
import TitleDescription from "@/components/TitleDescription";
import AnimatedCounter from "@/components/AnimatedCounter";

// ── VARIANTS ──────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  },
});

const childFade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

// ── STORY CARD ────────────────────────────────────────────────────────────────
function StoryCard({ s, delay }: { s: (typeof STORIES)[0]; delay: number }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group cursor-pointer relative overflow-hidden rounded-2xl border bg-green-900/5 md:p-8 p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-green-900/20 hover:bg-green-900/10"
      href={s.article_link}
      target="_blank"
    >
      {/* Rectangle avatar */}
      <div className=" flex items-center justify-center mb-4">
        <Image
          src={s.image}
          alt={s.name}
          width={250}
          height={100}
          className=" rounded-xl w-auto shadow-2xl"
        />
      </div>

      {/* Text section */}
      <div className="space-y-1">
        <h3 className="font-spartan text-lg font-bold">{s.name}</h3>
        <p className="text-sm font-medium text-green-600">{s.role}</p>
        <p className="text-[0.8rem] tracking-[0.04em] text-muted-foreground">
          {s.company}
        </p>
      </div>
    </motion.a>
  );
}

// ── EVENT CARD ────────────────────────────────────────────────────────────────
function EventCard({ ev, delay }: { ev: (typeof EVENTS)[0]; delay: number }) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative aspect-6/7 cursor-pointer overflow-hidden rounded-2xl"
      href={ev.link}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: ev.bg }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.25)] to-transparent z-10" />

      {/* Icon */}
      <Image src={ev.poster} alt={ev.title} fill className="" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-20">
        <div className="mb-3 md:inline-block hidden rounded-sm border border-[rgba(82,183,136,0.3)] bg-[rgba(82,183,136,0.2)] px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-[#b7e4c7]">
          {ev.tag}
        </div>

        <h3 className="mb-1.5 md:block hidden font-spartan text-[1.1rem] font-bold text-white">
          {ev.title}
        </h3>

        <div className="font-mono md:block hidden text-[0.75rem] text-[rgba(255,255,255,0.5)]">
          {ev.date}
        </div>
      </div>
    </motion.a>
  );
}

// ── SECTION HEADER ────────────────────────────────────────────────────────────
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-green-600 mb-4">
        <span className="w-8 h-px bg-green-600 inline-block" />
        {label}
        <span className="w-8 h-px bg-green-600 inline-block" />
      </div>
      <h2 className="font-serif font-black text-5xl">{title}</h2>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <div className="min-h-screen w-full space-y-10">
        <section className="relative flex items-center justify-center flex-col w-full min-h-screen overflow-hidden px-[5%]">
          {/* Main content */}
          <motion.div className="relative z-10 text-center">
            {/* Badge */}
            <Badge title="Student Org of the Year 2024" />
            <TitleDescription
              header="Project"
              title="Management"
              description={`Welcome to PMC UT Dallas, where passion fuels project management
          excellence! Embark on an empowering journey with us as we ignite
          future leaders' minds through dynamic activities. Join our vibrant
          community dedicated to advancing knowledge in project and product
          management, while having a blast along the way. Let's unlock your
          potential together!`}
              children={
                <motion.span variants={childFade} className="block">
                  Club At UTD
                </motion.span>
              }
              headerClassName="font-serif"
              descriptionClassName="max-w-250 text-[clamp(1rem,2vw,1.2rem)]"
            />

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.9)}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              <Link href="/membership">
                <Button className="border border-green-800 bg-green-800 px-6 py-7 hover:bg-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30">
                  Join the Club →
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant={"outline"}
                  className="border px-6 py-7 border-green-900 hover:text-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30"
                >
                  Explore Events
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="relative px-[5%] md:py-10">
          <div className="absolute top-0 left-[5%] right-[5%] h-px bg-linear-to-r from-transparent via-green-600 to-transparent" />
          <div className="grid md:grid-cols-4 gap-6 mx-auto">
            {FEATURES.map((f, i) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                desc={f.desc}
                icon={f.icon}
                delay={i * 0.1}
              />
            ))}
          </div>
        </section>

        {/* AWARD */}
        <section className="px-[5%] md:py-10">
          <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-green-600 mb-4">
                <span className="w-8 h-px bg-green-600 inline-block" />
                Recognition
              </div>
              <h2 className="font-serif font-black text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] mb-6">
                Student Organisation
                <br />
                <span className="text-green-600">of the Year</span>
              </h2>
              <p className="text-muted-foreground leading-[1.75] mb-8 text-base">
                Project Management Club is the proud recipient of the
                prestigious OWLIE (Outstanding, Worthy Leaders, Involved
                Exceptionally) award 2024 — recognizing our exceptional impact
                on student life at UT Dallas.
              </p>
              <div className="inline-flex items-center gap-4 bg-yellow-500/10 border border-yellow-500 rounded-lg px-6 py-4">
                <span className="text-[2rem]">🏆</span>
                <div>
                  <strong className="block font-serif text-[0.95rem] text-yellow-600 mb-0.5">
                    OWLIE Award 2024
                  </strong>
                  <span className="text-[0.8rem] text-muted-foreground font-mono">
                    Outstanding Worthy Leaders, Involved Exceptionally
                  </span>
                </div>
              </div>
              <Link
                href="https://jindal.utdallas.edu/blog/congratulations-2024-owlie-winners/"
                target="_blank"
              >
                <Button
                  variant={"outline"}
                  className="border mt-4 px-6 py-7 border-yellow-900 hover:text-yellow-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-yellow-900/30"
                >
                  Learn about the Owlies →
                </Button>
              </Link>
            </div>
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/owlies.png"
                alt="award"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="md:py-10 px-[5%]">
          <h1 className="md:text-5xl text-3xl font-black text-center mb-8 font-serif">
            Our Numbers
          </h1>
          <div className="mx-auto grid grid-cols-3 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center"
              >
                <span className="mb-2 block md:text-5xl text-3xl font-spartan font-extrabold leading-none text-green-600">
                  <AnimatedCounter target={s.value.toLocaleString()} className=" text-3xl" />
                </span>

                <span className="md:text-sm text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="py-10 px-[5%]">
          <SectionHeader label="Our People" title="Success Stories" />
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mx-auto">
            {STORIES.map((s, i) => (
              <StoryCard key={s.name} s={s} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* EVENTS */}
        <section className="md:py-10 px-[5%]">
          <SectionHeader label="Knowledge Sessions" title="Past Events" />
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6 mx-auto">
            {EVENTS.map((ev, i) => (
              <EventCard key={ev.title} ev={ev} delay={i * 0.1} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/events">
              <Button className="border border-green-800 bg-green-800 px-6 py-7 hover:bg-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30">
                View All Events →
              </Button>
            </Link>
          </div>
        </section>

        {/* SPEAKERS */}
        <section className="md:py-10 px-[5%]">
          <SectionHeader
            label="Industry Partners"
            title="Our Speakers Are From"
          />
          <div className=" mx-auto grid md:grid-cols-4 grid-cols-3 gap-8">
            {SPEAKERS.map((s, i) => (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className=" flex items-center justify-center"
              >
                <Image src={s} alt="speaker" width={120} height={60} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="md:py-10 px-[5%] text-center relative overflow-hidden"
          id="join"
        >
          <h2 className="relative font-serif font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6">
            Ready to Unlock
            <br />
            <span className="text-green-600">Your Potential?</span>
          </h2>
          <p className="relative text-muted-foreground max-w-200 mx-auto mb-12 leading-[1.75] text-[1.05rem]">
            Join 450+ members advancing their careers in project management.
            Your journey starts here.
          </p>
          <div className="relative flex gap-4 justify-center flex-wrap">
            <Link href="/membership">
              <Button className="border border-green-800 bg-green-800 px-6 py-7 hover:bg-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30">
                Join the Club →
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant={"outline"}
                className="border px-6 py-7 border-green-900 hover:text-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
