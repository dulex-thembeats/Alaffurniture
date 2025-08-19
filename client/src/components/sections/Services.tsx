import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sofa,
  Home,
  Palette,
  Lightbulb,
  Clock,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";


const services = [
  {
    title: "Custom Furniture Design",
    description: "Bespoke furniture pieces crafted to your exact specifications and style preferences",
    icon: Sofa,
  },
  {
    title: "Interior Design",
    description: "Complete interior design solutions that transform your space into a luxury environment",
    icon: Home,
  },
  {
    title: "Color Consultation",
    description: "Expert color palette selection and design consultation for harmonious spaces",
    icon: Palette,
  },
  {
    title: "Lighting Design",
    description: "Professional lighting solutions that enhance ambiance and functionality",
    icon: Lightbulb,
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely delivery and quality execution",
    icon: Clock,
  },
  {
    title: "Design Consultation",
    description: "Personalized design consultations to bring your vision to life",
    icon: Users,
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
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ALAF offers a comprehensive range of luxury furniture and interior design 
            services to transform your space into a sophisticated sanctuary
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
                  <service.icon className="h-10 w-10 text-[#E39D1A] mb-4" />
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