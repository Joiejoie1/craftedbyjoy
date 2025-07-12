import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Joy's Portfolio</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <Link
            to="/"
            className="block py-1 text-gray-700 hover:text-blue-500"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-1 text-gray-700 hover:text-blue-500"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block py-1 text-gray-700 hover:text-blue-500"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block py-1 text-gray-700 hover:text-blue-500"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
