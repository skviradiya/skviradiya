"use client";

import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/data/projects";

export function ProjectCard({
  title,
  description,
  image,
  link,
  playStoreLink,
}: Project) {
  const hasImage = Boolean(image);

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={link} passHref legacyBehavior>
        <Card className="group overflow-hidden border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
          <CardHeader>
            <CardTitle className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {hasImage && image ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-cyan-950/30 border-2 border-dashed border-cyan-500/30 transition-colors duration-500 group-hover:border-cyan-400/50 group-hover:bg-cyan-900/40">
                  <ImageIcon className="w-10 h-10 text-cyan-500/40 mb-3 group-hover:text-cyan-400/60 transition-colors duration-500" />
                  <div className="text-center">
                    <div className="text-cyan-500/50 font-mono text-sm font-semibold tracking-[0.2em] group-hover:text-cyan-400/70 transition-colors">
                      NO BANNER
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="mt-4 text-sm text-white/60">{description}</p>
            {playStoreLink && (
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View on Store
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
