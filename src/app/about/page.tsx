"use client";

import { motion } from "framer-motion";

import { Nav } from "@/components/nav";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "React.js",
  "React Native",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "GraphQL",
  "Firebase",
  "REST APIs",
  "Adobe Analytics",
  "Clever Tap",
  "CI/CD",
  "Git",
  "Xcode",
  "Android Studio",
  "Role-Based Access Control",
  "Performance Optimization",
  "QR Scanning & OCR",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="container mx-auto px-4 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-6xl p-4"
        >
          <div className="grid gap-12">
            {/* Header */}
            <div className="relative flex flex-col-reverse md:flex-row items-center justify-between py-12 gap-8">
              <div className="max-w-2xl z-10">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  About Me
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Experienced Software Developer with 4+ years building
                  innovative web, iOS, and Android applications using
                  TypeScript, React.js, Next.js, React Native, Redux, and
                  GraphQL. Skilled in delivering secure, high-performance
                  solutions with clean code and intuitive UI/UX design.
                  Successfully engineered and launched AI-powered products with
                  advanced features like RBAC, performance optimization, and QR
                  scanning.
                </motion.p>
              </div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 border-t border-white/10"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] mb-8">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-950/30 hover:bg-cyan-900/40 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-sm transition-all duration-300 text-center"
                  >
                    <span className="text-cyan-300 font-medium text-sm drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-8 border-t border-white/10"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] mb-8">
                Work Experience
              </h2>

              {/* SDE 2 - Logicbric */}
              <Card className="mb-6 border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-cyan-400 mb-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                        Logicbric
                      </h3>
                      <p className="text-sm text-white/60">
                        SDE 2 (Mar 2025 - Apr 2026)
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-white/70">
                    <li>
                      Spearheaded frontend architecture and end-to-end
                      development of multiple scalable applications using
                      React.js, Next.js, and React Native
                    </li>
                    <li>
                      Designed and integrated efficient GraphQL queries to
                      optimize data fetching and state management across web and
                      mobile platforms
                    </li>
                    <li>
                      Collaborated with stakeholders to translate complex
                      business requirements into robust technical solutions
                    </li>
                    <li>
                      Implemented advanced security features like Role-Based
                      Access Control (RBAC) with strict UK legal compliance
                    </li>
                    <li>
                      Mentored junior developers, conducted code reviews, and
                      enforced best practices for clean code and performance
                      optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* React Native Developer - Eastern Techno Solutions */}
              <Card className="mb-6 border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-cyan-400 mb-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                        Eastern Techno Solutions
                      </h3>
                      <p className="text-sm text-white/60">
                        React Native Developer (Oct 2023 - Nov 2024)
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-white/70">
                    <li>
                      Enhanced app performance, reducing load time by 30% across
                      platforms
                    </li>
                    <li>
                      Conducted R&D on emerging technologies, integrating 2+
                      innovative solutions
                    </li>
                    <li>Coordinated with vendors, reducing downtime by 25%</li>
                    <li>
                      Managed testing, debugging, and code reviews to maintain
                      quality standards
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* React Native Developer - Weapplinse Technology */}
              <Card className="border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-cyan-400 mb-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                        Weapplinse Technology
                      </h3>
                      <p className="text-sm text-white/60">
                        React Native Developer (Dec 2021 - Sep 2023)
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-white/70">
                    <li>
                      Collected requirements and facilitated feature
                      discussions, reducing delivery delays by 15%
                    </li>
                    <li>
                      Built app modules and optimized performance, improving app
                      efficiency by 35%
                    </li>
                    <li>
                      Identified and implemented advanced mobile solutions,
                      increasing user engagement by 20%
                    </li>
                    <li>
                      Led API discussions with 90% accuracy in time estimations
                      and zero major discrepancies
                    </li>
                    <li>
                      Managed documentation and team coordination, improving
                      team productivity by 25%
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-8 border-t border-white/10"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] mb-8">
                Education
              </h2>

              <Card className="mb-6 border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-cyan-400 mb-2 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-white/70 mb-1">
                    C.U Shah Institute of Computer Application - Gujarat
                    University
                  </p>
                  <p className="text-sm text-white/60">2019 - 2020</p>
                </CardContent>
              </Card>

              <Card className="border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-bold text-lg text-cyan-400 mb-2 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                    G.S.H.S.E.B (Higher Secondary) - 72.71%
                  </h3>
                  <p className="text-white/70 mb-1">
                    Shree Bhagawati Vidhyalaya - Surat
                  </p>
                  <p className="text-sm text-white/60">2019</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
