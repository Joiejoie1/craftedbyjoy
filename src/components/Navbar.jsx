import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b px-4 py-3 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold">Joy's Portfolio</h1>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <XMarkIcon className="h-6" />
        ) : (
          <Bars3Icon className="h-6" />
        )}
      </button>
      <div className={`md:flex gap-4 ${menuOpen ? "block" : "hidden"}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
