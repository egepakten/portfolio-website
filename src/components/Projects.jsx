import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

/**
 * Projects Component
 *
 * To add demo images to your projects:
 * 1. Add your screenshot/demo image to a 'public' or 'assets' folder
 * 2. Replace 'demoImage: null' with 'demoImage: "/path/to/your/image.png"'
 *
 * Example:
 *   demoImage: "/screenshots/ai-saas-platform.png"
 *
 * You can also use external URLs:
 *   demoImage: "https://your-domain.com/demo.png"
 *
 * Until you add images, colorful gradient placeholders will be displayed.
 *
 * Note: Projects are now imported from src/data/projects.js
 * This ensures the project count stays synchronized across components.
 */

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

          {/* Projects Grid */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-navy-light/30 backdrop-blur-sm rounded-lg overflow-hidden border border-accent-cyan/10 hover:border-accent-cyan/30 transition-all shadow-lg hover:shadow-accent-cyan/10 relative"
                  >
                    {/* Demo/Screenshot Section */}
                    <div
                      className="relative h-80 cursor-pointer overflow-hidden"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => {
                        if (project.demoUrl) {
                          window.open(project.demoUrl, "_blank");
                        }
                      }}
                    >
                      {project.demoImage ? (
                        <div className="relative w-full h-full">
                          <img
                            src={project.demoImage}
                            alt={`${project.title} screenshot`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback if image doesn't load
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = `
                                <div class="w-full h-full bg-gradient-to-br ${project.demoGradient} flex items-center justify-center">
                                  <div class="text-white/40 text-sm font-mono">Demo Preview</div>
                                </div>
                              `;
                            }}
                          />
                          {/* Live Demo Badge */}
                          {project.demoType === "live-demo" && (
                            <div className="absolute top-3 right-3 px-3 py-1.5 bg-green-500/90 backdrop-blur-sm rounded-full flex items-center gap-2 shadow-lg">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                              <span className="text-white text-xs font-bold">
                                LIVE
                              </span>
                            </div>
                          )}
                        </div>
                      ) : project.demoType === "live-demo" ? (
                        // Live Demo Preview
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.demoGradient} flex items-center justify-center p-6 relative overflow-hidden`}
                        >
                          {/* Animated background elements */}
                          <div className="absolute inset-0">
                            <div className="absolute top-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute bottom-4 right-4 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-700" />
                          </div>

                          {/* Main content */}
                          <div className="relative z-10 text-center">
                            <div className="mb-4">
                              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30 shadow-2xl">
                                <svg
                                  className="w-10 h-10 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                  />
                                </svg>
                              </div>
                            </div>
                            <h4 className="text-white text-lg font-bold mb-2">
                              Live Demo Available
                            </h4>
                            <p className="text-white/80 text-xs mb-4 max-w-[200px] mx-auto">
                              Click to try the interactive demo
                            </p>
                            <div className="flex items-center justify-center gap-2 text-white/60 text-[10px] font-mono">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                              <span>Deployed on Vercel</span>
                            </div>
                          </div>
                        </div>
                      ) : project.demoType === "login" ? (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.demoGradient} flex items-center justify-center p-8`}
                        >
                          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 w-full max-w-sm">
                            <div className="text-center mb-6">
                              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <svg
                                  className="w-8 h-8 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                              </div>
                              <h3 className="text-xl font-bold text-gray-800 mb-1">
                                Welcome Back
                              </h3>
                              <p className="text-xs text-gray-500">
                                Enter your credentials to continue
                              </p>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <input
                                  type="email"
                                  placeholder="Email address"
                                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-700"
                                  readOnly
                                />
                              </div>
                              <div>
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-700"
                                  readOnly
                                />
                              </div>
                              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-md text-xs font-semibold hover:shadow-lg transition-all">
                                Sign In
                              </button>
                              <div className="flex items-center justify-between text-[10px] text-gray-500">
                                <label className="flex items-center gap-1">
                                  <input type="checkbox" className="w-3 h-3" />
                                  Remember me
                                </label>
                                <a
                                  href="#"
                                  className="text-cyan-600 hover:underline"
                                >
                                  Forgot?
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.demoGradient} flex items-center justify-center relative`}
                        >
                          {/* Placeholder content */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-4 left-4 right-4 h-8 bg-white/20 rounded" />
                            <div className="absolute top-16 left-4 right-4 bottom-4 bg-white/10 rounded grid grid-cols-3 gap-2 p-2">
                              <div className="bg-white/20 rounded" />
                              <div className="bg-white/20 rounded" />
                              <div className="bg-white/20 rounded" />
                            </div>
                          </div>
                          <div className="text-white/40 text-sm font-mono">
                            Demo Preview
                          </div>
                        </div>
                      )}
                      {/* Overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm flex items-center justify-center"
                      >
                        <span className="text-accent-cyan text-sm font-mono">
                          {project.demoUrl
                            ? "View live demo →"
                            : "Click to view demo →"}
                        </span>
                      </motion.div>
                    </div>

                    {/* Code Editor Header */}
                    <div className="bg-[#1e293b]/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-accent-cyan/10">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs text-gray-400 font-mono ml-2">
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.
                          {project.title.includes("Python") ? "py" : "js"}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.liveLink}
                          className="p-1 hover:bg-accent-cyan/10 rounded transition-colors"
                          onClick={(e) => e.stopPropagation()}
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
                        <a
                          href={project.githubLink}
                          className="p-1 hover:bg-accent-cyan/10 rounded transition-colors"
                          onClick={(e) => e.stopPropagation()}
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

                    {/* Code Display */}
                    <div className="bg-[#0f172a]/50 p-4 font-mono text-sm overflow-hidden max-h-48">
                      <pre className="text-gray-300 leading-relaxed text-xs">
                        <code>{project.code}</code>
                      </pre>
                    </div>

                    {/* Project Info */}
                    <div className="p-4 bg-[#1e293b]/60 backdrop-blur-sm border-t border-accent-cyan/10">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold group-hover:text-accent-cyan transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 items-center">
                          <span
                            className={`px-2 py-1 rounded text-[10px] font-bold ${
                              project.status === "PRODUCTION"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            }`}
                          >
                            {project.status}
                          </span>
                          <span className="text-xs text-gray-500 font-mono">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan rounded text-[10px] font-mono border border-accent-cyan/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, transparent 50%)",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
