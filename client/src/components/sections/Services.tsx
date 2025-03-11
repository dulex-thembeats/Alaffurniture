import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Hammer,
  Paintbrush,
  Sofa,
  Building2,
  Paintbrush2,
  Construction,
} from "lucide-react";

const services = [
  {
    title: "Bespoke Furniture",
    description: "Custom-designed furniture tailored to your specific needs",
    icon: Sofa,
  },
  {
    title: "Cabinetry",
    description: "High-quality custom cabinets for any space",
    icon: Hammer,
  },
  {
    title: "Upholstery",
    description: "Expert upholstery services for furniture restoration",
    icon: Paintbrush,
  },
  {
    title: "Building",
    description: "Complete building and renovation services",
    icon: Building2,
  },
  {
    title: "Painting",
    description: "Professional painting services for all surfaces",
    icon: Paintbrush2,
  },
  {
    title: "POP & Construction",
    description: "Plaster of Paris and general construction work",
    icon: Construction,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of construction and furniture services
            to meet all your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Professional service</li>
                    <li>Quality materials</li>
                    <li>Expert craftsmanship</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
