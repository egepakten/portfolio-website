import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const socialLinks = [
    { name: "GitHub", icon: "📦", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Email", icon: "📧", url: "mailto:your@email.com" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 flex items-center">
            <span className="text-accent-cyan font-mono mr-4">05.</span>
            Get In Touch
            <div className="ml-8 h-[1px] flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>

              {/* Social Links */}
              <div className="space-y-4 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 glass rounded-lg p-4 hover:border-accent-cyan/50 transition-all duration-300 group"
                  >
                    <span className="text-3xl">{link.icon}</span>
                    <span className="font-mono text-accent-cyan group-hover:text-accent-teal transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="glass rounded-lg p-6">
                <p className="font-mono text-accent-cyan mb-2">$ status</p>
                <p className="text-gray-400">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Available for freelance work
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-accent-cyan mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-light border border-accent-cyan/20 rounded-lg focus:border-accent-cyan focus:outline-none transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-accent-cyan mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-light border border-accent-cyan/20 rounded-lg focus:border-accent-cyan focus:outline-none transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-accent-cyan mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-navy-light border border-accent-cyan/20 rounded-lg focus:border-accent-cyan focus:outline-none transition-colors text-white resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-mono font-bold transition-all duration-300 ${
                    isSubmitting
                      ? "bg-accent-cyan/50 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : "bg-accent-cyan text-navy-dark hover:bg-accent-teal animate-glow"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : submitStatus === "success" ? (
                    "✓ Message Sent!"
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>
            </motion.form>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 font-mono">
              Designed & Built by{" "}
              <span className="text-accent-cyan">Your Name</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 All rights reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
