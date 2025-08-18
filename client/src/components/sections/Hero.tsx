import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  "/images/hero-living-room.png",
  "/images/hero-dining-room.png",
  "/images/hero-bedroom.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Luxury Furniture &
            <br />
            <span className="text-primary">Interior Design</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            ALAF creates exceptional furniture and interior spaces that blend
            modern sophistication with timeless elegance, transforming your
            vision into reality.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="group">
                  <Play className="mr-2 h-4 w-4 text-primary" />
                  Portfolio Video
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl">
                <div className="aspect-video">
                  <video
                    className="w-full h-full"
                    controls
                    src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                    poster="https://images.unsplash.com/photo-1489514354504-1653aa90e34e"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
