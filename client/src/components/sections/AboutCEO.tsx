import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutCEO() {
  return (
    <section id="about-ceo" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            About the CEO
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-10 justify-between">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 basis-[400px]"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <img
                  src="https://res.cloudinary.com/lexlab/image/upload/v1761403441/CEO_n2gwfn.jpg"
                  alt="CEO Portrait"
                  className="w-full rounded-lg"
                />
                <h3 className="text-2xl font-semibold mt-4 mb-1">
                  Abdulsalam Lawal
                </h3>
                <p className="font-semibold text-foreground">CEO/PRESIDENT</p>
                <p className="text-primary font-bold text-sm uppercase mb-6">
                  ALAF FURNITURE AND INTERIOR
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-lg">
                  <p className="mb-4">
                    <strong>BIO:</strong> Abdulsalam Lawal  is the visionary CEO behind ALAF Furniture,
                    bringing over 15 years of experience in luxury furniture design and interior
                    architecture to create exceptional living spaces.
                  </p>
                  <p>
                    His passion for craftsmanship and modern design has led ALAF to become
                    a premier destination for sophisticated furniture solutions. Abdulsalam's
                    leadership philosophy centers on innovation, quality, and creating
                    timeless pieces that transform spaces.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 basis-[400px]"
          >
            <Card className="h-full bg-primary text-primary-foreground">
              <CardContent className="p-8 space-y-6">
                <p>
                  Beyond his professional achievements, Abdulsalam is passionate about
                  sustainable design practices and mentoring the next generation
                  of furniture designers. His dedication to both innovation and
                  environmental responsibility drives ALAF's commitment to excellence.
                </p>
                <p>
                  <strong>Alaf's achievements</strong> include recognition as Designer
                  of the Year and multiple awards for innovative furniture design
                  from leading industry organizations.
                </p>
                <p>
                  He has been featured in top design magazines and has spoken at
                  international furniture and design conferences, sharing his vision
                  for the future of luxury interior design.
                </p>
                <p>
                  His philosophy centers on the belief that exceptional furniture
                  should tell a story while serving its purpose beautifully.
                  <strong>Abdulsalam's leadership</strong> continues to drive ALAF toward
                  new heights of design excellence and customer satisfaction.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
                  alt="Modern Furniture Design"
                  className="w-full max-w-[400px] mt-6 rounded-lg mx-auto"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
