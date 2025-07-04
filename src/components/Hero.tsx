
import { Github, Linkedin, Mail, MessageSquare, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Sivanesh S</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          {/* <MessageSquare className="w-16 h-16 mx-auto mb-6 text-blue-400" /> */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sivanesh S
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Software Developer & AI Specialist
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Software Developer with 2 years of experience building AI-powered applications, RAG-based chatbots, 
            and scalable full-stack solutions. Skilled in Python, FastAPI, Angular, and OpenAI APIs with expertise 
            in LLM integration and prompt engineering.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a 
            href="#" 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/sivanesh-s" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact
          </button>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="text-gray-400 animate-bounce cursor-pointer hover:text-white transition-colors"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
          <p className="mt-2 text-sm">Scroll to explore</p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
