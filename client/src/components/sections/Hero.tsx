import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489514354504-1653aa90e34e')",
        }}
      />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-6">
            Crafting Excellence in
            <br />
            Construction & Furniture
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert craftsmen delivering bespoke furniture, construction, and
            finishing services with unparalleled quality and attention to detail.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="group"
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="group"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Video
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