"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/nav";
import { projects } from "@/data/projects";
import React from "react";
interface ProjectPageProps {
  params: Promise<{
    slug: string; // slug is the dynamic parameter from the URL
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = React.use(params);

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const hasImage = Boolean(project.image);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="container mx-auto px-4 pt-32 pb-32">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center text-white/60 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            {project.title}
          </h1>
          <div className="mt-8">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {hasImage && project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-cyan-950/30 border-2 border-dashed border-cyan-500/30">
                  <ImageIcon className="w-16 h-16 text-cyan-500/40 mb-4" />
                  <div className="text-center">
                    <div className="text-cyan-500/50 font-mono text-lg font-semibold tracking-[0.2em]">
                      NO BANNER
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                About
              </h2>
              <p className="mt-4 text-white/60">{project.description}</p>
              {project.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)] transition-colors"
                >
                  View on Store →
                </a>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                Technologies
              </h2>
              <ul className="mt-4 space-y-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-cyan-950/40 border border-cyan-500/30 px-4 py-2 text-sm text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Key Features
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-white/60">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
