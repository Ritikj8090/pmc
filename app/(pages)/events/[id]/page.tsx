"use client";
import { EVENT_DETAILS } from "@/constant";
import { div } from "framer-motion/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const id = params.id;
  const event = EVENT_DETAILS.find((event) => event.id === id);
  if (!event) {
    return (
      <section className="w-full px-[5%] min-h-screen py-20 flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">Event Not Found</h1>
        <p className="text-muted-foreground">
          The event you are looking for does not exist.
        </p>
      </section>
    );
  }
  return (
    <section className="w-full px-[5%] min-h-screen py-20 flex flex-col items-center justify-start gap-6">
      <div className=" space-y-3 text-center">
        <h1 className="text-3xl font-extrabold">THE PROJECT MANAGEMENT CLUB</h1>
        <h1 className="text-muted-foreground">Presents</h1>
        <h1 className="text-2xl font-bold">{event.title}</h1>
        <h1 className="text-muted-foreground text-sm">
          Finished on {event.date}
        </h1>
      </div>
      <Image
        src={event.images[0]}
        alt={event.title}
        width={700}
        height={500}
        className="rounded-lg"
      />
      <p className="max-w-3xl text-lg space-y-5 text-center">{event.description}</p>
      <div className="grid max-w-3xl grid-cols-2 gap-4">
        {event.images.slice(1).map((image, index) => (
          <div key={index} className="md:w-90 md:h-80 w-40 h-50 relative">
            <Image
              src={image}
              alt={event.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
