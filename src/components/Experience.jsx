import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: "Tech Corp",
      position: "Senior Full Stack Developer",
      period: "2023 - Present",
      logo: "🚀",
      description:
        "Led the development of scalable web applications using React, Node.js, and AWS.",
      achievements: [
        "Architected and deployed microservices handling 1M+ daily requests",
        "Reduced application load time by 60% through optimization",
        "Mentored team of 5 junior developers",
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      company: "Startup Inc",
      position: "Frontend Developer",
      period: "2021 - 2023",
      logo: "💡",
      description:
        "Built responsive web applications with modern JavaScript frameworks.",
      achievements: [
        "Implemented design system used across 10+ products",
        "Improved conversion rate by 45% through UX improvements",
        "Integrated third-party APIs and payment systems",
      ],
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Firebase"],
    },
    {
      company: "Digital Agency",
      position: "Junior Developer",
      period: "2020 - 2021",
      logo: "🎨",
      description:
        "Developed client websites and maintained existing web applications.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Created reusable component library",
        "Collaborated with designers to implement pixel-perfect interfaces",
      ],
      technologies: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 flex items-center">
            <span className="text-accent-cyan font-mono mr-4">02.</span>
            Experience
            <div className="ml-8 h-[1px] flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-cyan/50 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-navy-dark border-2 border-accent-cyan flex items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full bg-accent-cyan ${
                        expandedIndex === index ? "animate-ping" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`glass rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                      expandedIndex === index
                        ? "border-accent-cyan/50 bg-navy-light/60"
                        : "hover:border-accent-cyan/30"
                    }`}
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? -1 : index)
                    }
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{exp.logo}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.position}
                          </h3>
                          <p className="text-accent-cyan font-mono">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-accent-cyan/20 pt-4 mt-4">
                            <h4 className="text-accent-cyan font-semibold mb-3">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2 mb-4">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-gray-300"
                                >
                                  <span className="text-accent-cyan mt-1">
                                    ▹
                                  </span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-mono border border-accent-cyan/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-4 text-sm text-gray-500 font-mono">
                      {expandedIndex === index
                        ? "▲ Click to collapse"
                        : "▼ Click to expand"}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
