
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Applications",
      institution: "Madras Institute of Technology (MIT), Anna University",
      location: "Chennai, India",
      period: "09/2023 - 06/2025",
      cgpa: "8.6",
      subjects: ["Mathematics", "Statistics", "Data Science", "AI&ML"]
    },
    {
      degree: "Bachelors in Computer Science",
      institution: "Bishop Heber College",
      location: "Trichy, India",
      period: "06/2020 - 05/2023",
      cgpa: "8.4",
      subjects: ["Data Structures and Algorithms", "Object-oriented Programming"]
    }
  ];

  const certifications = [
    "Deeplearning.ai – Langchain for LLM application development",
    "NPTEL - Data Structures and Algorithms Design, IIT Kanpur"
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic foundation and continuous learning in technology and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-blue-400 mb-2">{edu.institution}</h4>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="text-green-400 font-semibold">
                  CGPA: {edu.cgpa}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {edu.subjects.map((subject, subjectIndex) => (
                  <span 
                    key={subjectIndex}
                    className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg px-4 py-3">
                <p className="text-gray-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
