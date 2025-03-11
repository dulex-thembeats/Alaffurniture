import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const portfolioItems = [
  {
    title: "Modern Living Room Set",
    description: "Custom furniture for contemporary homes",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    category: "Furniture",
  },
  {
    title: "Luxury Kitchen Cabinets",
    description: "Bespoke cabinetry installation",
    image: "https://images.unsplash.com/photo-1640200330428-9fe2ab926de1",
    category: "Cabinetry",
  },
  {
    title: "Office Renovation",
    description: "Complete commercial space renovation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "Construction",
  },
  {
    title: "Designer Sofa Set",
    description: "Custom upholstery and design",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    category: "Upholstery",
  },
  {
    title: "Modern Home Build",
    description: "New residential construction project",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    category: "Building",
  },
  {
    title: "Interior Finishing",
    description: "Premium interior work and POP design",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
    category: "POP",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see the quality of our work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
