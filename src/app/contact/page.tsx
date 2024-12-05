"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Code } from "lucide-react";

import { AnimatedBackground } from "@/components/animated-background";
import { Nav } from "@/components/nav";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98797 27518",
    delay: 0.2,
  },
  {
    icon: Mail,
    title: "Email",
    content: "shravanviradiyakb@gmail.com",
    delay: 0.4,
  },
  // {
  //   icon: MapPin,
  //   title: "Address",
  //   content:
  //     "49, Nilamnagar banglows-2, Shyamdham chowk, nana varachha, surat-395006, Gujarat India",
  //   delay: 0.6,
  // },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Nav />
      <main className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <motion.h1
            className="text-center text-4xl font-bold text-green-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Code className="inline-block mr-2" /> Get In Touch
          </motion.h1>
          <motion.p
            className="mt-4 text-center text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </motion.p>
          <div className="mt-12 grid gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Card className="border-white/10 bg-black/50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-green-500/10 p-3">
                        <item.icon className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-green-500">
                          {item.title}
                        </h2>
                        <p className="text-white/60">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
