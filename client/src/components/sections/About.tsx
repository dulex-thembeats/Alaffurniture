import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { RiFlag2Line, RiEyeLine, RiHeartLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">About ALAF Furniture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ALAF Furniture is a premier destination for luxury furniture and interior design
            solutions, crafting exceptional pieces that define modern sophistication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <RiFlag2Line className="h-12 w-12 text-primary mb-2" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To create luxury furniture and interior designs that transform spaces
                  into sophisticated environments, exceeding client expectations through
                  innovative design and superior craftsmanship.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <RiEyeLine className="h-12 w-12 text-primary mb-2" />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the premier destination for luxury furniture and interior design,
                  known worldwide for our commitment to excellence, innovation, and
                  timeless elegance.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <RiHeartLine className="h-12 w-12 text-primary mb-2" />
                  <h3 className="text-xl font-semibold">Our Values</h3>
                </div>
                <p className="text-muted-foreground">
                  Quality, integrity, and customer satisfaction are at the heart of
                  everything we do, driving us to create furniture that stands the
                  test of time and exceeds expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}