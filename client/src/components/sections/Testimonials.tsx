
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maryam Shehu",
    role: "Interior Designer",
    text: "ALAF Furniture has consistently delivered exceptional quality and design. Their attention to detail and craftsmanship sets them apart in the luxury furniture market.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    name: "Hafeezah Abdullahi",
    role: "Homeowner",
    text: "The customer service at ALAF is outstanding. They helped me create a sophisticated living space that perfectly reflects my style and needs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    name: "Ruqayya Sani",
    role: "Architect",
    text: "Working with ALAF has been exceptional. Their furniture pieces seamlessly blend functionality with stunning aesthetic appeal in every project.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    name: "Hamidu Bello",
    role: "Hotel Manager",
    text: "ALAF transformed our hotel lobby with their premium furniture collection. The quality and elegance have impressed all our guests.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how ALAF has transformed spaces and exceeded expectations with our luxury furniture solutions
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="relative mb-6">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg"
                          />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-lg mb-6 italic text-foreground leading-relaxed font-medium">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="border-t border-primary/20 pt-4">
                        <h4 className="font-bold text-xl text-primary mb-1">{testimonial.name}</h4>
                        <p className="text-primary/70 font-medium uppercase tracking-wide text-sm">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-16 bg-primary hover:bg-primary/90 text-primary-foreground border-primary" />
          <CarouselNext className="hidden sm:flex -right-16 bg-primary hover:bg-primary/90 text-primary-foreground border-primary" />
        </Carousel>
      </div>
    </section>
  );
}
