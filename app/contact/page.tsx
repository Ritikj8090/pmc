"use client";

import Badge from "@/components/Badge";
import TitleDescription from "@/components/TitleDescription";
import Image from "next/image";
import Link from "next/link";
import { FAQs, socialMediaList } from "@/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const socialIcons: Record<string, string> = {
  Instagram: "/Icons/icons8-instagram-50.png",
  LinkedIn: "/Icons/icons8-linkedin-50.png",
  Facebook: "/Icons/icons8-facebook-50.png",
  YouTube: "/Icons/icons8-youtube-50.png",
  Whatsapp: "/Icons/icons8-whatsapp-50.png",
  Discord: "/Icons/icons8-discord-50.png",
};

const page = () => {
  const socialIconLinks = socialMediaList.filter((item) => socialIcons[item.name]);

  return (
    <div className="min-h-screen space-y-10 py-10 w-full">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-[5%] py-16 text-center md:py-20">
        <Badge title="Get In Touch" />
        <TitleDescription
          header="Let's"
          title="Connect"
          description={`Questions about membership, events, or partnering with PMC? Reach out
        through any channel or send us a message directly.`}
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {socialIconLinks.map((item) => (
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
                aria-label={item.name}
                className="group inline-flex items-center justify-center rounded-2xl bg-white/55 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-md"
              >
                <Image
                  src={socialIcons[item.name]}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
                />
              </Link>
            ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-[5%]">
        <div className="">
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {FAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={index.toString()}
                  className=" border rounded-lg px-3 py-2 bg-card"
                >
                  <AccordionTrigger className=" capitalize font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
