import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    { name: "React", proficiency: 95, icon: "⚛️", category: "Frontend" },
    { name: "TypeScript", proficiency: 90, icon: "📘", category: "Language" },
    { name: "Node.js", proficiency: 88, icon: "🟢", category: "Backend" },
    { name: "Python", proficiency: 85, icon: "🐍", category: "Language" },
    { name: "Next.js", proficiency: 92, icon: "▲", category: "Framework" },
    { name: "Tailwind CSS", proficiency: 95, icon: "🎨", category: "Styling" },
    { name: "PostgreSQL", proficiency: 80, icon: "🐘", category: "Database" },
    { name: "MongoDB", proficiency: 85, icon: "🍃", category: "Database" },
    { name: "AWS", proficiency: 75, icon: "☁️", category: "Cloud" },
    { name: "Docker", proficiency: 82, icon: "🐳", category: "DevOps" },
    { name: "Git", proficiency: 90, icon: "📦", category: "Tools" },
    { name: "GraphQL", proficiency: 78, icon: "◈", category: "API" },
    { name: "Flask", proficiency: 85, icon: "🐍", category: "Backend" },
    { name: "Machine Learning", proficiency: 80, icon: "🤖", category: "AI" },
  ];

  // Project-Technology mapping with language percentages (demo data)
  const projectTechUsage = {
    React: [
      {
        project: "Python Static Code Analyzer",
        languages: [
          { name: "Python", percentage: 65.4, color: "#3572A5" },
          { name: "TypeScript", percentage: 18.2, color: "#3178c6" },
          { name: "JavaScript", percentage: 12.1, color: "#f1e05a" },
          { name: "CSS", percentage: 3.3, color: "#563d7c" },
          { name: "HTML", percentage: 1.0, color: "#e34c26" },
        ],
      },
      {
        project: "AI SaaS Platform",
        languages: [
          { name: "TypeScript", percentage: 52.1, color: "#3178c6" },
          { name: "JavaScript", percentage: 28.3, color: "#f1e05a" },
          { name: "CSS", percentage: 15.6, color: "#563d7c" },
          { name: "HTML", percentage: 4.0, color: "#e34c26" },
        ],
      },
      {
        project: "E-Commerce Dashboard",
        languages: [
          { name: "JavaScript", percentage: 45.2, color: "#f1e05a" },
          { name: "TypeScript", percentage: 32.8, color: "#3178c6" },
          { name: "CSS", percentage: 18.0, color: "#563d7c" },
          { name: "HTML", percentage: 4.0, color: "#e34c26" },
        ],
      },
    ],
    TypeScript: [
      {
        project: "Python Static Code Analyzer",
        languages: [
          { name: "Python", percentage: 65.4, color: "#3572A5" },
          { name: "TypeScript", percentage: 18.2, color: "#3178c6" },
          { name: "JavaScript", percentage: 12.1, color: "#f1e05a" },
          { name: "CSS", percentage: 3.3, color: "#563d7c" },
          { name: "HTML", percentage: 1.0, color: "#e34c26" },
        ],
      },
      {
        project: "AI SaaS Platform",
        languages: [
          { name: "TypeScript", percentage: 52.1, color: "#3178c6" },
          { name: "JavaScript", percentage: 28.3, color: "#f1e05a" },
          { name: "CSS", percentage: 15.6, color: "#563d7c" },
          { name: "HTML", percentage: 4.0, color: "#e34c26" },
        ],
      },
      {
        project: "Design System",
        languages: [
          { name: "TypeScript", percentage: 68.5, color: "#3178c6" },
          { name: "CSS", percentage: 22.1, color: "#563d7c" },
          { name: "JavaScript", percentage: 7.4, color: "#f1e05a" },
          { name: "HTML", percentage: 2.0, color: "#e34c26" },
        ],
      },
    ],
    "Node.js": [
      {
        project: "AI SaaS Platform",
        languages: [
          { name: "TypeScript", percentage: 52.1, color: "#3178c6" },
          { name: "JavaScript", percentage: 28.3, color: "#f1e05a" },
          { name: "CSS", percentage: 15.6, color: "#563d7c" },
          { name: "HTML", percentage: 4.0, color: "#e34c26" },
        ],
      },
      {
        project: "E-Commerce Dashboard",
        languages: [
          { name: "JavaScript", percentage: 58.9, color: "#f1e05a" },
          { name: "TypeScript", percentage: 35.1, color: "#3178c6" },
          { name: "Shell", percentage: 6.0, color: "#89e051" },
        ],
      },
    ],
    Python: [
      {
        project: "Python Static Code Analyzer",
        languages: [
          { name: "Python", percentage: 65.4, color: "#3572A5" },
          { name: "TypeScript", percentage: 18.2, color: "#3178c6" },
          { name: "JavaScript", percentage: 12.1, color: "#f1e05a" },
          { name: "CSS", percentage: 3.3, color: "#563d7c" },
          { name: "HTML", percentage: 1.0, color: "#e34c26" },
        ],
      },
      {
        project: "Data Analysis Tool",
        languages: [
          { name: "Python", percentage: 87.3, color: "#3572A5" },
          { name: "Jupyter Notebook", percentage: 10.2, color: "#DA5B0B" },
          { name: "Shell", percentage: 2.5, color: "#89e051" },
        ],
      },
    ],
    Flask: [
      {
        project: "Python Static Code Analyzer",
        languages: [
          { name: "Python", percentage: 65.4, color: "#3572A5" },
          { name: "TypeScript", percentage: 18.2, color: "#3178c6" },
          { name: "JavaScript", percentage: 12.1, color: "#f1e05a" },
          { name: "CSS", percentage: 3.3, color: "#563d7c" },
        ],
      },
    ],
    MongoDB: [
      {
        project: "E-Commerce Dashboard",
        languages: [
          { name: "JavaScript", percentage: 58.9, color: "#f1e05a" },
          { name: "TypeScript", percentage: 35.1, color: "#3178c6" },
          { name: "Shell", percentage: 6.0, color: "#89e051" },
        ],
      },
      {
        project: "Social Media App",
        languages: [
          { name: "JavaScript", percentage: 62.4, color: "#f1e05a" },
          { name: "TypeScript", percentage: 30.1, color: "#3178c6" },
          { name: "CSS", percentage: 7.5, color: "#563d7c" },
        ],
      },
    ],
    Docker: [
      {
        project: "AI SaaS Platform",
        languages: [
          { name: "TypeScript", percentage: 52.1, color: "#3178c6" },
          { name: "JavaScript", percentage: 28.3, color: "#f1e05a" },
          { name: "Dockerfile", percentage: 2.5, color: "#384d54" },
        ],
      },
    ],
  };

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
            💡 Click on technologies with a{" "}
            <span className="inline-block w-2 h-2 bg-accent-cyan rounded-full animate-pulse mx-1" />
            to see project language breakdowns
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
                  {projectTechUsage[tech.name] && (
                    <span className="mt-2 text-[10px] text-gray-400 font-mono">
                      {projectTechUsage[tech.name].length} project
                      {projectTechUsage[tech.name].length > 1 ? "s" : ""}
                    </span>
                  )}

                  {/* Proficiency Indicator */}
                  <div className="w-full mt-4">
                    <div className="h-1 bg-navy-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-accent-cyan to-accent-teal"
                      />
                    </div>
                  </div>

                  {/* Hover Overlay with Animated Progress */}
                  <AnimatePresence>
                    {hoveredTech === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 glass rounded-lg border-2 border-accent-cyan flex flex-col items-center justify-center p-4 z-10"
                      >
                        <div className="text-4xl mb-3">{tech.icon}</div>
                        <h3 className="font-bold text-white mb-2">
                          {tech.name}
                        </h3>
                        <div className="text-4xl font-bold gradient-text mb-1">
                          {tech.proficiency}%
                        </div>
                        <p className="text-xs text-gray-400 mb-2">
                          Proficiency Level
                        </p>

                        {/* Show project count on hover if available */}
                        {projectTechUsage[tech.name] && (
                          <p className="text-xs text-accent-cyan font-mono">
                            Used in {projectTechUsage[tech.name].length} project
                            {projectTechUsage[tech.name].length > 1 ? "s" : ""}
                          </p>
                        )}

                        {/* Animated Circle Progress */}
                        <svg
                          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="rgba(100, 255, 218, 0.1)"
                            strokeWidth="2"
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#64ffda"
                            strokeWidth="2"
                            strokeDasharray={`${2 * Math.PI * 45}`}
                            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                            animate={{
                              strokeDashoffset:
                                2 * Math.PI * 45 * (1 - tech.proficiency / 100),
                            }}
                            transition={{ duration: 1 }}
                          />
                        </svg>
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
                        Projects using this technology
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
                      💡 Click outside to close • Language percentages are based
                      on code analysis
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
