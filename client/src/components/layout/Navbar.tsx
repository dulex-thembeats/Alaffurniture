import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", sectionId: "hero" },
  { name: "About", sectionId: "about" },
  { name: "Services", sectionId: "services" },
  { name: "Gallery", sectionId: "gallery" },
  { name: "Team", sectionId: "team" },
  { name: "Contact", sectionId: "contact" },
  { name: "Store", href: "/store", icon: ShoppingBag, className: "ml-6" }
];

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 80; // Account for fixed navbar
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.sectionId) {
      // If not on home page, navigate to home first then scroll
      if (location !== '/') {
        setLocation('/');
        // Wait a bit for navigation to complete, then scroll
        setTimeout(() => {
          smoothScrollTo(item.sectionId!);
        }, 100);
      } else {
        // Already on home page, just scroll
        smoothScrollTo(item.sectionId);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => handleNavClick({ name: "Home", sectionId: "hero" })}>
              <img src="/images/alaf-logo.png" alt="ALAF Furniture" className="h-12 w-auto cursor-pointer" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-primary hover:text-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${item.className || ''}`}
                >
                  {item.name}
                  {item.icon && <item.icon className="ml-1 h-4 w-4 text-primary" />}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-primary hover:text-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${item.className || ''}`}
                >
                  {item.name}
                  {item.icon && <item.icon className="ml-1 h-4 w-4 text-primary" />}
                </button>
              )
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-primary hover:text-primary/80 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.icon && <item.icon className="ml-1 h-4 w-4 text-primary" />}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-primary hover:text-primary/80 block px-3 py-2 rounded-md text-base font-medium flex items-center w-full text-left"
                  >
                    {item.name}
                    {item.icon && <item.icon className="ml-1 h-4 w-4 text-primary" />}
                  </button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}