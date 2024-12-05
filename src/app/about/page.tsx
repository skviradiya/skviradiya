"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { AnimatedBackground } from "@/components/animated-background";
import { Nav } from "@/components/nav";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "React Native",
  "TypeScript",
  "JavaScript",
  "Redux",
  "REST APIs",
  "Adobe Analytics",
  "Clever Tap",
  "CI/CD",
  "Git",
  "Xcode",
  "Android Studio",
  "VAPT handling",
  "QR scanning",
  "OCR packages",
  "Flavours for different env",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Nav />
      <main className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="grid gap-8">
            <div className="w-full">
              <motion.h1
                className="text-4xl font-bold text-green-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                About Me
              </motion.h1>
              <motion.p
                className="mt-4 text-white/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                React Native Developer with 3+ years of experience in
                developing, testing, and deploying high-quality mobile
                applications. Proficient in React Native, JavaScript, and Redux,
                with a strong understanding of both iOS and Android platforms.
                I'm passionate about creating efficient, scalable, and
                user-friendly mobile applications.
              </motion.p>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl font-semibold text-green-500">
                  Skills
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-500"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <h2 className="text-2xl font-semibold text-green-500">
                  Experience
                </h2>
                <Card className="mt-4 border-white/10 bg-black/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-500">
                      Eastern Techno Solutions | React Native Developer
                    </h3>
                    <p className="text-sm text-white/60">Oct 2023 - Nov 2024</p>
                    <ul className="mt-2 list-inside list-disc space-y-2 text-white/60">
                      <li>
                        Worked on Birla Opus ID app, an Aditya Birla Group
                        project
                      </li>
                      <li>
                        Implemented Adobe Analytics and Clever Tap integrations
                      </li>
                      <li>Handled VAPT and integrated various OCR solutions</li>
                      <li>
                        Developed features using TypeScript and implemented
                        CI/CD pipelines
                      </li>
                      <li>
                        Created multiple environment configurations using
                        flavors
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="mt-4 border-white/10 bg-black/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-500">
                      Weapplinse Technology | React Native Developer
                    </h3>
                    <p className="text-sm text-white/60">Dec 2021 - Sep 2023</p>
                    <ul className="mt-2 list-inside list-disc space-y-2 text-white/60">
                      <li>
                        Developed and maintained multiple React Native
                        applications
                      </li>
                      <li>
                        Collaborated with senior developers on project planning
                        and execution
                      </li>
                      <li>
                        Contributed to UI design and coding for various projects
                      </li>
                      <li>
                        Implemented RESTful APIs and state management using
                        Redux
                      </li>
                      <li>Worked on performance optimization and bug fixing</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <h2 className="text-2xl font-semibold text-green-500">
                  Education
                </h2>
                <Card className="mt-4 border-white/10 bg-black/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-500">
                      G.S.H.S.E.B
                    </h3>
                    <p className="text-sm text-white/60">Graduated Mar, 2019</p>
                    <p className="mt-2 text-white/60">
                      Achieved 72.71% in G.S.H.S.E.B
                    </p>
                  </CardContent>
                </Card>
                <Card className="mt-4 border-white/10 bg-black/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-500">
                      SHREE BHAGAWATI VIDHYALAYA - SURAT
                    </h3>
                    <p className="text-sm text-white/60">Graduated Mar, 2017</p>
                    <p className="mt-2 text-white/60">
                      Achieved 61.33% in G.S.E.B
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
