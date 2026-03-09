"use client";
import { ARTICLES } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const id = params.id;
  const article = ARTICLES.find((article) => article.id === id);
  if (!article) {
    return (
      <section className="w-full px-[5%] min-h-screen py-20 flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <p className="text-muted-foreground">
          The article you are looking for does not exist.
        </p>
      </section>
    );
  }
  return (
    <section className="w-full px-[5%] min-h-screen py-20 flex flex-col items-center justify-start gap-6">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <Image
        src={article.image}
        alt={article.title}
        width={700}
        height={500}
        className="rounded-lg"
      />
      <p className="max-w-3xl text-lg space-y-5">{article.description}</p>
      <Link
        href={article.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-3xl text-blue-600 font-semibold underline text-start w-full"
      >
        Check out {article.title.split("-")[0]}'s Linkedin
      </Link>
    </section>
  );
};

export default page;
