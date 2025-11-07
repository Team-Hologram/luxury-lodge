"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Scene3D from "@/components/3d/Scene3D";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Escape to
              <span className="block mt-2 gradient-text bg-gradient-to-r from-nature-moss to-nature-sky">
                Mountain Paradise
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover luxury lodges nestled in nature's most breathtaking locations.
            Your perfect retreat awaits.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-nature-pine hover:bg-nature-pine/90 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href="/lodges">
                Explore Lodges
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-nature-pine px-8 py-6 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Video
            </Button> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}