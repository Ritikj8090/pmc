"use client";
import Badge from "@/components/Badge";
import TitleDescription from "@/components/TitleDescription";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge as BadgeUI } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiWarning } from "react-icons/ci";
import { BUDDIES, STORIES } from "@/constant";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const childFade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
};

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
      href="#"
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

const page = () => {
  return (
    <div className="min-h-screen space-y-10 py-10">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-[5%] py-16 text-center md:py-20">
        <Badge title="Spring 2024 · PMC Flagship Initiative" className="text-[9px]" />
        <TitleDescription
          header="Student "
          title="Success"
          description={`Empowering tomorrow's Project Management leaders through world-class mentorship, real-world skill building, and a community that propels your career forward.`}
          children={
            <motion.span variants={childFade} className="">
              Program
            </motion.span>
          }
        />
      </section>
      <section className="px-[5%]">
        <h1 className="md:text-3xl text-2xl font-bold mb-4">What is this?</h1>
        <h2 className=" font-semibold text-green-600">
          Your Pathway to PM Excellence
        </h2>
        <p className=" text-muted-foreground">
          Welcome, aspiring Project Managers! The Student Success Program is
          PMC's flagship initiative, designed to enhance your resume, master
          crucial interview skills, and ultimately excel in the field of project
          management. Whether you're a newcomer to the discipline or seeking to
          fine-tune your expertise, this program is tailored to meet your needs
          and propel you towards success — at no cost to members.
        </p>
      </section>
      <section className=" text-center flex items-center justify-center flex-col mpy-10 px-[5%]">
        <div className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-green-600 mb-3">
          <span className="w-8 h-px bg-green-600" />
          What to Expect
          <span className="w-8 h-px bg-green-600" />
        </div>
        <h2 className="font-serif font-black text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mb-10">
          Two Phases to <span className="text-green-600">Success</span>
        </h2>
        <div className=" w-full space-y-5">
          <Card className=" w-full text-start hover:scale-102 ease-in-out duration-300">
            <CardHeader>
              <BadgeUI className=" font-mono uppercase" variant={"outline"}>
                Phase 01
              </BadgeUI>
              <CardTitle>Mentorship from Buddies</CardTitle>
              <CardDescription>
                Upon joining, you'll be paired with experienced UTD graduate
                students who have successfully completed their Project
                Management internships. These buddies will serve as your guides,
                offering personalized assistance in crafting professional
                resumes and navigating challenging interview questions. Benefit
                from their insights and expertise to stand out in today's
                competitive job market.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className=" w-full text-start hover:scale-102 ease-in-out duration-300">
            <CardHeader>
              <BadgeUI className=" font-mono uppercase" variant={"outline"}>
                Phase 02
              </BadgeUI>
              <CardTitle>Guidance from PMI Dallas Mentors</CardTitle>
              <CardDescription>
                In the phase 2, you'll have the invaluable opportunity to
                connect with mentors from PMI Dallas, industry professionals
                eager to share their knowledge and support your career growth.
                Your assigned mentor will conduct two personalized sessions,
                including a comprehensive resume review and a mock interview
                session coupled with career guidance. Gain invaluable insights,
                refine your skills, and build confidence as you prepare to
                embark on your project management journey.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <section className=" text-center flex items-center justify-center flex-col md:py-10 px-[5%]">
        <div className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-green-600 mb-3">
          <span className="w-8 h-px bg-green-600" />
          Spring 2024 Cohort
          <span className="w-8 h-px bg-green-600" />
        </div>
        <h2 className="font-serif font-black text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mb-10">
          Meet Your <span className="text-green-600">Buddies</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Buddy cards will be rendered here */}
          {BUDDIES.map((buddy) => (
            <Image
              key={buddy.image}
              src={buddy.image}
              alt={buddy.name}
              width={250}
              height={250}
              className="md:mx-auto rounded-3xl border object-cover w-45"
            />
          ))}
        </div>
      </section>
      <section className="px-[5%]">
        <h1 className="md:text-3xl text-2xl font-bold mb-4 flex items-center gap-2">
          <CiWarning className=" text-yellow-600 fill-amber-500" /> Limited
          Seats Available
        </h1>
        <p className=" text-muted-foreground">
          Please note that the Student Success Program has limited seats
          available. We encourage early registration to secure your spot. The
          program runs every semester, facilitated by PMC — don't miss your
          chance to propel your PM career forward.
        </p>
      </section>
      <section className=" text-center flex items-center justify-center flex-col md:py-10 px-[5%]">
        <div className="flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-green-600 mb-3">
          <span className="w-8 h-px bg-green-600" />
          Our People
          <span className="w-8 h-px bg-green-600" />
        </div>
        <h2 className="font-serif font-black text-[clamp(1.8rem,3vw,2.5rem)] leading-tight mb-10">
          Success <span className="text-green-600">Stories</span>
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mx-auto">
          {STORIES.map((s, i) => (
            <StoryCard key={s.name} s={s} delay={i * 0.1} />
          ))}
        </div>
      </section>
      <section
        className="md:py-32 py-5 px-[5%] text-center relative overflow-hidden"
        id="join"
      >
        <h2 className="relative font-serif font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6">
          Stay {" "}
          <span className="text-green-600">Connected</span>
        </h2>
        <p className="relative text-muted-foreground max-w-200 mx-auto mb-12 leading-[1.75] text-[1.05rem]">
          Stay updated on the latest news, events, and opportunities from the
          Project Management Club at UTD by following us on social media and
          joining our mailing list.
          <br />
          Your journey to project management excellence begins here! 🌟
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
  );
};

export default page;
