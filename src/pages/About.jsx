// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  // Animation variants for the skills list to reveal them one by one
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const skills = [
    "React", "JavaScript", "TypeScript", "Gatsby", 
    "Tailwind CSS", "Next.js", "Git & GitHub", "REST APIs"
  ];

  return (
    // AOS handles the main container fading up smoothly on entry
    <div data-aos="fade-up" className="max-w-3xl mx-auto py-12 px-4 space-y-12">
      
      {/* Header & Bio Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">About Me</h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          I’m Joy, a frontend developer and open-source contributor passionate about building fast, interactive, and beautifully accessible web applications. I love diving into the React ecosystem, modern developer tools, and collaborating on cloud-native software ecosystems.
        </motion.p>
      </section>

      {/* Focus Pillars (Cards showcasing your core strengths) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-5 border rounded-xl bg-card text-card-foreground shadow-sm transition-colors"
        >
          <h3 className="font-semibold text-lg text-primary mb-2">🌐 Open Source</h3>
          <p className="text-sm text-muted-foreground">
            Actively managing code reviews, triaging issues, and modernizing user interface libraries across developer tooling and open-source repositories.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-5 border rounded-xl bg-card text-card-foreground shadow-sm transition-colors"
        >
          <h3 className="font-semibold text-lg text-primary mb-2">♿ Web Accessibility</h3>
          <p className="text-sm text-muted-foreground">
            Committed to building inclusive digital web platforms focusing on robust keyboard navigation, descriptive ARIA structures, and seamless semantic screen reader configurations.
          </p>
        </motion.div>
      </section>

      {/* Toolkit/Skills Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">My Toolkit</h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              className="px-4 py-2 border rounded-full bg-secondary text-secondary-foreground text-sm font-medium cursor-default transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>

    </div>
  );
}