"use client";

import Badge from "@/components/Badge";
import TitleDescription from "@/components/TitleDescription";
import { Button } from "@/components/ui/button";
import { TEAM } from "@/constant";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  },
});

function SectionDivider({ label }: { label: string }) {
  return (
    <motion.div {...fadeUp(0)} className="my-10 flex items-center gap-5">
      <div className="h-px flex-1 bg-linear-to-r from-transparent to-[rgba(82,183,136,0.3)]" />
      <span className="whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(82,183,136,0.8)]">
        {label}
      </span>
      <div className="h-px flex-1 bg-linear-to-r from-[rgba(82,183,136,0.3)] to-transparent" />
    </motion.div>
  );
}

export default function TeamSection() {
  const leadership = TEAM.filter((m) => m.tier === 1);
  const officers = TEAM.filter((m) => m.tier === 2);
  const media = TEAM.filter((m) => m.tier === 3);

  return (
    <div className="min-h-screen space-y-10 py-10">
      <section className="relative overflow-hidden px-[5%] md:py-10 text-center h-[calc(100vh-164px)] flex flex-col items-center justify-center">
        <Badge title="Project Management Club At UTD" />
        <TitleDescription
          header="Meet the"
          title="Team"
          description={`Meet our wonderful faculty advisor and officers powering PMC UT Dallas —
        passionate leaders igniting the future of project management.`}
        />
      </section>

      <div className="mx-auto px-[5%] md:pb-10">
        <SectionDivider label="Faculty Advisor" />
        {/* <FacultyCard /> */}
        <Image
          src="/kennedyd.png"
          alt="Faculty Advisor"
          width={320}
          height={320}
          className="mx-auto rounded-3xl border object-cover md:w-auto w-40"
        />

        <SectionDivider label="Executive Leadership" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member, index) => (
            // <MemberCard key={member.name} member={member} index={index} />
            <Image
              key={member.name}
              src={member.poster}
              alt={member.name}
              width={320}
              height={320}
              className="mx-auto rounded-3xl border object-cover md:w-auto w-40"
            />
          ))}
        </div>

        <SectionDivider label="Officers" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((member, index) => (
            // <MemberCard key={member.name} member={member} index={index} />
            <Image
              key={member.name}
              src={member.poster}
              alt={member.name}
              width={320}
              height={320}
              className="mx-auto rounded-3xl border object-cover md:w-auto w-40"
            />
          ))}
        </div>

        <SectionDivider label="Social Media & Web" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {media.map((member, index) => (
            // <MemberCard key={member.name} member={member} index={index} />
            <Image
              key={member.name}
              src={member.poster}
              alt={member.name}
              width={320}
              height={320}
              className="mx-auto rounded-3xl border object-cover md:w-auto w-40"
            />
          ))}
        </div>

        <motion.div
          {...fadeUp(0.1)}
          className="relative mt-20 overflow-hidden px-8 md:py-16 text-center"
        >
          <div className="relative mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-green-600">
            — Join Us —
          </div>

          <h2 className="relative mb-4 text-[clamp(2rem,4vw,3rem)] font-black">
            Want to Be Part of{" "}
            <span className="text-green-600">This Team?</span>
          </h2>

          <p className="relative mx-auto mb-10 max-w-150 text-base leading-[1.75] text-muted-foreground">
            Join 450+ members and grow your career in project management with
            mentors from top global companies.
          </p>

          <Link href="/membership">
            <Button className="border border-green-800 bg-green-800 px-6 py-7 hover:bg-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30">
              Join the Club →
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
