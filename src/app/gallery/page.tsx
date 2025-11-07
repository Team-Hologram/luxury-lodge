"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800",
    category: "Exterior",
    title: "Mountain View Lodge",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    category: "Interior",
    title: "Cozy Living Room",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    category: "Exterior",
    title: "Alpine Vista",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    category: "Interior",
    title: "Modern Kitchen",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    category: "Exterior",
    title: "Forest Cabin",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    category: "Interior",
    title: "Luxury Bedroom",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800",
    category: "Nature",
    title: "Mountain Landscape",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800",
    category: "Nature",
    title: "Forest Trail",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: "Nature",
    title: "Mountain Peak",
  },
];

const categories = ["All", "Exterior", "Interior", "Nature"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty of our luxury lodges and stunning natural surroundings
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-6 py-2 text-sm ${
                selectedCategory === category
                  ? "bg-nature-pine hover:bg-nature-pine/90"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-2">{image.category}</Badge>
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="bg-white p-6 rounded-b-lg">
                  <Badge className="mb-2">{selectedImage.category}</Badge>
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}