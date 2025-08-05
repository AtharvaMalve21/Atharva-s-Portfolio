import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12 lg:px-24 xl:px-36 font-sans relative bg-[#0f0a1f] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
          MY PROJECTS
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A showcase of my recent work demonstrating skills in full-stack development, design, and modern web technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative bg-[#1a1130] border border-[#2e264b] rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-600/30 transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#3a2f5b] text-xs text-purple-300 font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative bg-[#1a1130] border border-[#2e264b] rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up">
            <button
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-transparent p-2 hover:text-purple-500 transition"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="md:w-1/2 p-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-xl object-cover shadow-md"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h3 className="text-3xl font-bold mb-3">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#3a2f5b] text-xs text-purple-300 font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#2e264b] hover:bg-purple-800 text-gray-300 px-6 py-3 rounded-lg text-lg font-semibold transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
