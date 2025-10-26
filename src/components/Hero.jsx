import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 relative"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-cyan font-mono text-lg mb-6">
            Hi, my name is
          </p>

          <h1 className="text-6xl lg:text-8xl font-bold mb-4 gradient-text">
            Kerem Ege Pakten
          </h1>

          <h2 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
            Junior Software Engineer | Cloud & DevOps Enthusiast
          </h2>

          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed">
            Computer Science graduate from King's College London specializing in
            cloud engineering and full-stack development. Experienced with AWS,
            React, and TypeScript. Currently building Individual Cloud & AI
            Project - while preparing for AWS Developer Associate certification.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-accent-cyan text-accent-cyan rounded-lg font-mono hover:bg-accent-cyan/10 transition-all duration-300 animate-float"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-cyan/10 text-accent-cyan rounded-lg font-mono border-2 border-transparent hover:border-accent-cyan transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <div
          className="absolute top-1/4 right-10 w-32 h-32 border border-accent-cyan/20 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/4 left-10 w-20 h-20 border border-accent-cyan/20 rounded-lg rotate-45 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </section>
  );
};

export default Hero;
