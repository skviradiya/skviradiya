"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/data/projects";

export function ProjectCard({
  id,
  title,
  description,
  image,
  link,
  playStoreLink,
}: Project) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={link} passHref legacyBehavior>
        <Card className="group overflow-hidden border-white/10 bg-black/50 transition-colors hover:border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-500">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-sm text-white/60">{description}</p>
            {playStoreLink && (
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-sm text-green-500 hover:text-green-400"
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
