import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Success from "./pages/Success"; // Import it
import { ThemeProvider } from "./components/theme-provider.jsx"; // Added this back for your theme

export default function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true, // Only animate once while scrolling down
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        
        {/* Main Content Area */}
        <div className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} /> {/* Add this line */}
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}