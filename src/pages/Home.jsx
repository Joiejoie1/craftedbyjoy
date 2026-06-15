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
      
      <p className="text-muted-foreground max-w-md mx-auto text-lg">
        Frontend Engineer & Open Source Contributor.
      </p>

      <Button variant="default" className="mt-2 px-6 py-5 text-base shadow-md hover:scale-105 transition-transform">
        Explore Projects
      </Button>
    </div>
  );
}