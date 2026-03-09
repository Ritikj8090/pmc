"use client";

import Badge from "@/components/Badge";
import TitleDescription from "@/components/TitleDescription";
import Link from "next/dist/client/link";
import {
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FAQs, QuickInfoData, socialMediaList } from "@/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <div className="min-h-screen space-y-10 py-10 w-full">
      <section className="relative overflow-hidden px-[5%] py-10 text-center h-[calc(100vh-164px)] flex flex-col items-center justify-center">
        <Badge title="Get In Touch" />
        <TitleDescription
          header="Let's"
          title="Connect"
          description={`Questions about membership, events, or partnering with PMC? Reach out
        through any channel or send us a message directly.`}
        />
      </section>
      {/* Info Cards Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-bold text-2xl mb-2">Quick Info</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {QuickInfoData.map((info) => (
              <Card className=" relative group" key={info.label}>
                <CardHeader>
                  <div className="p-2.5 rounded-lg bg-muted w-fit ">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <CardDescription className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    {info.label}
                  </CardDescription>
                  <CardTitle className=" text-xl">{info.value} </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Find us on</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {socialMediaList.map((item) => (
              <Link href={item.href} target="_blank" rel="noopener noreferrer" key={item.name}>
                <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:bg-secondary/50 transition-all duration-300 p-6 cursor-pointer">
                  {/* Gradient background effect on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-3 rounded-lg ${item.accentColor} transition-all duration-300 group-hover:scale-110`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className=" font-semibold text-foreground transition">
                        {item.description}
                      </p>
                    </div>

                    <div className="ml-4 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-green-600 to-transparent group-hover:w-full transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
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
