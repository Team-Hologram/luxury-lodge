"use client";

import { motion } from "framer-motion";
import { Star, Users, Bed, MapPin, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { lodges } from "@/lib/data/lodges";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";

export default function LodgesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLodges = lodges.filter(
    (lodge) =>
      lodge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lodge.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">Our Luxury Lodges</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of handpicked mountain retreats
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by name or location..."
              className="pl-12 h-14 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Lodges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLodges.map((lodge, index) => (
            <motion.div
              key={lodge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
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
                  {lodge.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-nature-pine text-white">Featured</Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
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

                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {lodge.description}
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

                  <Button
                    className="w-full bg-nature-pine hover:bg-nature-pine/90"
                    asChild
                  >
                    <Link href={`/lodges/${lodge.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredLodges.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No lodges found. Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}