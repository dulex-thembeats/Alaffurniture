import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { X, ZoomIn, ChevronLeft, ChevronRight, Search, Filter, Grid, Heart, Share2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  year?: string;
  client?: string;
}

// Modern gallery collection with real furniture images
const allGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Luxury Velvet Sofa Collection",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Premium velvet sofa collection featuring rich textures and contemporary design elements with gold accent legs",
    featured: true,
    year: "2024",
    client: "Private Residence"
  },
  {
    id: "2",
    title: "Modern Dining Table Set",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Elegant 8-seater dining table with matching chairs, featuring marble top and brass details",
    year: "2024",
    client: "Corporate Office"
  },
  {
    id: "3",
    title: "Executive Office Suite",
    category: "Office",
    image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Sophisticated executive office furniture including leather chairs and premium desk solutions",
    featured: true,
    year: "2024"
  },
  {
    id: "4",
    title: "Master Bedroom Suite",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Luxurious king-size bed frame with upholstered headboard and matching nightstands",
    year: "2024",
    client: "Luxury Hotel"
  },
  {
    id: "5",
    title: "Contemporary Coffee Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Modern glass-top coffee table with geometric metal base in rose gold finish",
    year: "2024"
  },
  {
    id: "6",
    title: "Minimalist Kitchen Design",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Clean-lined kitchen cabinetry with premium hardware and integrated appliances",
    featured: true,
    year: "2024",
    client: "Modern Home"
  },
  {
    id: "7",
    title: "Luxury Wardrobe System",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Custom walk-in wardrobe with mirror panels and LED lighting system",
    year: "2024"
  },
  {
    id: "8",
    title: "Outdoor Dining Collection",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Weather-resistant outdoor furniture set with teak wood and aluminum construction",
    year: "2024"
  },
  {
    id: "9",
    title: "Reception Area Design",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Modern reception furniture with curved seating and integrated lighting",
    client: "Corporate Headquarters"
  },
  {
    id: "10",
    title: "Bar Stool Collection",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Contemporary bar stools with leather upholstery and brass footrests",
    year: "2024"
  },
  {
    id: "11",
    title: "Living Room Ensemble",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Complete living room furniture set with coordinated colors and textures",
    featured: true,
    year: "2024",
    client: "Boutique Hotel"
  },
  {
    id: "12",
    title: "Kids Bedroom Furniture",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Playful yet sophisticated children's furniture with safety-first design",
    year: "2024"
  },
  {
    id: "13",
    title: "Conference Room Table",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Large conference table with integrated cable management and premium finishes",
    client: "Tech Startup"
  },
  {
    id: "14",
    title: "Bathroom Vanity Design",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Custom bathroom vanity with marble countertop and gold fixtures",
    year: "2024"
  },
  {
    id: "15",
    title: "Patio Lounge Set",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1493946947703-de5a4fb0ab3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    description: "Luxury outdoor lounge furniture with weather-resistant cushions",
    featured: true,
    year: "2024"
  }
];

const categories = ["All", ...Array.from(new Set(allGalleryItems.map(item => item.category)))];

const layoutModes = [
  { id: "grid", label: "Grid", icon: Grid },
  { id: "masonry", label: "Masonry", icon: Filter }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [layoutMode, setLayoutMode] = useState("grid");

  const filteredItems = useMemo(() => {
    let items = selectedCategory === "All" 
      ? allGalleryItems 
      : allGalleryItems.filter(item => item.category === selectedCategory);

    if (searchQuery) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-primary mb-6">ALAF Gallery</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our curated collection of luxury furniture and interior design masterpieces. 
            Each piece represents our commitment to sophistication, quality, and timeless elegance.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search furniture, rooms, or styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-primary/20 focus:border-primary"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category}
                {selectedCategory === category && (
                  <Badge variant="secondary" className="ml-2 bg-primary-foreground text-primary">
                    {allGalleryItems.filter(item => category === "All" || item.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Results Info and Layout Toggle */}
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="text-muted-foreground">
              Showing <span className="font-semibold text-primary">{filteredItems.length}</span> of {allGalleryItems.length} pieces
              {searchQuery && (
                <span className="ml-2">
                  for "<span className="font-medium">{searchQuery}</span>"
                </span>
              )}
            </div>
            
            <div className="flex gap-2">
              {layoutModes.map((mode) => (
                <Button
                  key={mode.id}
                  variant={layoutMode === mode.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLayoutMode(mode.id)}
                  className="gap-2"
                >
                  <mode.icon className="h-4 w-4" />
                  {mode.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            layoutMode === "masonry" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-primary/10 hover:border-primary/30">
                  <div 
                    className={`relative overflow-hidden ${
                      layoutMode === "masonry" ? "aspect-[4/5]" : "aspect-square"
                    }`}
                    onClick={() => openModal(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {item.featured && (
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                        Featured
                      </Badge>
                    )}

                    {/* Hover Actions */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white text-primary">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white text-primary">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="h-6 w-6 mb-2" />
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <Badge variant="secondary" className="mb-2">
                          {item.category}
                        </Badge>
                        <p className="text-sm text-white/90 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-primary group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{item.category}</span>
                      {item.year && <span>{item.year}</span>}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-primary mb-2">No items found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-full p-0 overflow-hidden bg-black">
            {selectedImage && (
              <div className="relative">
                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-white/20"
                  onClick={() => navigateImage("prev")}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-white/20"
                  onClick={() => navigateImage("next")}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white border-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Image */}
                <div className="aspect-video max-h-[80vh]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="p-8 bg-background">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-primary mb-2">{selectedImage.title}</h3>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="outline" className="text-sm">{selectedImage.category}</Badge>
                          {selectedImage.year && (
                            <span className="text-sm text-muted-foreground">{selectedImage.year}</span>
                          )}
                          {selectedImage.client && (
                            <span className="text-sm text-muted-foreground">Client: {selectedImage.client}</span>
                          )}
                          {selectedImage.featured && (
                            <Badge className="bg-primary">Featured Project</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-6">
                      <span>
                        {currentIndex + 1} of {filteredItems.length} in {selectedCategory === "All" ? "gallery" : selectedCategory}
                      </span>
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigateImage("prev")}>
                          ← Previous
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => navigateImage("next")}>
                          Next →
                        </Button>
                      </div>
                    </div>
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