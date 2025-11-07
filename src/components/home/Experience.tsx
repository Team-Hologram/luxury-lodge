"use client";

import { motion } from "framer-motion";
import {
  Snowflake,
  Mountain,
  Flame,
  Waves,
  TreePine,
  Camera,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";

const experiences = [
  {
    icon: Snowflake,
    title: "Winter Sports",
    description: "Ski, snowboard, and enjoy winter wonderland activities",
  },
  {
    icon: Mountain,
    title: "Hiking Trails",
    description: "Explore scenic mountain paths and breathtaking vistas",
  },
  {
    icon: Flame,
    title: "Cozy Evenings",
    description: "Relax by the fireplace with premium amenities",
  },
  {
    icon: Waves,
    title: "Water Activities",
    description: "Kayaking, fishing, and riverside adventures",
  },
  {
    icon: TreePine,
    title: "Nature Walks",
    description: "Discover local wildlife and pristine forests",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capture stunning landscapes and memorable moments",
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Alpine Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in nature with a wide range of activities and
            experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nature-pine/10 mb-6 group-hover:bg-nature-pine group-hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <experience.icon className="w-8 h-8 text-nature-pine group-hover:text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{experience.title}</h3>
                  <p className="text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}