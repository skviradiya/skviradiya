import React from "react";

interface Project {
  name: string;
  description: string;
}

const projectData: Project[] = [
  { name: "Project 1", description: "Description of your first project." },
  { name: "Project 2", description: "Description of your second project." },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projectData.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
