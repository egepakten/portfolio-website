import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  // Technology metadata (icons and categories)
  const techMetadata = {
    React: { icon: "⚛️", category: "Frontend" },
    TypeScript: { icon: "📘", category: "Language" },
    "Node.js": { icon: "🟢", category: "Backend" },
    Python: { icon: "🐍", category: "Language" },
    "Next.js": { icon: "▲", category: "Framework" },
    "Tailwind CSS": { icon: "🎨", category: "Styling" },
    PostgreSQL: { icon: "🐘", category: "Database" },
    MongoDB: { icon: "🍃", category: "Database" },
    AWS: { icon: "☁️", category: "Cloud" },
    "AWS Lambda": { icon: "λ", category: "Cloud" },
    DynamoDB: { icon: "🗄️", category: "Database" },
    "API Gateway": { icon: "🚪", category: "Cloud" },
    Serverless: { icon: "⚡", category: "Architecture" },
    Docker: { icon: "🐳", category: "DevOps" },
    Git: { icon: "📦", category: "Tools" },
    GraphQL: { icon: "◈", category: "API" },
    Flask: { icon: "🧪", category: "Backend" },
    "Machine Learning": { icon: "🤖", category: "AI" },
    "Q-Learning": { icon: "🎓", category: "AI" },
    "Reinforcement Learning": { icon: "🧠", category: "AI" },
    AST: { icon: "🌳", category: "Tools" },
    JavaScript: { icon: "📜", category: "Language" },
    CSS: { icon: "🎨", category: "Styling" },
    HTML: { icon: "📄", category: "Language" },
    Makefile: { icon: "⚙️", category: "Tools" },
    PowerShell: { icon: "💻", category: "Language" },
    C: { icon: "©️", category: "Language" },
    Shell: { icon: "🐚", category: "Language" },
  };

  // Dynamically generate technologies from projects
  const technologies = useMemo(() => {
    const techMap = new Map();

    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (!techMap.has(tech)) {
          techMap.set(tech, {
            name: tech,
            icon: techMetadata[tech]?.icon || "💻",
            category: techMetadata[tech]?.category || "Other",
            projectCount: 0,
          });
        }
        const techData = techMap.get(tech);
        techData.projectCount += 1;
      });
    });

    return Array.from(techMap.values());
  }, []);

  // Dynamically generate project-technology mapping
  const projectTechUsage = useMemo(() => {
    const techProjects = {};

    projects.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (!techProjects[tech]) {
          techProjects[tech] = [];
        }

        // Use real language data from project if available
        const languages = project.languages || [];

        techProjects[tech].push({
          project: project.title,
          languages: languages,
        });
      });
    });

    return techProjects;
  }, []);

  const categories = [...new Set(technologies.map((tech) => tech.category))];

  return (
    <section
      id="tech"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 flex items-center">
            <span className="text-accent-cyan font-mono mr-4">04.</span>
            Tech Stack
            <div className="ml-8 h-[1px] flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </h2>

          {/* Hint */}
          <p className="text-gray-400 text-center mb-8">
            💡 Click on any technology to see which projects use it
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedTech(tech.name)}
                className="relative"
              >
                <div className="glass rounded-lg p-6 text-center cursor-pointer hover:border-accent-cyan/50 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  {/* Clickable indicator */}
                  {projectTechUsage[tech.name] && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                  )}

                  <div className="text-5xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{tech.name}</h3>
                  <span className="text-xs text-accent-cyan font-mono">
                    {tech.category}
                  </span>

                  {/* Project count badge */}
                  <div className="mt-4">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {tech.projectCount}
                    </div>
                    <p className="text-xs text-gray-400">
                      Project{tech.projectCount > 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Hover Overlay - Simplified */}
                  <AnimatePresence>
                    {hoveredTech === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 glass rounded-lg border-2 border-accent-cyan flex flex-col items-center justify-center p-4 z-10"
                      >
                        <div className="text-5xl mb-3">{tech.icon}</div>
                        <h3 className="font-bold text-white mb-2 text-lg">
                          {tech.name}
                        </h3>

                        {/* Show click hint */}
                        {projectTechUsage[tech.name] && (
                          <p className="text-sm text-accent-cyan font-mono text-center">
                            Click to see projects
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Legend */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 glass rounded-full text-sm"
              >
                <span className="text-accent-cyan">●</span> {category}
              </motion.div>
            ))}
          </div>

          {/* Project Usage Modal */}
          <AnimatePresence>
            {selectedTech && projectTechUsage[selectedTech] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTech(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="glass rounded-xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto border-2 border-accent-cyan/30"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">
                        {selectedTech}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {projectTechUsage[selectedTech]?.length || 0} project
                        {projectTechUsage[selectedTech]?.length !== 1
                          ? "s"
                          : ""}{" "}
                        using this technology
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedTech(null)}
                      className="p-2 hover:bg-accent-cyan/10 rounded-lg transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-gray-400 hover:text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Projects List */}
                  <div className="space-y-6">
                    {projectTechUsage[selectedTech].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass rounded-lg p-6"
                      >
                        {/* Project Name */}
                        <h4 className="text-xl font-bold mb-4 text-accent-cyan">
                          {item.project}
                        </h4>

                        {/* Language Bar */}
                        <div className="mb-4">
                          <div className="h-3 rounded-full overflow-hidden flex">
                            {item.languages.map((lang, i) => (
                              <div
                                key={i}
                                style={{
                                  width: `${lang.percentage}%`,
                                  backgroundColor: lang.color,
                                }}
                                className="transition-all duration-300 hover:opacity-80"
                                title={`${lang.name}: ${lang.percentage}%`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Language List */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {item.languages.map((lang, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: lang.color }}
                              />
                              <div className="text-sm">
                                <span className="font-mono text-gray-300">
                                  {lang.name}
                                </span>
                                <span className="ml-2 text-accent-cyan font-bold">
                                  {lang.percentage}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer Info */}
                  <div className="mt-6 pt-6 border-t border-accent-cyan/20">
                    <p className="text-gray-400 text-sm text-center">
                      💡 Click outside to close • Language percentages are from
                      GitHub repository analysis
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
