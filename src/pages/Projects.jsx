// Projects.jsx
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <div key={idx} className="border rounded shadow hover:shadow-lg p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
          <p className="text-sm">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            className="text-blue-600 mt-2 inline-block"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}
