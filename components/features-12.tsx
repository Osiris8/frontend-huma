"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bot, GraduationCap, Stethoscope, TreeDeciduous } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";
import general_assistant_agent from "@/public/general-assistant-agent.png";
import tutor_assistant_agent from "@/public/tutor-agent.png";
import health_assistant_agent from "@/public/health-agent.png";
import agriculture_agent from "@/public/agriculture-agent.png";
export default function Features() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: general_assistant_agent,
      alt: "General Assistant",
    },
    "item-2": {
      image: tutor_assistant_agent,
      alt: "Tutor assistant",
    },
    "item-3": {
      image: health_assistant_agent,
      alt: "Health assistant",
    },
    "item-4": {
      image: agriculture_agent,
      alt: "Agriculture assistant",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32" id="features">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Discover Your AI Agents
          </h2>
          <p>
            Each agent is designed with a unique expertise from learning and
            health to agriculture and everyday support so you always have the
            right companion at your side
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Bot className="size-4" />
                  General Assistant
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Your Everyday AI Helper. A versatile AI assistant like ChatGPT.
                Ready to answer any type of question from science to culture to
                daily life with clarity, precision, and multilingual support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <GraduationCap className="size-4" />
                  Tutor AI
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Your Interactive Study Partner. An AI tutor that explains
                concepts step by step, adapts to your level, provides examples,
                exercises, and feedback. Just like having a personal teacher by
                your side.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Stethoscope className="size-4" />
                  Health AI
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Your Smart Health Companion. An AI medical assistant for both
                patients and professionals. It explains symptoms, prevention,
                and treatments in clear language, asks clarifying questions, and
                provides safe, evidence-based recommendations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <TreeDeciduous className="size-4" />
                  Agriculture AI
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Your Agronomy Expert. An AI agriculture assistant designed for
                farmers and agronomy professionals. It gives guidance on crops,
                soil management, irrigation, and sustainable farming practices,
                helping you grow smarter and healthier harvests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            {/*  <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>*/}
            <div className="aspect-1/1 object-cover  bg-background relative w-full rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
