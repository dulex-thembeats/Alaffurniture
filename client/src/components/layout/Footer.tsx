import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const contactInfo = [
  { icon: Mail, text: "info@alaf.com", href: "mailto:info@alaf.com" },
  { icon: Phone, text: "+234 909 999 3888", href: "tel:+234 806 060 9123" },
  {
    icon: MapPin,
    text: "No 5 LADAN SHAREHU STREET BY GGSS KAWO KADUNA",
    href: "https://maps.google.com",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Twitter, href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <img src="/images/alaf-logo.png" alt="ALAF Furniture" className="h-16 w-auto" />
            </Link>
            <p className="mt-4 text-primary-foreground/80">
              ALAF creates luxury furniture and interior design solutions that blend
              modern sophistication with timeless elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-primary-foreground/80 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start gap-2">
                  <item.icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <a
                    href={item.href}
                    className="hover:text-primary-foreground/80 transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors hover:text-primary-foreground/80"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} ALAF Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}