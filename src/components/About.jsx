import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const About = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const terminalLines = [
    "$ whoami",
    "> Junior Software Engineer | Cloud & DevOps Enthusiast",
    "",
    "$ cat bio.txt",
    "> Computer Science graduate from King's College London specializing in cloud engineering.",
    "> After working as a Frontend Developer at Strand Analytica,",
    "> I discovered my passion for cloud architecture and DevOp.",
    "> Currently building Personal Projects while preparing for AWS Developer Associate certification.",
    "",
    "$ ls skills/",
    "> Frontend Development    ████████████ 100%",
    "> Backend Development    ██████████░░ 80%",
    "> Cloud Infrastructure  ████████░░░░  65%",
    "> DevOps Tools          █████████░░░  75%",
    "",
    "$ echo $INTERESTS",
    "> [ Full-Stack Development, AI/ML, Web3, Agentic RAG Systems ]",
  ];

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const line = terminalLines[currentLineIndex];
      let charIndex = 0;

      const intervalId = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedText((prev) => {
            const lines = prev.split("\n");
            lines[currentLineIndex] = line.slice(0, charIndex);
            return lines.join("\n");
          });
          charIndex++;
        } else {
          clearInterval(intervalId);
          setCurrentLineIndex((prev) => prev + 1);
          setDisplayedText((prev) => prev + "\n");
        }
      }, 30);

      return () => clearInterval(intervalId);
    }
  }, [currentLineIndex]);

  return (
    <section
      id="about"
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
            <span className="text-accent-cyan font-mono mr-4">01.</span>
            About Me
            <div className="ml-8 h-[1px] flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </h2>

          <div className="glass rounded-lg p-8 font-mono">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-accent-cyan/20">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-gray-400 text-sm">terminal — zsh</span>
            </div>

            {/* Terminal Content */}
            <div className="text-accent-cyan/90 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              <span className="inline-block w-2 h-5 bg-accent-cyan animate-pulse ml-1" />
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                number: projects.length.toString(),
                label: "Projects Completed",
              },
              { number: "4+", label: "Years Experience with Coding" },
              { number: "100%", label: "Commitment" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-6 text-center hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
