
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Store() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <ShoppingBag className="mx-auto h-24 w-24 text-primary mb-6" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden border border-primary/10">
            <CardContent className="p-12">
              <h1 className="text-4xl font-bold text-primary mb-4">ALAF Store Coming Soon</h1>
              <p className="text-muted-foreground text-lg">
                We're crafting an exceptional online shopping experience for our luxury furniture collection. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
