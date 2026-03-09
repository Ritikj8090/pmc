"use client";

import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MEMBER_STATS, PERKS, STEPS } from "@/constant";
import AnimatedCounter from "@/components/AnimatedCounter";
import Badge from "@/components/Badge";
import TitleDescription from "@/components/TitleDescription";

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="flex items-start gap-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-900/20 bg-linear-to-br from-green-500 to-green-900 font-mono text-[0.75rem] font-bold text-white">
        {step.num}
      </div>

      <div>
        <h3 className="mb-1.5 font-spartan text-base font-bold">
          {step.title}
        </h3>

        <p className="text-[0.84rem] leading-relaxed text-muted-foreground">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

const cardFadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay: 0.7,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 1,
  },
};

const page = () => {
  const [loaded, setLoaded] = useState(false);
  const [payMethod, setPayMethod] = useState("zelle");
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-[5%] relative overflow-hidden text-center">
        <div className="relative max-w-180 mx-auto">
          {/* Badge */}
          <Badge title="Lifetime Membership — Only $15" />
          <TitleDescription
            header="Join the"
            title="Club"
            description={`Learn the skills needed to become a Project Manager. Unlock lifetime
            access to workshops, mentorship, and a thriving community of future
            PM leaders.`}
            descriptionClassName=" mb-12"
          />

          {/* Price Card */}
          <div className="inline-block w-full max-w-120">
            <motion.div
              {...cardFadeUp}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              className="relative overflow-hidden rounded-[2rem] border border-green-900 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.4),0_0_40px_rgba(45,106,79,0.2)]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(27,67,50,0.9), rgba(13,43,29,0.95))",
              }}
            >
              {loaded && (
                <motion.div
                  className="absolute inset-0"
                  animate={floatAnimation}
                />
              )}

              {/* Shimmer */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                <motion.div
                  className="absolute left-0 top-0 h-full w-[40%] bg-linear-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent"
                  initial={{ x: "-120%" }}
                  animate={{ x: "260%" }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>

              {/* Best Value badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute right-6 top-0 rounded-b-lg bg-[#d4a017] px-3.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-black"
              >
                🏆 Best Value
              </motion.div>

              <div className="relative text-left">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={
                    loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                  }
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mb-5 font-mono text-[0.65rem] uppercase tracking-widest text-[rgba(82,183,136,0.7)]"
                >
                  Lifetime Membership Includes:
                </motion.p>

                <div className="mb-8 flex flex-col gap-3">
                  {PERKS.slice(0, 5).map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={
                        loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }
                      }
                      transition={{
                        duration: 0.45,
                        delay: 1 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(82,183,136,0.4)] bg-[rgba(82,183,136,0.2)]">
                        <span className="text-[0.65rem] font-bold text-green-600">
                          ✓
                        </span>
                      </div>
                      <span className="text-[0.9rem] font-medium text-[rgba(255,255,255,0.85)]">
                        {p.title}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.55, delay: 1.35 }}
                  className="flex items-end justify-between border-t border-[rgba(82,183,136,0.15)] pt-6"
                >
                  <div>
                    <p className="mb-1 font-mono text-[0.8rem] tracking-[0.08em] text-[rgba(255,255,255,0.4)]">
                      Join the club for
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-[4rem] font-black leading-none text-green-600">
                        $15
                      </span>
                      <span className="text-[0.85rem] text-[rgba(255,255,255,0.4)]">
                        / lifetime
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10 px-[5%]">
        <div className=" mx-auto grid md:grid-cols-4 grid-cols-2 gap-8 text-center">
          {MEMBER_STATS.map((s, i) => (
            <div key={i}>
              <div className="font-serif font-black text-[clamp(2rem,3.5vw,3rem)] text-green-600 leading-none mb-1.5">
                <AnimatedCounter target={s.value} />
              </div>
              <div className="font-mono text-[0.65rem] text-muted-foreground uppercase tracking-[0.12em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-10 px-[5%] w-full flex flex-col gap-14 justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-green-600 mb-3">
              <span className="w-8 h-px bg-green-600 inline-block" />
              What you get
              <span className="w-8 h-px bg-green-600 inline-block" />
            </div>
            <h2 className="font-serif font-black text-[clamp(2rem,4vw,3rem)] leading-tight">
              Everything Included in
              <br />
              <span className="text-green-600">Your $15 Membership</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PERKS.map((p, i) => (
              <FeatureCard
                key={i}
                title={p.title}
                desc={p.desc}
                icon={p.icon}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO JOIN ── */}
      <section className="py-10 px-[5%] bg-[rgba(255,255,255,0.015)] border-t border-[rgba(255,255,255,0.06)] space-y-5">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Steps */}
          <div>
            <div className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-green-600 mb-3">
              <span className="w-8 h-px bg-green-600" />
              How to Pay
            </div>
            <h2 className="font-serif font-black text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mb-10">
              Four Simple
              <br />
              <span className="text-green-600">Steps to Join</span>
            </h2>
            <div className="flex flex-col gap-8">
              {STEPS.map((s, i) => (
                <StepCard key={i} step={s} index={i} />
              ))}
            </div>
          </div>

          {/* Payment Panel */}
          <div>
            <div className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-green-600">
              <span className="w-8 h-px bg-green-600" />
              Payment Method
            </div>
            <h2 className="font-serif font-black text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mb- flex items-center gap-1 ">
              Pay via{" "}
              <Image src="/zelle.svg" alt="Zelle" width={110} height={110} />
            </h2>

            <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-2">
              {/* QR */}
              <div className=" rounded-xl p-6 mb-6 flex flex-col items-center gap-3">
                <div className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted-foreground text-center">
                  Project Management Club
                </div>
                <div className="font-mono text-xs text-muted-foreground text-center">
                  utdpmc@gmail.com
                </div>
                <Image
                  src="/zelleqr.png"
                  alt="Zelle"
                  width={250}
                  height={250}
                  className="shadow-2xl"
                />

                <p className="mt-5 font-mono text-[0.78rem] text- leading-relaxed">
                  Scan the QR code in your banking app.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {/* CTA */}
          <Link
            href={
              "https://docs.google.com/forms/d/14cbB8zqRgakJkAw0F1vpbikRU3f5sFPpbE4Yf8nw7x8/viewform?edit_requested=true"
            }
            target="_blank"
          >
            <Button className="border border-purple-800 bg-purple-800 px-16 py-7 hover:bg-purple-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-purple-900/30">
              Fill the Membership Form →
            </Button>
          </Link>
          <p className="mt-4 font-mono text-[0.78rem] text-muted-foreground text-center">
            Confirmation within 3 days • Questions? WhatsApp us
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
