import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedFilters.length === 0) return projects;
    return projects.filter((project) =>
      selectedFilters.every((filter) => project.technologies.includes(filter))
    );
  }, [selectedFilters]);

  // Toggle filter selection
  const toggleFilter = (tech) => {
    setSelectedFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  // Navigation functions
  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  // Reset index when filters change
  useMemo(() => {
    setCurrentProjectIndex(0);
  }, [selectedFilters]);

  const currentProject = filteredProjects[currentProjectIndex];

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light via-navy-dark to-navy-light opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-accent-cyan font-mono text-sm mb-2 block">
                03. Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured Projects
              </h2>
              <div className="h-1 w-20 bg-accent-cyan mx-auto" />
            </motion.div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A showcase of my work spanning full-stack development, AI
              integration, and modern web technologies
            </p>
          </div>

          {/* Technology Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                  selectedFilters.includes(tech)
                    ? "bg-accent-cyan text-navy-dark"
                    : "bg-navy-light/50 text-gray-400 hover:bg-accent-cyan/10 hover:text-accent-cyan border border-accent-cyan/20"
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          {/* Project Carousel */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No projects found with the selected technologies
              </p>
              <button
                onClick={() => setSelectedFilters([])}
                className="mt-4 px-6 py-2 bg-accent-cyan text-navy-dark rounded-lg hover:bg-accent-cyan/80 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="relative">
              {/* Project Counter */}
              <div className="text-center mb-6">
                <span className="text-accent-cyan font-mono text-sm">
                  Project {currentProjectIndex + 1} of {filteredProjects.length}
                </span>
              </div>

              {/* Carousel Container */}
              <div className="relative max-w-7xl mx-auto">
                {/* Navigation Arrows */}
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      onClick={prevProject}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-14 h-14 rounded-full bg-accent-cyan/10 hover:bg-accent-cyan/20 border-2 border-accent-cyan/30 hover:border-accent-cyan flex items-center justify-center transition-all"
                      aria-label="Previous project"
                    >
                      <svg
                        className="w-7 h-7 text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextProject}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-14 h-14 rounded-full bg-accent-cyan/10 hover:bg-accent-cyan/20 border-2 border-accent-cyan/30 hover:border-accent-cyan flex items-center justify-center transition-all"
                      aria-label="Next project"
                    >
                      <svg
                        className="w-7 h-7 text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Project Card */}
                <AnimatePresence mode="wait">
                  {currentProject && (
                    <motion.div
                      key={currentProjectIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.4 }}
                      className="bg-navy-light/30 backdrop-blur-sm rounded-lg overflow-hidden border border-accent-cyan/10 hover:border-accent-cyan/30 transition-all shadow-2xl"
                    >
                      {/* Side-by-side Layout */}
                      <div className="flex flex-col lg:flex-row">
                        {/* Left Side: Demo Image */}
                        <div className="lg:w-2/5">
                          <div
                            className={`relative h-96 lg:h-full cursor-pointer group ${
                              currentProject.demoType === "game"
                                ? "bg-black flex items-center justify-center"
                                : ""
                            }`}
                            onClick={() => {
                              // Open demo URL if available, otherwise open GitHub
                              const url =
                                currentProject.demoUrl ||
                                currentProject.githubLink;
                              if (url) {
                                window.open(url, "_blank");
                              }
                            }}
                          >
                            {currentProject.demoImage ? (
                              <img
                                src={currentProject.demoImage}
                                alt={`${currentProject.title} screenshot`}
                                className={`${
                                  currentProject.demoType === "game"
                                    ? "max-h-full max-w-full object-contain"
                                    : "w-full h-full object-cover"
                                }`}
                              />
                            ) : (
                              <div
                                className={`w-full h-full bg-gradient-to-br ${currentProject.demoGradient} flex items-center justify-center`}
                              >
                                <div className="text-white/40 text-sm font-mono">
                                  Demo Preview
                                </div>
                              </div>
                            )}

                            {/* Live Badge */}
                            {currentProject.demoType === "live-demo" && (
                              <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-500/90 backdrop-blur-sm rounded-full flex items-center gap-2 shadow-lg">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                <span className="text-white text-xs font-bold">
                                  LIVE
                                </span>
                              </div>
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-center">
                                <svg
                                  className="w-12 h-12 text-accent-cyan mx-auto mb-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  {currentProject.demoUrl ? (
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  ) : (
                                    <path
                                      fillRule="evenodd"
                                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                      clipRule="evenodd"
                                      fill="currentColor"
                                      stroke="none"
                                    />
                                  )}
                                </svg>
                                <span className="text-accent-cyan text-sm font-mono">
                                  {currentProject.demoUrl
                                    ? "View Deployed Project →"
                                    : "View on GitHub →"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side: Project Info */}
                        <div className="lg:w-3/5 flex flex-col">
                          {/* Header with Title and Status */}
                          <div className="p-6 bg-[#1e293b]/60 backdrop-blur-sm border-b border-accent-cyan/10">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                  {currentProject.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  {currentProject.description}
                                </p>
                              </div>
                              <div className="flex flex-col items-end gap-2 ml-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                                    currentProject.status === "PRODUCTION"
                                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                                  }`}
                                >
                                  {currentProject.status}
                                </span>
                                <span className="text-sm text-gray-500 font-mono">
                                  {currentProject.year}
                                </span>
                              </div>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {currentProject.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-xs font-mono border border-accent-cyan/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Code Section */}
                          <div className="flex-1 flex flex-col">
                            {/* Code Editor Header */}
                            <div className="bg-[#1e293b]/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-accent-cyan/10">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-xs text-gray-400 font-mono ml-2">
                                  {currentProject.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}
                                  .
                                  {currentProject.title.includes("Python")
                                    ? "py"
                                    : "js"}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                {currentProject.liveLink && (
                                  <a
                                    href={currentProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 hover:bg-accent-cyan/10 rounded transition-colors"
                                  >
                                    <svg
                                      className="w-4 h-4 text-accent-cyan"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  </a>
                                )}
                                <a
                                  href={currentProject.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 hover:bg-accent-cyan/10 rounded transition-colors"
                                >
                                  <svg
                                    className="w-4 h-4 text-accent-cyan"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>

                            {/* Code Display - Full Content */}
                            <div className="flex-1 bg-[#0f172a]/50 p-6 font-mono text-sm overflow-y-auto">
                              <pre className="text-gray-300 leading-relaxed">
                                <code>{currentProject.code}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pagination Dots */}
                {filteredProjects.length > 1 && (
                  <div className="flex justify-center gap-2 mt-8">
                    {filteredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProjectIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentProjectIndex
                            ? "bg-accent-cyan w-8"
                            : "bg-accent-cyan/30 hover:bg-accent-cyan/50"
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
