import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Store from "@/pages/Store";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// Removed unused imports - components are in sections folder
import News from "@/pages/News"; // Assumed component

// Placeholder components for new pages.  Replace these with your actual components.
const AboutPage = () => <div>About Us</div>;
const ServicesPage = () => <div>Our Services</div>;
const GalleryPage = () => <div>Image Gallery</div>;
const TeamPage = () => <div>Team Members</div>;
const ContactPage = () => <div>Contact Us</div>;


// Placeholder Testimonials component
const Testimonials = () => {
  return (
    <section>
      <h2>Testimonials</h2>
      {/* Add your carousel implementation here */}
      <p>This is a placeholder for the testimonial carousel.</p>
    </section>
  );
};


function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/store" component={Store} />

        <Route path="/news" component={News} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;