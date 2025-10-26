import { useEffect, useState, useMemo } from "react";
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
  fullImageUrl?: string;
}

// Modern gallery collection with real furniture images
// Read Cloudinary cloud name from Vite env (create VITE_CLOUD_NAME in .env if you want)
const CLOUD_NAME = (import.meta as any).env?.VITE_CLOUD_NAME || "your-cloud-name";
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// helper: build a thumbnail URL (low weight) and full URL
const thumb = (publicId: string, opts = "w_600,h_450,c_fill,q_auto,f_auto") =>
  `${CLOUDINARY_BASE}/${opts}/${publicId}`;
const full = (publicId: string, opts = "q_auto,f_auto") =>
  `${CLOUDINARY_BASE}/${opts}/${publicId}`;

export default function GalleryPage() {
  const [allGalleryItems, setAllGalleryItems] = useState<GalleryItem[]>([]);
  const [loadingManifest, setLoadingManifest] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [layoutMode, setLayoutMode] = useState("grid");

  const layoutModes = [
    { id: "grid", label: "Grid", icon: Grid },
    { id: "masonry", label: "Masonry", icon: Filter },
  ];

  useEffect(() => {
    // fetch manifest placed in public/ (so path is '/gallery.json' from app root)
    fetch("/gallery.json")
      .then((r) => r.json())
      .then((data: Array<any>) => {
        // Map manifest to the GalleryItem shape, applying thumbnail URLs for grid
        const mapped = data.map((d, idx) => ({
          id: d.id ?? `${idx + 1}`,
          title: d.title ?? d.imagePublicId.split("/").pop()?.replace(/\.\w+$/, ""),
          category: d.category ?? "Gallery",
          image: thumb(d.imagePublicId),      // used in grid
          fullImageUrl: full(d.imagePublicId),// we'll use when opening modal
          description: d.description ?? "",
          featured: !!d.featured,
          year: d.year,
          client: d.client,
        }));
        setAllGalleryItems(mapped);
      })
      .catch((err) => {
        console.error("Failed to load gallery manifest", err);
      })
      .finally(() => setLoadingManifest(false));
  }, []);

  // derive categories from loaded items
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allGalleryItems.map(i => i.category).filter(Boolean)));
    return ["All", ...cats];
  }, [allGalleryItems]);

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
  }, [allGalleryItems, selectedCategory, searchQuery]);

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
          className={`grid gap-6 ${layoutMode === "masonry"
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
                    className={`relative overflow-hidden ${layoutMode === "masonry" ? "aspect-[4/5]" : "aspect-square"
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
                    src={selectedImage.fullImageUrl ?? selectedImage.image}
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