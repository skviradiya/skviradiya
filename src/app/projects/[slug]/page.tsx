// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";

// import { AnimatedBackground } from "@/components/animated-background";
// import { Nav } from "@/components/nav";

// const projects = {
//   "birla-opus": {
//     title: "Birla Opus ID",
//     description:
//       "A contractor portal app for Aditya Birla Group with features like Adobe Analytics integration, Clever Tap integration, and advanced QR scanning capabilities.",
//     image: "/assets/images/birla-opus-id.webp?height=600&width=800",
//     playStoreLink:
//       "https://play.google.com/store/apps/details?id=com.birlaopusid.contractorportal",
//     technologies: [
//       "React Native",
//       "TypeScript",
//       "Adobe Analytics",
//       "Clever Tap",
//       "Anyline",
//       "Google ML Kit",
//       "Dynamsoft",
//     ],
//     features: [
//       "Adobe Analytics integration for user behavior tracking",
//       "Clever Tap integration for enhanced user engagement",
//       "Advanced QR scanning and OCR capabilities",
//       "VAPT (Vulnerability Assessment and Penetration Testing) handling",
//       "Multiple environment configurations using flavors",
//       "CI/CD pipeline integration",
//     ],
//   },
//   nettpage: {
//     title: "Nettpage",
//     description:
//       "A mobile application that combines e-commerce and social media features, allowing users to browse, purchase, and sell products while interacting with other users.",
//     image: "/assets/images/nettpage.webp?height=600&width=800",
//     playStoreLink:
//       "https://play.google.com/store/apps/details?id=com.birlaopusid.contractorportal",
//     technologies: ["React Native", "TypeScript", "ffmpeg", "Google ML Kit"],
//     features: [
//       "Nettpage is a mobile application that combines e-commerce and social media features.",
//       "The app allows users to browse and purchase products from a variety of retailers, as well as create their own online stores to sell products. ",
//       "Users can follow and interact with other users, creating a social network within the app.",
//       "Firebase used to chat",
//     ],
//   },
//   // Add other projects here...
// };

// export default function ProjectPage({
//   params,
// }: {
//   params: { slug: keyof typeof projects };
// }) {
//   const project = projects[params.slug];

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <AnimatedBackground />
//       <Nav />
//       <main className="container mx-auto px-4 pt-32">
//         <Link
//           href="/projects"
//           className="mb-8 inline-flex items-center text-white/60 hover:text-white"
//         >
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           Back to Projects
//         </Link>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl font-bold text-green-500">{project.title}</h1>
//           <div className="mt-8">
//             <div className="relative aspect-video overflow-hidden rounded-lg">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="mt-8 grid gap-8 lg:grid-cols-2">
//             <div>
//               <h2 className="text-2xl font-semibold text-green-500">About</h2>
//               <p className="mt-4 text-white/60">{project.description}</p>
//               {project.playStoreLink && (
//                 <a
//                   href={project.playStoreLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-block text-green-500 hover:text-green-400"
//                 >
//                   View on Play Store →
//                 </a>
//               )}
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-green-500">
//                 Technologies
//               </h2>
//               <ul className="mt-4 space-y-2">
//                 {project.technologies.map((tech) => (
//                   <li
//                     key={tech}
//                     className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-500"
//                   >
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold text-green-500">
//               Key Features
//             </h2>
//             <ul className="mt-4 list-inside list-disc space-y-2 text-white/60">
//               {project.features.map((feature) => (
//                 <li key={feature}>{feature}</li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AnimatedBackground } from "@/components/animated-background";
import { Nav } from "@/components/nav";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

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
                src={project.image}
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
