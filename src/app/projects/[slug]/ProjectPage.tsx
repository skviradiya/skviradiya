"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AnimatedBackground } from "@/components/animated-background";
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

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Nav />
      <main className="container mx-auto px-4 pt-32">
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
          <h1 className="text-4xl font-bold text-green-500">{project.title}</h1>
          <div className="mt-8">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={process.env.BASE_PATH + project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-green-500">About</h2>
              <p className="mt-4 text-white/60">{project.description}</p>
              {project.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-green-500 hover:text-green-400"
                >
                  View on Store →
                </a>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-500">
                Technologies
              </h2>
              <ul className="mt-4 space-y-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-green-500">
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
