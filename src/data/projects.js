/**
 * Projects Data
 *
 * Centralized project data that can be imported across components
 * to ensure consistency and make the project count dynamic.
 */

export const projects = [
  {
    title: "Python Static Code Analyzer",
    description:
      "Advanced code quality analysis tool for Python developers. Kings College London Final Year Individual Project featuring drag-and-drop file upload, 13 analysis components, and comprehensive code quality reporting.",
    code: `# AST-based code analysis
def analyze_function_length(tree):
  """Analyzes functions for excessive length"""
  for node in ast.walk(tree):
    if isinstance(node, ast.FunctionDef):
      length = node.end_lineno - node.lineno
      if length > 50:
        yield {
          'function': node.name,
          'lines': length,
          'recommendation': 'Consider refactoring'
        }`,
    demoImage: "/screenshots/static_code_analyser_screen_image.jpeg",
    demoGradient: "from-violet-600 via-purple-600 to-indigo-600",
    demoType: "live-demo",
    demoUrl: "https://static-code-analyser-iota.vercel.app",
    technologies: ["Python", "Flask", "React", "Next.js", "TypeScript", "AST"],
    liveLink: "https://static-code-analyser-iota.vercel.app",
    githubLink: "https://github.com/egepakten/static-code-analyser",
    status: "PRODUCTION",
    year: "2024",
  },
  {
    title: "Pacman Q-Learning Agent",
    description:
      "Reinforcement Learning implementation for Pacman game using Q-Learning algorithm. King's College London Machine Learning coursework featuring temporal difference learning, ε-greedy exploration, reward shaping, and adaptive learning rates to train an agent that learns optimal strategies through trial and error.",
    code: `# Q-Learning update implementation
def learn(self, state, action, reward, nextState):
  """Implements Q-learning update equation"""
  currentQ = self.getQValue(state, action)
  maxNextQ = self.maxQValue(nextState)
  
  # Q(s,a) ← Q(s,a) + α[r + γ·max Q(s',a') - Q(s,a)]
  newQ = currentQ + self.alpha * (
    reward + self.gamma * maxNextQ - currentQ
  )
  
  self.updateQValue(state, action, newQ)`,
    demoImage:
      "https://raw.githubusercontent.com/egepakten/pacman-ai-qlearning/master/pacman_demo.png",
    demoGradient: "from-yellow-500 via-blue-600 to-indigo-700",
    demoType: "game",
    demoUrl: null,
    technologies: [
      "Python",
      "Machine Learning",
      "Q-Learning",
      "Reinforcement Learning",
    ],
    liveLink: null,
    githubLink: "https://github.com/egepakten/pacman-ai-qlearning",
    status: "PRODUCTION",
    year: "2024",
  },
];
