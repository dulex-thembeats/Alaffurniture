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
                  src="/images/Khadija%20Kabir.jpg"
                  alt="Khadija Kabir"
                  className="w-full rounded-lg"
                />
                <h3 className="text-2xl font-semibold mt-4 mb-1">
                  Khadija Kabir
                </h3>
                <p className="font-semibold text-foreground">CEO/PRESIDENT</p>
                <p className="text-orange-600 font-bold text-sm uppercase mb-6">
                  ELFIJR FURNITURE AND INTERIORS
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <p className="mb-4">
                    <strong>BIO:</strong> Khadija Kabir, Bsc Microbiology, PGD
                    Management is the visionary CEO behind Elfijr G & P Limited,
                    who embarked on an extraordinary journey that gave birth to
                    Elfijr Furniture and Interiors.
                  </p>
                  <p>
                    Enduring years of experience culminated in the success
                    witnessed today. Khadija's story is a captivating blend of
                    beauty, challenges, setbacks, and invaluable lessons. Her
                    tenacity as an entrepreneur, mother, sister, and daughter
                    sets an inspiring example.
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
                  Amidst her demanding role, Khadija finds solace in the
                  kitchen, showcasing her culinary skills, and in her study
                  room, immersed in reading and scribing. The CEO's dedication
                  to both work and personal growth exemplifies her commitment to
                  excellence.
                </p>
                <p>
                  <strong>Khadija's accolades</strong>, including recognition
                  from the Northern Youth Council of Nigeria and the Nigeria
                  Youth League, speak volumes.
                </p>
                <p>
                  She has been hailed as an Icon of Hope and Excellence in
                  Service Delivery. Arewa Arise Against Drug Abuse and
                  Corruption (AADAC) lauds her as an achiever par excellence.
                </p>
                <p>
                  Her journey underscores the belief that dreams are attainable
                  when one silences external noise and pursues what truly
                  matters. <strong>Khadija Kabir's story</strong> is a testament
                  to the power of perseverance, ambition, and the pursuit of
                  one's inner calling.
                </p>
                <img
                  src="/images/decor.jpg"
                  alt="Decorative Table"
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
