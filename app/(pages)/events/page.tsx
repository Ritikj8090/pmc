"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Badge from "@/components/Badge";
import TitleDescription from "@/components/TitleDescription";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PAST, TAG_COLORS, UPCOMING } from "@/constant";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  },
});

function SectionLabel({
  children,
  bright = false,
}: {
  children: string;
  bright?: boolean;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      {bright && (
        <div className="h-2 w-2 animate-pulse rounded-full bg-green-600" />
      )}
      <span
        className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] ${
          bright ? "text-green-600" : "text-white/50"
        }`}
      >
        {children}
      </span>
      <div
        className={`h-px flex-1 ${
          bright
            ? "bg-linear-to-r from-[rgba(82,183,136,0.3)] to-transparent"
            : "bg-linear-to-r from-white/10 to-transparent"
        }`}
      />
    </div>
  );
}

function EventCard({
  event,
  index,
  layout = "list",
}: {
  event: EventItem;
  index: number;
  layout?: "list" | "grid";
}) {
  const tagColor = TAG_COLORS[event.tag] || "#52b788";
  const delay = (index % 5) * 0.07;

  if (layout === "grid") {
    return (
      <motion.div
        {...fadeUp(delay)}
        whileHover={{ y: -6 }}
        className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-green-900/30 p-7 transition-colors duration-300 hover:border-green-900/10 hover:bg-green-900/10"
      >
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-transparent to-transparent",
            tagColor.via,
          )}
        />

        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "rounded-sm border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest",
              tagColor.tag,
            )}
          >
            {event.tag}
          </span>
          <span className="text-[1.8rem]">{event.icon}</span>
        </div>

        <div>
          <h3 className="mb-1 text-[1rem] font-bold leading-[1.3]">
            {event.title}
          </h3>
          <div className="font-mono text-[0.65rem] tracking-[0.06em] text-muted-foreground">
            {event.date}
          </div>
        </div>

        <p className="grow text-[0.82rem] leading-[1.65]">
          {event.description.slice(0, 120)}…
        </p>

        {event.hasButton && (
          <button
            className="mt-auto self-start rounded-md border px-4 py-2 text-[0.78rem] font-semibold tracking-[0.05em] transition-colors duration-300"
            style={{
              color: tagColor.color,
              borderColor: `${tagColor.color}`,
              backgroundColor: "transparent",
            }}
          >
            View Event →
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{ x: 4 }}
      className="group relative flex md:flex-row flex-col gap-6 overflow-hidden rounded-2xl border border-green-900/20 px-8 py-7 transition-colors duration-300 hover:bg-green-900/10"
    >
      <div
        className={cn(
          "absolute bottom-0 left-0 top-0 w-0.75 rounded-l-2xl transition-opacity duration-300 group-hover:opacity-90",
          tagColor.color,
        )}
      />

      <Image
        src={"/Convergence_360.png"}
        alt={event.title}
        width={100}
        height={100}
        className="md:h-40 md:w-30 w-auto rounded-xl object-cover"
      />

      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <div className=" flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "rounded-sm border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest",
                tagColor.tag,
              )}
            >
              {event.tag}
            </span>
            <span className="font-mono text-[0.65rem] tracking-[0.05em] text-muted-foreground">
              {event.date}
            </span>
          </div>
          <div>
            {event.hasButton && (
              <Link href={`/events${event.buttonLink}` || "/events"} target="_blank">
                <Button
                  variant={"outline"}
                  className=" cursor-pointer bg-transparent hover:bg-green-900/10 border-green-900/30 text-green-900 hover:text-green-900 transition-colors duration-300"
                >
                  View the Event →
                </Button>
              </Link>
            )}
          </div>
        </div>

        <h3 className="mb-2 text-[1.05rem] font-bold leading-[1.3]">
          {event.title}
        </h3>

        <p className="text-[0.85rem] leading-[1.7] text-muted-foreground">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

function UpcomingCard({ event }: { event: EventItem }) {
  return (
    <motion.div
      {...fadeUp(0.1)}
      className="flex md:flex-row flex-col gap-6 rounded-2xl border border-green-900/20 px-8 py-7"
    >
      <div className="text-[2rem]">{event.icon}</div>

      <div>
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "rounded-sm border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest",
              TAG_COLORS[event.tag]?.tag || TAG_COLORS.All.tag,
            )}
          >
            {event.tag}
          </span>
          <span className="font-mono text-[0.65rem] text-muted-foreground">
            {event.date}
          </span>
        </div>

        <h3 className="mb-2 text-[1.1rem] font-bold">{event.title}</h3>

        <p className="text-[0.87rem] leading-[1.7] text-muted-foreground">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function EventsSection() {
  const [view, setView] = useState<"list" | "grid">("list");
  const [filter, setFilter] = useState("All");

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(PAST.map((e) => e.tag)))],
    [],
  );

  const filtered = useMemo(
    () => (filter === "All" ? PAST : PAST.filter((e) => e.tag === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen w-full space-y-10">
      <section className="relative overflow-hidden px-[5%] md:py-10 text-center min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
        <Badge title="Knowledge Sessions & Workshops" />
        <TitleDescription
          header="Our"
          title="Events"
          description={`Explore workshops, speaker sessions, bootcamps, and networking events
        designed to accelerate your PM career.`}
        />
        <motion.div
          {...fadeUp(0.6)}
          className="relative mt-20 flex flex-wrap justify-center gap-12"
        >
          {[
            ["65+", "Events Organized"],
            ["32", "Industry Mentors"],
            ["98.4%", "4–5★ Feedback"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-black leading-none text-green-600">
                {value}
              </div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <main className="mx-auto px-[5%] md:py-10">
        {/* UPCOMING */}
        <section className="mb-16">
          <SectionLabel bright>Upcoming Events</SectionLabel>
          {UPCOMING.map((event) => (
            <UpcomingCard key={event.id} event={event} />
          ))}
        </section>

        {/* PAST EVENTS */}
        <section>
          <SectionLabel bright>Past Events</SectionLabel>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const styles = TAG_COLORS[tag] || TAG_COLORS.All;

                return (
                  <div
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`cursor-pointer rounded-full border px-4 py-1.5 text-[0.8rem] font-medium tracking-[0.03em] transition-all duration-200 ${
                      filter === tag ? styles.active : styles.inactive
                    }`}
                  >
                    {tag}
                  </div>
                );
              })}
            </div>

            {/* <div className="flex gap-2">
              {[
                ["list", "≡"],
                ["grid", "⊞"],
              ].map(([mode, icon]) => {
                const active = view === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => setView(mode as "list" | "grid")}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-md border text-base transition-all duration-200",
                      active &&
                        " bg-green-900/20 text-green-500 border-green-900/50",
                    )}
                  >
                    {icon}
                  </button>
                );
              })}
            </div> */}
          </div>

          {view === "list" ? (
            <div className="flex flex-col gap-4">
              {filtered.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  layout="list"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  layout="grid"
                />
              ))}
            </div>
          )}
        </section>

        <motion.div
          {...fadeUp(0.1)}
          className="relative mt-20 overflow-hidden rounded-3xl px-8 md:py-16 text-center"
        >
          <div className="relative mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-green-600">
            — Stay Connected —
          </div>

          <h2 className="relative mb-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-black ">
            Never Miss an Event
          </h2>

          <p className="relative mx-auto mb-10 max-w-150 text-[0.95rem] leading-[1.75] text-muted-foreground">
            Join PMC at UTD and get first access to workshops, speaker sessions,
            and exclusive networking events.
          </p>

          <motion.div
            {...fadeUp(0.9)}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Link href="/membership">
              <Button className="border border-green-800 bg-green-800 md:px-6 px-2 md:py-7 py-5 hover:bg-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30">
                Join the Club →
              </Button>
            </Link>
            <Link href="/events">
              <Button
                variant={"outline"}
                className="border md:px-6 px-2 md:py-7 py-5 border-green-900 hover:text-green-900 cursor-pointer hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-green-900/30"
              >
                Explore Events
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
