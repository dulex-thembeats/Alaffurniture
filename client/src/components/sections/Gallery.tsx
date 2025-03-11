import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryItems = [
  {
    title: "Luxury Interior Design",
    description: "Modern living room with custom furniture",
    image: "/images/gallery/interior-1.jpg",
    category: "Interior Design",
  },
  {
    title: "Custom Woodwork",
    description: "Hand-crafted wooden dining table",
    image: "/images/gallery/furniture-1.jpg",
    category: "Furniture",
  },
  {
    title: "Commercial Space",
    description: "Office renovation project",
    image: "/images/gallery/commercial-1.jpg",
    category: "Construction",
  },
  {
    title: "Residential Project",
    description: "Modern home construction",
    image: "/images/gallery/residential-1.jpg",
    category: "Building",
  },
  {
    title: "Kitchen Design",
    description: "Contemporary kitchen with custom cabinets",
    image: "/images/gallery/kitchen-1.jpg",
    category: "Interior Design",
  },
  {
    title: "Outdoor Furniture",
    description: "Custom patio furniture set",
    image: "/images/gallery/outdoor-1.jpg",
    category: "Furniture",
  },
  {
    title: "Office Design",
    description: "Modern workspace design",
    image: "/images/gallery/office-1.jpg",
    category: "Interior Design",
  },
  {
    title: "Custom Bedroom",
    description: "Luxury bedroom furniture",
    image: "/images/gallery/bedroom-1.jpg",
    category: "Furniture",
  },
];

export default function Gallery() {
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
          <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
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
              <Card className="overflow-hidden">
                <AspectRatio ratio={1}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
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
      </div>
    </section>
  );
}
