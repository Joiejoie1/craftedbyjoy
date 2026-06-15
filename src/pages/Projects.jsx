// src/pages/Projects.jsx
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-8" data-aos="fade-up">
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">My Projects</h1>
        <p className="text-muted-foreground">A curated showcase of applications, interfaces, and technical repositories I've engineered.</p>
      </div>

      {/* Grid container with balanced column breaks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col justify-between border border-border rounded-xl bg-card text-card-foreground shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            {/* Project Image Header with Hover Scale */}
            <div className="overflow-hidden bg-muted relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-foreground shadow-sm">
                {project.type}
              </span>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tag Badges Section */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags?.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link Button */}
              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium shadow-sm transition-colors"
                >
                  {project.type === "Live App" ? "Launch Application 🚀" : "Explore Source Code 💻"}
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
