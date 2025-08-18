
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
  {
    title: "Grand Opening of New Showroom",
    date: "March 15, 2024",
    content: "We are excited to announce the opening of our new furniture showroom...",
    image: "/images/showroom.jpg"
  },
  {
    title: "Latest Collection Launch",
    date: "March 1, 2024",
    content: "Introducing our latest furniture collection featuring contemporary designs...",
    image: "/images/collection.jpg"
  },
  {
    title: "Industry Award Recognition",
    date: "February 20, 2024",
    content: "Elfijr Furniture has been recognized for excellence in furniture design...",
    image: "/images/award.jpg"
  }
];

export default function News() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <p className="text-muted-foreground">Stay updated with our latest announcements and developments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
