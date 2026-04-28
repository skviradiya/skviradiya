"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Code2, Users } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { ParticleMorph } from "@/components/particle-morph";

const technologies = [
  "React.js",
  "React Native",
  "Next.js",
  "TypeScript",
  "GraphQL",
  "Redux",
  "Firebase",
  "Performance Optimization",
];

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Completed", value: "15+" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      {/* Hero Section */}
      <main
        ref={heroRef}
        className="container mx-auto px-4 pt-20 pb-20 relative overflow-hidden"
      >
        <div className="mx-auto max-w-6xl">
          {/* Hero Grid */}
          <div className="relative flex flex-col-reverse md:flex-row items-center justify-between py-20 min-h-[80vh] gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl z-10"
              style={{ opacity: heroOpacity, filter: heroBlur }}
            >
              <motion.div style={{ y: textY, opacity: textOpacity }}>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-cyan-400 uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    Shravan Viradiya
                  </span>
                  <br />
                  <span className="text-white">
                    Software Development Engineer
                  </span>
                </h1>
                <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
                  Building innovative web and mobile applications with modern
                  technologies. 4+ years of experience in React.js, React
                  Native, Next.js, and GraphQL.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-12 max-w-md">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="/projects">
                    <Button className="group text-base px-8 py-6">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="text-base px-8 py-6">
                      Get In Touch
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Canvas Particle Morph Animation Background */}
            <ParticleMorph />
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                Technical Expertise
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg border border-cyan-500/30 bg-cyan-950/30 hover:bg-cyan-900/40 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-sm transition-all duration-300 text-center"
                >
                  <span className="text-cyan-300 font-medium text-sm drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Web Development",
                description:
                  "Building responsive, performant web applications with React.js and Next.js",
              },
              {
                icon: Briefcase,
                title: "Mobile Apps",
                description:
                  "Creating feature-rich iOS and Android applications using React Native",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Mentoring junior developers and ensuring code quality through best practices",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-cyan-900/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.1)]"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-white/70 mb-8 text-lg">
              Let's discuss how I can help bring your vision to life.
            </p>
            <Link href="/contact">
              <Button className="text-base px-8 py-6">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
