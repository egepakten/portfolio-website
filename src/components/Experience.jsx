import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: "Personal Projects & Certifications",
      position: "Individual Cloud & AI Projects",
      period: "2025 - Present",
      logo: "🚀",
      description:
        "Building individual cloud and AI projects to enhance my skills and prepare for AWS Developer Associate certification.",
      achievements: [
        "Building individual cloud and AI projects to enhance my skills and prepare for AWS Developer Associate certification. Currently working on a project to build a cloud and AI platform using AWS and Python.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "AWS",
        "Node.js",
        "Python",
        "Git",
        "GitHub",
        "Docker",
        "CI/CD",
        "Agile",
        "Scrum",
        "Kanban",
        "Jira",
        "Confluence",
        "AWS Developer Associate (In Progress)",
        "S3",
        "SQS",
        "SNS",
        "Lambda",
        "EC2",
        "ECS",
        "EFS",
        "RDS",
        "Aurora",
        "DynamoDB",
        "Redshift",
        "Athena",
        "Glue",
        "AWS Step Functions",
        "CodePipeline",
        "CodeBuild",
        "CodeDeploy",
        "CodeCommit",
        "LangChain",
        "RAG",
        "JWT",
        "JSON",
        "REST",
        "API",
        "HTTP",
        "HTTPS",
        "TCP/IP",
        "IP",
        "DNS",
      ],
    },
    {
      company: "Strand Analytica  ",
      position: "Frontend Developer",
      period: "Oct 2024 - Jan 2025  ",
      location: "London, UK",
      logo: "💼",
      description:
        "Developed responsive web interfaces using React and TypeScript in an Agile",
      achievements: [
        "Integrated frontend with AWS-hosted services and contributed to ",
        "client-facing website deployment. Used Chakra UI for component styling and ",
        "worked with Jira-based workflows.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chakra UI",
        "Jira",
        "AWS",
        "Git",
        "GitHub",
        "Docker",
        "CI/CD",
        "Agile",
        "Scrum",
        "Kanban",
        "Jira",
        "Confluence",
      ],
    },
    {
      company: "King's College London",
      position: "Bachelor of Science in Computer Science",
      period: "Sep 2021 - Jun 2024",
      location: "London, UK",
      logo: "🎓",
      description:
        "Bachelor of Science in Computer Science with a focus on AI, Machine Learning, and Data Science.",
      achievements: [
        "Built full-stack application with React/TypeScript and Flask",
        "Implemented 10+ Projects in the field of AI, Python, and Machine Learning",
        "Team working in projects and group assignments",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Flask",
        "Scala",
        "Java",
        "Python",
        "Machine Learning",
        "AI",
        "Computer Vision",
        "Natural Language Processing",
        "Data Science",
      ],
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
