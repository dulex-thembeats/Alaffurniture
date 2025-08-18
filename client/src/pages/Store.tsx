
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Luxury Velvet Sofa",
    description: "Premium 3-seater velvet sofa with gold accent legs, perfect for modern living spaces",
    price: 2899.99,
    originalPrice: 3199.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    category: "Living Room",
    rating: 4.9,
    isNew: true
  },
  {
    id: 2,
    name: "Executive Office Chair",
    description: "Ergonomic leather executive chair with gold-finished base and premium comfort features",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    category: "Office",
    rating: 4.8,
    isBestseller: true
  },
  {
    id: 3,
    name: "Dining Table Set",
    description: "Elegant 6-seater dining table with matching chairs, featuring modern design and premium materials",
    price: 3499.99,
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    category: "Dining",
    rating: 4.7
  },
  {
    id: 4,
    name: "King Size Bed Frame",
    description: "Luxurious upholstered king bed frame with built-in LED lighting and premium finish",
    price: 1899.99,
    originalPrice: 2299.99,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    category: "Bedroom",
    rating: 4.9
  },
  {
    id: 5,
    name: "Coffee Table Set",
    description: "Modern glass-top coffee table with gold accent base, includes matching side tables",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    category: "Living Room",
    rating: 4.6,
    isNew: true
  },
  {
    id: 6,
    name: "Luxury Wardrobe",
    description: "Spacious 4-door wardrobe with mirror finish and premium interior organization system",
    price: 2199.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    category: "Bedroom",
    rating: 4.8,
    isBestseller: true
  }
];

export default function Store() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary mb-6">ALAF Furniture Store</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive collection of luxury furniture pieces, designed to transform your space into a sophisticated sanctuary
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-primary/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-primary text-primary-foreground">New</Badge>
                    )}
                    {product.isBestseller && (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">Bestseller</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-primary hover:bg-primary/90">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Need Custom Furniture?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our design team can create bespoke pieces tailored to your exact specifications and style preferences
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Request Custom Design
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
