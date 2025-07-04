
import { Calendar, MapPin, ChevronRight, Building2, Clock } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Newdream Data Systems",
      location: "AI-Powered Apps, Chatbots, R&D",
      period: "Aug 2023 – Present",
      duration: "1+ year",
      type: "Full-time",
      achievements: [
        "Developed a scalable RAG-based chatbot that processed over 3,000+ insurance documents, using OpenAI GPT models, embedding generation, and ChromaDB for semantic search with context-aware responses.",
        "Engineered an end-to-end ETL pipeline using Azure Blob Storage, with automated document ingestion, chunking, embedding creation, and SQL-based metadata logging, ensuring efficient and reliable data processing.",
        "Built and deployed a production-grade backend with FastAPI, leveraging prompt engineering, fallback logic, and Azure DevOps CI/CD pipelines to automate delivery, improve response accuracy, and maintain high system availability."
      ]
    },
    {
      title: "Software Intern",
      company: "Dextraysys",
      location: "Webapps, Integration",
      period: "Oct 2022 – Apr 2023",
      duration: "7 months",
      type: "Internship",
      achievements: [
        "Developed and enhanced web applications using Angular for frontend and Python Flask for backend, contributing to improved UI responsiveness and API performance.",
        "Integrated third-party services to automate email workflows, streamlining communication processes and reducing manual effort."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building AI-powered solutions and full-stack applications with cutting-edge technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

                <div className="md:ml-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Full-time' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-blue-400" />
                        <h4 className="text-xl text-blue-400 font-semibold">{exp.company}</h4>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:items-end">
                      <div className="flex items-center gap-2 text-gray-400 bg-slate-700/30 px-4 py-2 rounded-full border border-slate-600/30">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 bg-slate-700/30 px-4 py-2 rounded-full border border-slate-600/30">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-200 border-b border-slate-700/50 pb-2">
                      Key Achievements
                    </h5>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-4 group/item hover:bg-slate-700/20 rounded-lg p-3 transition-colors duration-200">
                        <div className="flex-shrink-0 mt-1">
                          <ChevronRight className="w-5 h-5 text-blue-400 group-hover/item:text-blue-300 group-hover/item:translate-x-1 transition-all duration-200" />
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-200">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom fade effect */}
          <div className="absolute bottom-0 left-8 w-0.5 h-20 bg-gradient-to-t from-slate-900 to-transparent hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
