"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98797 27518",
    href: "tel:+919879727518",
    delay: 0.2,
  },
  {
    icon: Mail,
    title: "Email",
    content: "shravanviradiyakb@gmail.com",
    href: "mailto:shravanviradiyakb@gmail.com",
    delay: 0.3,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    content: "Connect with me",
    href: "https://linkedin.com",
    delay: 0.4,
  },
  {
    icon: Github,
    title: "GitHub",
    content: "Check my projects",
    href: "https://github.com",
    delay: 0.5,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="container mx-auto px-4 pt-32 pb-32">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="relative flex flex-col-reverse md:flex-row items-center justify-between mb-16 py-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left max-w-2xl z-10"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                Get In Touch
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out or connect with me on social media.
              </p>
            </motion.div>
          </div>

          {/* Contact Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Card className="border-cyan-500/30 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-400/60 hover:bg-cyan-900/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 h-full cursor-pointer">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="rounded-full bg-cyan-500/20 p-4 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                          <item.icon className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
                        </div>
                        <h2 className="font-bold text-xl text-cyan-400 mb-2 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                          {item.title}
                        </h2>
                        <p className="text-white/70 text-sm">{item.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center p-12 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.1)]"
          >
            <h2 className="text-3xl font-bold mb-4">
              Let's Create Something Awesome!
            </h2>
            <p className="text-white/70 mb-8">
              Whether you have a project in mind or just want to chat, I'd love
              to hear from you.
            </p>
            <a href="mailto:shravanviradiyakb@gmail.com">
              <Button className="text-base px-8 py-6">Send me an Email</Button>
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
