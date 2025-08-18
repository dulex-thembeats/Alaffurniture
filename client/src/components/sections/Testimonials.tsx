
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    text: "Elfijr Furniture has consistently delivered exceptional quality and design. Their attention to detail and craftsmanship is unmatched.",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Home Owner",
    text: "The customer service at Elfijr is outstanding. They helped me furnish my entire home with beautiful, lasting pieces.",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Emma Davis",
    role: "Architect",
    text: "Working with Elfijr has been a pleasure. Their furniture pieces are both functional and aesthetically pleasing.",
    image: "/images/testimonial3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">Hear from our satisfied customers</p>
        </motion.div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-lg mb-6 italic text-muted-foreground">"{testimonial.text}"</p>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
