"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { Nav } from "@/components/nav";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="container mx-auto px-4 pt-32 pb-32">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="relative flex flex-col-reverse md:flex-row items-center justify-between mb-12 py-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl z-10"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Featured Projects
                </span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                A selection of web and mobile applications I've developed,
                showcasing expertise in modern technologies and full-stack
                development.
              </p>
            </motion.div>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-3 mb-12"
          >
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="px-6"
            >
              All Projects ({projects.length})
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className="px-6"
            >
              Web ({projects.filter((p) => p.category === "web").length})
            </Button>
            <Button
              variant={filter === "mobile" ? "default" : "outline"}
              onClick={() => setFilter("mobile")}
              className="px-6"
            >
              Mobile ({projects.filter((p) => p.category === "mobile").length})
            </Button>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-white/60 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
