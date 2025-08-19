
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Modern Living Room",
    category: "Living Spaces",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Contemporary living room design with luxury furniture and elegant lighting"
  },
  {
    id: "2",
    title: "Dining Excellence",
    category: "Dining Rooms",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Sophisticated dining space with modern furniture and ambient lighting"
  },
  {
    id: "3",
    title: "Bedroom Sanctuary",
    category: "Bedrooms",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Luxury bedroom design with contemporary furniture and elegant styling"
  },
  {
    id: "4",
    title: "Executive Office",
    category: "Office Spaces",
    image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Professional office setup with luxury furniture and contemporary design"
  },
  {
    id: "5",
    title: "Modern Kitchen",
    category: "Kitchens",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "State-of-the-art kitchen design with contemporary cabinets and luxury finishes"
  },
  {
    id: "6",
    title: "Contemporary Bathroom",
    category: "Bathrooms",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Elegant bathroom design with modern fixtures and sophisticated styling"
  },
  {
    id: "7",
    title: "Outdoor Living",
    category: "Outdoor Spaces",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Luxury outdoor furniture and patio design for elegant outdoor living"
  },
  {
    id: "8",
    title: "Walk-in Closet",
    category: "Storage Solutions",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Modern walk-in closet with luxury storage solutions and elegant organization"
  },
  {
    id: "9",
    title: "Luxury Lounge",
    category: "Living Spaces",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Sophisticated lounge area with premium furniture and ambient lighting"
  },
  {
    id: "10",
    title: "Designer Workspace",
    category: "Office Spaces",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Creative workspace with modern furniture and inspiring design elements"
  },
  {
    id: "11",
    title: "Master Suite",
    category: "Bedrooms",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Luxurious master bedroom with custom furniture and elegant décor"
  },
  {
    id: "12",
    title: "Gourmet Kitchen",
    category: "Kitchens",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "High-end kitchen featuring premium appliances and custom cabinetry"
  }
];

const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = useMemo(() => {
    return selectedCategory === "All" 
      ? galleryItems 
      : galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    setCurrentIndex(filteredItems.findIndex(i => i.id === item.id));
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our collection of luxury furniture and interior design projects that showcase
            modern sophistication and timeless elegance.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl w-full p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Image */}
                <div className="aspect-video">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-6 bg-background">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{selectedImage.title}</h3>
                    <Badge variant="outline">{selectedImage.category}</Badge>
                  </div>
                  <p className="text-muted-foreground text-lg">{selectedImage.description}</p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {currentIndex + 1} of {filteredItems.length} in {selectedCategory === "All" ? "gallery" : selectedCategory}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
