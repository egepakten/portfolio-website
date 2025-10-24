import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

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
  ];

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 flex items-center">
            <span className="text-accent-cyan font-mono mr-4">04.</span>
            Tech Stack
            <div className="ml-8 h-[1px] flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </h2>

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
                className="relative"
              >
                <div className="glass rounded-lg p-6 text-center cursor-pointer hover:border-accent-cyan/50 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <div className="text-5xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{tech.name}</h3>
                  <span className="text-xs text-accent-cyan font-mono">
                    {tech.category}
                  </span>

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
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {tech.proficiency}%
                        </div>
                        <p className="text-sm text-gray-400">
                          Proficiency Level
                        </p>

                        {/* Animated Circle Progress */}
                        <svg
                          className="absolute inset-0 w-full h-full -rotate-90"
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
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
