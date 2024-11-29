"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { AnimatedBackground } from "@/components/animated-background";
import { Nav } from "@/components/nav";
import { projects } from "@/data/projects";

// const projects = [
//   {
//     title: "Birla Opus ID",
//     description:
//       "A contractor portal app for Aditya Birla Group with features like Adobe Analytics integration, Clever Tap integration, and advanced QR scanning capabilities.",
//     image: "/assets/images/birla-opus-id.webp?height=400&width=600",
//     link: "/projects/birla-opus",
//     playStoreLink:
//       "https://play.google.com/store/apps/details?id=com.birlaopusid.contractorportal",
//   },
//   {
//     title: "Nettpage",
//     description:
//       "A mobile application that combines e-commerce and social media features, allowing users to browse, purchase, and sell products while interacting with other users.",
//     image: "/assets/images/nettpage.webp?height=400&width=600",
//     link: "/projects/nettpage",
//     playStoreLink:
//       "https://play.google.com/store/apps/details?id=com.app.nettpage",
//   },

//   {
//     title: "TipOff",
//     description:
//       "A word guessing game app featuring video conference gameplay capabilities.",
//     image: "/assets/images/tipoff.png?height=400&width=600",
//     link: "/projects/tipoff",
//     playStoreLink:
//       "https://apps.apple.com/us/app/tipoff-word-guessing-game/id1110306961",
//   },
//   {
//     title: "WeSmoke",
//     description:
//       "A social media app combining various features such as podcasting, chatting, and media posting.",
//     image: "/assets/images/wesmoke.png?height=400&width=600",
//     link: "/projects/wesmoke",
//     playStoreLink: "https://apps.apple.com/us/app/wesmoke/id1577787304",
//   },
//   {
//     title: "Satsang App",
//     description:
//       "An app for managing and analyzing large data sets with comprehensive CRUD operations.",
//     image: "/assets/images/satsang.webp?height=400&width=600&resize=true",
//     link: "/projects/satsang",
//     playStoreLink:
//       "https://play.google.com/store/apps/details?id=com.baps_yuva",
//   },
// ];

export default function ProjectsPage() {
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
          My Projects
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
          {projects.map((project, index) => (
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
