import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    /* CHANGED: bg-background, text-foreground, and border-b */
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* CHANGED: text-primary for a pop of color */}
        <h1 className="text-2xl font-bold text-primary">Joy's Portfolio</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        /* CHANGED: bg-background/95 and text-foreground */
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2 shadow-xl">
          <Link to="/" className="block py-2 hover:text-primary" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-primary" onClick={closeMenu}>About</Link>
          <Link to="/projects" className="block py-2 hover:text-primary" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" className="block py-2 hover:text-primary" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}