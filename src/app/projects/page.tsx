"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { AnimatedBackground } from "@/components/animated-background";
import { Nav } from "@/components/nav";
import { Project, projects } from "@/data/projects";

export async function getStaticProps() {
  const basePath = process.env.BASE_PATH || "";
  return {
    props: {
      projects: projects.map((img) => ({
        ...img,
      })),
    },
  };
}
export default function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Nav />
      <main className="container mx-auto px-4 pt-32">
        <motion.h1
          className="mb-12 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
