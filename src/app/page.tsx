"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";

const technologies = [
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux",
  "RESTful APIs",
  "Adobe Analytics",
  "Clever Tap",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Nav />
      <main className="container mx-auto px-4 pt-32">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl  sm:text-6xl">
                <span className="text-green-500">Hello, I'm</span>
                <br />
                Shravan Viradiya
              </h1>
              <p className="mt-6 text-xl text-white/60">
                React Native Developer with 3+ years of experience in
                developing, testing, and deploying high-quality mobile
                applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Link href="/projects">
                  <Button className="group">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-green-500">
                <Image
                  src={`${process.env.basePath}/profile.jpg`}
                  alt="Shravan Viradiya"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
