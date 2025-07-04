
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next AI project or collaboration opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">sivaneshsundar105@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">(+91) 8838245893</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Chennai, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-gray-400 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://linkedin.com/in/sivanesh-s" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="mailto:sivaneshsundar105@gmail.com" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or collaboration opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
