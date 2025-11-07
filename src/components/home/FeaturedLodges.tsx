"use client";

import { motion } from "framer-motion";
import { Star, Users, Bed, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { lodges } from "@/lib/data/lodges";
import { formatCurrency } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";

export default function FeaturedLodges() {
  const featuredLodges = lodges.filter((lodge) => lodge.featured);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="mb-4" variant="outline">
            Featured Properties
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Finest Lodges
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked luxury retreats offering unparalleled comfort and stunning
            natural beauty
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredLodges.map((lodge) => (
            <motion.div key={lodge.id} variants={fadeInUp}>
              <Card className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={lodge.images[0]}
                    alt={lodge.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-nature-pine">
                      {formatCurrency(lodge.price)}/night
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold">{lodge.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{lodge.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{lodge.location}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {lodge.shortDescription}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {lodge.capacity} guests
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {lodge.bedrooms} beds
                    </div>
                  </div>

                  <Button className="w-full bg-nature-pine hover:bg-nature-pine/90" asChild>
                    <Link href={`/lodges/${lodge.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/lodges">View All Lodges</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}