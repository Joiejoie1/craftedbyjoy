import { motion } from "framer-motion";

export default function About() {
  return (
    // AOS handles the big "fade-up" when the page loads/scrolls
    <div data-aos="fade-up" className="max-w-2xl mx-auto py-10">
      
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      
      {/* Framer Motion handles the specific interaction or subtle text fade */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-muted-foreground"
      >
        I’m Joy, a frontend developer passionate about design and interactivity.
      </motion.p>

      {/* Example: A hover effect AOS can't do easily */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="mt-6 p-4 border rounded-xl bg-secondary cursor-pointer"
      >
        Check out my toolkit below!
      </motion.div>
    </div>
  );
}
