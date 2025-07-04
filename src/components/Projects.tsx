
import { ExternalLink, Github, MessageSquare, Brain, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "RAG-based Insurance Chatbot",
      description: "Developed a scalable RAG-based chatbot that processed over 3,000+ insurance documents, using OpenAI GPT models, embedding generation, and ChromaDB for semantic search with context-aware responses.",
      tech: ["Python", "OpenAI API", "ChromaDB", "FastAPI", "Azure"],
      icon: MessageSquare,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "I-GET IT - Sign Language Recognition",
      description: "Deep learning model using TensorFlow and OpenCV, leveraging CNNs to recognize sign language gestures and translate them into text in real-time with 89% accuracy improvement.",
      tech: ["TensorFlow", "OpenCV", "Deep Learning", "Python"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Agri Connect Platform",
      description: "Full-stack platform connecting farmers with consumers for agricultural product purchase and selling, featuring user authentication and real-time communication.",
      tech: ["Flask", "Angular", "SQLAlchemy", "PostgreSQL"],
      icon: Users,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing AI-powered solutions and full-stack applications that deliver real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  Code
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
