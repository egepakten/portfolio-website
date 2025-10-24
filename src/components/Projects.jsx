import { useState, useMemo } from "react";
import { motion } from "framer-motion";

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
 */

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const projects = [
    {
      title: "AI SaaS Platform",
      description:
        "A cutting-edge SaaS platform powered by AI that helps businesses automate their workflows and increase productivity.",
      code: `// AI-powered workflow automation
const analyzeWorkflow = async (data) => {
  const model = await openai.complete({
    prompt: "Optimize workflow...",
    temperature: 0.7
  });
  return model.optimizations;
};`,
      demoImage: null, // Replace with your screenshot URL
      demoGradient: "from-purple-500 via-pink-500 to-rose-500",
      technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
      liveLink: "https://github.com/egepakten", // Replace with your live demo URL
      githubLink: "https://github.com/egepakten", // Replace with your GitHub repo URL
      status: "PRODUCTION",
      year: "2025",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Comprehensive admin dashboard with real-time analytics, inventory management, and customer insights.",
      code: `// Real-time analytics engine
app.get('/api/analytics', async (req, res) => {
  const metrics = await Analytics
    .aggregate([
      { $match: { date: today } },
      { $group: { _id: "$product" } }
    ]);
  res.json(metrics);
});`,
      demoImage: null, // Replace with your screenshot URL
      demoGradient: "from-cyan-500 via-blue-500 to-indigo-500",
      demoType: "login", // Special type for login demo
      demoUrl: "https://www.wiseuni.co.uk/", // Reference URL
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "https://github.com/egepakten", // Replace with your live demo URL
      githubLink: "https://github.com/egepakten", // Replace with your GitHub repo URL
      status: "PRODUCTION",
      year: "2025",
    },
    {
      title: "Social Media App",
      description:
        "Modern social platform with real-time messaging, stories, and content sharing capabilities.",
      code: `// Real-time messaging with Socket.io
socket.on('message', (data) => {
  const message = {
    user: data.userId,
    content: encrypt(data.text),
    timestamp: Date.now()
  };
  io.emit('newMessage', message);
});`,
      demoImage: null, // Replace with your screenshot URL
      demoGradient: "from-green-500 via-emerald-500 to-teal-500",
      technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
      liveLink: "https://github.com/egepakten", // Replace with your live demo URL
      githubLink: "https://github.com/egepakten", // Replace with your GitHub repo URL
      status: "DEVELOPMENT",
      year: "2025",
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "Real-time cryptocurrency portfolio tracker with price alerts and market analysis.",
      code: `// Crypto price monitoring
const trackPrices = async () => {
  const prices = await fetch(
    'https://api.coingecko.com/api/v3/coins'
  );
  const alerts = checkAlerts(prices);
  await notifyUsers(alerts);
};`,
      demoImage: null, // Replace with your screenshot URL
      demoGradient: "from-yellow-500 via-orange-500 to-red-500",
      technologies: ["Vue.js", "Express", "Redis", "CoinGecko API"],
      liveLink: "https://github.com/egepakten", // Replace with your live demo URL
      githubLink: "https://github.com/egepakten", // Replace with your GitHub repo URL
      status: "PRODUCTION",
      year: "2024",
    },
    {
      title: "Design System",
      description:
        "Comprehensive component library and design system for building consistent user interfaces.",
      code: `// Component library export
export const Button = ({ 
  variant, size, children 
}) => {
  const classes = clsx(
    baseStyles[variant],
    sizeStyles[size]
  );
  return <button className={classes}>
    {children}
  </button>;
};`,
      demoImage: null, // Replace with your screenshot URL
      demoGradient: "from-red-500 via-pink-500 to-fuchsia-500",
      technologies: ["React", "Storybook", "Tailwind", "TypeScript"],
      liveLink: "https://github.com/egepakten", // Replace with your live demo URL
      githubLink: "https://github.com/egepakten", // Replace with your GitHub repo URL
      status: "PRODUCTION",
      year: "2024",
    },
    {
      title: "Task Management Tool",
      description:
        "Collaborative project management tool with kanban boards, time tracking, and team chat.",
      code: `// Task state management
@Injectable()
export class TaskService {
  async moveTask(id: string, status: Status) {
    await this.taskRepository.update(id, {
      status,
      updatedAt: new Date()
    });
    this.gateway.broadcast('taskMoved', id);
  }
}`,
      demoImage: null, // Replace with your screenshot URL
      demoGradient: "from-indigo-500 via-purple-500 to-violet-500",
      technologies: ["Angular", "NestJS", "PostgreSQL", "WebSockets"],
      liveLink: "https://github.com/egepakten", // Replace with your live demo URL
      githubLink: "https://github.com/egepakten", // Replace with your GitHub repo URL
      status: "DEVELOPMENT",
      year: "2025",
    },
  ];

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

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 flex items-center">
            <span className="text-accent-cyan font-mono mr-4">03.</span>
            Projects
            <div className="ml-8 h-[1px] flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </h2>

          {/* Project Count */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">
              Total projects: {filteredProjects.length}
            </p>
          </div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-accent-cyan">
                  Filter by tags
                </h3>
              </div>
              {selectedFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-400 hover:text-accent-cyan transition-colors underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                    selectedFilters.includes(tech)
                      ? "bg-accent-cyan text-navy-dark font-semibold"
                      : "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 hover:bg-accent-cyan/20"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {selectedFilters.length > 0 && (
              <div className="mt-4 pt-4 border-t border-accent-cyan/20">
                <p className="text-sm text-gray-400">
                  Active filters:{" "}
                  <span className="text-accent-cyan font-semibold">
                    {selectedFilters.join(", ")}
                  </span>
                </p>
              </div>
            )}
          </motion.div>

          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg mb-2">
                No projects match the selected filters
              </p>
              <button
                onClick={clearFilters}
                className="text-accent-cyan hover:underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative cursor-pointer"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-lg overflow-hidden h-full flex flex-col border border-accent-cyan/10"
                  >
                    {/* Demo Preview Section */}
                    <div className="relative h-48 overflow-hidden">
                      {project.demoImage ? (
                        <img
                          src={project.demoImage}
                          alt={`${project.title} demo`}
                          className="w-full h-full object-cover"
                        />
                      ) : project.demoType === "login" ? (
                        // Interactive Login Demo
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.demoGradient} flex items-center justify-center p-6`}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 w-full max-w-[280px] shadow-2xl">
                            <div className="text-center mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-white"
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
                              <h3 className="text-lg font-bold text-gray-800">
                                Welcome Back
                              </h3>
                              <p className="text-xs text-gray-500">
                                Sign in to continue
                              </p>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Email or Username"
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
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.js
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
