"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Guest Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our guests about their unforgettable mountain experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-nature-moss mb-4 opacity-50" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-lg mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.lodge}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}