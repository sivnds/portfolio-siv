
import { MessageSquare, Code, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about building intelligent solutions that bridge the gap between humans and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm a Software Developer with approximately 2 years of experience specializing in AI-powered applications 
                and RAG-based chatbots. My passion lies in creating intelligent systems that can understand, process, 
                and respond to human needs effectively.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently pursuing my Masters in Computer Applications at MIT, Anna University, I combine academic 
                knowledge with real-world experience to build scalable full-stack solutions that make a difference.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-center">
              <MessageSquare className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">AI Chatbots</h4>
              <p className="text-blue-100">RAG-based systems processing 3,000+ documents</p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-6 text-center">
              <Code className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Full-Stack</h4>
              <p className="text-green-100">End-to-end solutions with modern frameworks</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-center col-span-1 md:col-span-2">
              <Brain className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">LLM Integration</h4>
              <p className="text-purple-100">Expert in OpenAI APIs, prompt engineering, and AI model integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
