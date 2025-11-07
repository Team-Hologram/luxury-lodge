"use client";

import { motion } from "framer-motion";
import { Star, Users, Bed, Bath, MapPin, Wifi, Mountain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { lodges } from "@/lib/data/lodges";
import { formatCurrency } from "@/lib/utils";
import { notFound } from "next/navigation";

export default function LodgeDetailPage({ params }: { params: { id: string } }) {
  const lodge = lodges.find((l) => l.id === params.id);

  if (!lodge) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link href="/lodges">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Lodges
            </Link>
          </Button>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={lodge.images[0]}
              alt={lodge.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {lodge.images.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className="relative h-48 md:h-60 rounded-lg overflow-hidden"
              >
                <Image src={image} alt={`${lodge.name} ${index + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{lodge.name}</h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{lodge.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{lodge.rating}</span>
                  <span className="text-muted-foreground">({lodge.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Badge className="flex items-center gap-2 px-4 py-2">
                  <Users className="w-4 h-4" />
                  {lodge.capacity} guests
                </Badge>
                <Badge className="flex items-center gap-2 px-4 py-2">
                  <Bed className="w-4 h-4" />
                  {lodge.bedrooms} bedrooms
                </Badge>
                <Badge className="flex items-center gap-2 px-4 py-2">
                  <Bath className="w-4 h-4" />
                  {lodge.bathrooms} bathrooms
                </Badge>
              </div>

              <p className="text-lg leading-relaxed mb-8">{lodge.description}</p>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {lodge.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-nature-pine rounded-full" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24"
            >
              <Card className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-2">
                    {formatCurrency(lodge.price)}
                    <span className="text-lg font-normal text-muted-foreground">
                      / night
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-nature-pine hover:bg-nature-pine/90 mb-4"
                  size="lg"
                  asChild
                >
                  <Link href="/booking">Book Now</Link>
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  You won't be charged yet
                </p>

                <div className="border-t mt-6 pt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base price</span>
                    <span className="font-semibold">{formatCurrency(lodge.price)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service fee</span>
                    <span className="font-semibold">{formatCurrency(lodge.price * 0.1)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(lodge.price * 1.1)}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}