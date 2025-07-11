// About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p>
        I’m Joy, a frontend developer passionate about design and interactivity.
      </p>
    </motion.div>
  );
}
