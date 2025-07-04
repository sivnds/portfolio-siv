
import { Code, Database, MessageSquare, Brain, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java"],
      color: "blue"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["OpenAI APIs", "LangChain", "RAG", "NLP", "TensorFlow", "Hugging Face"],
      color: "purple"
    },
    {
      title: "Backend & APIs",
      icon: Cpu,
      skills: ["FastAPI", "Flask", "SQLAlchemy", "Microservices", "ETL"],
      color: "green"
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["MSSQL", "MongoDB", "ChromaDB", "Azure Blob", "PostgreSQL"],
      color: "yellow"
    },
    {
      title: "Frontend & Frameworks",
      icon: Globe,
      skills: ["Angular", "HTML/CSS", "REST APIs", "WebSocket"],
      color: "cyan"
    },
    {
      title: "Tools & DevOps",
      icon: MessageSquare,
      skills: ["Git", "Docker", "Azure DevOps", "CI/CD", "A/B Testing"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-500/20",
      purple: "from-purple-500 to-purple-600 border-purple-500/20",
      green: "from-green-500 to-green-600 border-green-500/20",
      yellow: "from-yellow-500 to-yellow-600 border-yellow-500/20",
      pink: "from-pink-500 to-pink-600 border-pink-500/20",
      cyan: "from-cyan-500 to-cyan-600 border-cyan-500/20"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise in AI, full-stack development, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(category.color)} border flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-slate-700/50 rounded-lg px-4 py-2 text-gray-300 hover:bg-slate-700 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
