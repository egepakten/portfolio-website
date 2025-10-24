import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "AI SaaS Platform",
      description:
        "A cutting-edge SaaS platform powered by AI that helps businesses automate their workflows and increase productivity.",
      image: "🤖",
      technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Comprehensive admin dashboard with real-time analytics, inventory management, and customer insights.",
      image: "📊",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Social Media App",
      description:
        "Modern social platform with real-time messaging, stories, and content sharing capabilities.",
      image: "💬",
      technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "Real-time cryptocurrency portfolio tracker with price alerts and market analysis.",
      image: "💰",
      technologies: ["Vue.js", "Express", "Redis", "CoinGecko API"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Design System",
      description:
        "Comprehensive component library and design system for building consistent user interfaces.",
      image: "🎨",
      technologies: ["React", "Storybook", "Tailwind", "TypeScript"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Task Management Tool",
      description:
        "Collaborative project management tool with kanban boards, time tracking, and team chat.",
      image: "✅",
      technologies: ["Angular", "NestJS", "PostgreSQL", "WebSockets"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 flex items-center">
            <span className="text-accent-cyan font-mono mr-4">03.</span>
            Projects
            <div className="ml-8 h-[1px] flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="glass rounded-xl overflow-hidden h-full flex flex-col"
                >
                  {/* Project Image/Icon */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>

                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <a
                        href={project.liveLink}
                        className="p-3 bg-accent-cyan/20 rounded-lg hover:bg-accent-cyan/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          className="w-6 h-6 text-accent-cyan"
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
                        className="p-3 bg-accent-cyan/20 rounded-lg hover:bg-accent-cyan/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          className="w-6 h-6 text-accent-cyan"
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
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-xs font-mono border border-accent-cyan/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3D Effect Highlight */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, transparent 50%)",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
