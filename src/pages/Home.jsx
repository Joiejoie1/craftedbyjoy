// src/pages/Home.jsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-6 text-center space-y-6 flex flex-col items-center justify-center min-h-[70vh]">
      {/* Your Profile Picture added here */}
      <div className="relative inline-block animate-fade-in">
        <img 
          src="/joy.png" 
          alt="Joy Gundu" 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-lg mx-auto"
        />
      </div>

      {/* Your Content */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4">
        Welcome to My Portfolio
      </h1>
      
      {/* 3. Merged Action Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        {/* Explore Projects Action */}
        <Button variant="default" className="px-6 py-5 text-base shadow-md hover:scale-105 transition-transform">
          Explore Projects
        </Button>

        {/* CV Download Action */}
        <a 
          href="/Joy_Gundu_CV.pdf" 
          download="Joy_Gundu_CV.pdf"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-base font-medium shadow-md hover:scale-105 transition-transform"
        >
          Download CV 📄
        </a>
      </div>
    </div>
  );
}