import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "John Smith",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    initials: "JS",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Architect",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    initials: "SJ",
  },
  {
    name: "Michael Brown",
    role: "Construction Manager",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    initials: "MB",
  },
  {
    name: "Emma Davis",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    initials: "ED",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our expert team of professionals dedicated to bringing your vision
            to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Expert in their field with years of experience in delivering
                    quality projects.
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
