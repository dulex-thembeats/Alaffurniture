import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const galleryItems = [
  {
    title: "Luxury Interior Design",
    description: "Modern living room with custom furniture",
    detailedDescription: "A sophisticated living space that combines contemporary design with traditional craftsmanship. Features custom-made furniture and premium materials throughout.",
    image: "/images/gallery/interior-1.jpg",
    category: "Interior Design",
  },
  {
    title: "Custom Woodwork",
    description: "Hand-crafted wooden dining table",
    detailedDescription: "Expertly crafted dining table made from sustainable hardwood. Features intricate detailing and a durable finish that will last for generations.",
    image: "/images/gallery/furniture-1.jpg",
    category: "Furniture",
  },
  {
    title: "Commercial Space",
    description: "Office renovation project",
    detailedDescription: "Complete office renovation that transformed an outdated space into a modern, productive workplace. Includes custom furniture and innovative space planning.",
    image: "/images/gallery/commercial-1.jpg",
    category: "Construction",
  },
  {
    title: "Residential Project",
    description: "Modern home construction",
    detailedDescription: "New residential construction featuring contemporary architecture and high-end finishes. Built with attention to detail and energy efficiency in mind.",
    image: "/images/gallery/residential-1.jpg",
    category: "Building",
  },
  {
    title: "Kitchen Design",
    description: "Contemporary kitchen with custom cabinets",
    detailedDescription: "Modern kitchen featuring custom cabinetry, premium appliances, and innovative storage solutions. Designed for both functionality and style.",
    image: "/images/gallery/kitchen-1.jpg",
    category: "Interior Design",
  },
  {
    title: "Outdoor Furniture",
    description: "Custom patio furniture set",
    detailedDescription: "Weather-resistant outdoor furniture set, custom-designed for comfort and durability. Perfect for creating an inviting outdoor living space.",
    image: "/images/gallery/outdoor-1.jpg",
    category: "Furniture",
  },
  {
    title: "Office Design",
    description: "Modern workspace design",
    detailedDescription: "Contemporary office design that promotes productivity and collaboration. Features ergonomic furniture and innovative space planning.",
    image: "/images/gallery/office-1.jpg",
    category: "Interior Design",
  },
  {
    title: "Custom Bedroom",
    description: "Luxury bedroom furniture",
    detailedDescription: "Bespoke bedroom furniture set crafted with premium materials. Includes custom bed frame, wardrobes, and matching accessories.",
    image: "/images/gallery/bedroom-1.jpg",
    category: "Furniture",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of completed projects and custom creations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedItem(item)}
              >
                <AspectRatio ratio={1}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          {selectedItem && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedItem.title}</DialogTitle>
                <DialogDescription>{selectedItem.category}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <AspectRatio ratio={16/9}>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    {selectedItem.detailedDescription}
                  </p>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}