import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Download, Menu, X, Code, Database, Globe, Smartphone, Star, ArrowRight, Heart, Coffee } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Cursor Effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-lg z-40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
              Bhavyanshu.
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === item
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item === 'home' ? 'portfolio' : item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-blue-50"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 capitalize w-full text-left rounded-xl"
                >
                  {item === 'home' ? 'portfolio' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-10 animate-fadeIn">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-teal-400/30 rounded-full blur-xl animate-pulse"></div>
              <h1 className="text-7xl lg:text-9xl font-black text-gray-900 leading-none relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Bhavyanshu
                </span>
                <span className="block text-5xl lg:text-7xl mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Srivastava
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-16 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Software Engineer
                  </h2>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600">
                    Web Developer
                  </h3>
                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
                Designing <span className="text-blue-600 font-semibold">scalable</span>, 
                <span className="text-teal-600 font-semibold"> efficient</span>, and 
                <span className="text-purple-600 font-semibold"> secure</span> solutions for the future.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
              >
                View Portfolio
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <a
                href="https://drive.google.com/file/d/16OPbVq5ZeQHLjkavJfROR1MBz9g_yBgy/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-gray-900 hover:to-black transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
              >
                <Download className="group-hover:animate-bounce" size={20} />
                Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="group border-3 border-blue-600 text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated background shapes */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 rounded-full opacity-75 blur-2xl animate-pulse group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-50 blur-xl animate-pulse delay-1000 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Profile image container */}
              <div className="relative bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500 rounded-full p-2 group-hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-full p-1">
                  <img
                    src="https://i.postimg.cc/mkbqVySy/IMG-1511.jpg"
                    alt="Bhavyanshu Srivastava"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-bounce delay-1500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed pl-8 font-medium">
                  As a software engineer, I aim to design and build <span className="text-blue-600 font-semibold">efficient</span>, 
                  <span className="text-teal-600 font-semibold"> scalable</span>, and 
                  <span className="text-purple-600 font-semibold"> secure</span> software solutions that drive business growth.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-purple-500 rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed pl-8 font-medium">
                  I strive to deliver high-quality products, expand my technical skills, and collaborate effectively with teams to support the company's long-term objectives.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed pl-8 font-medium">
                  My goal is to grow within the company, take on increasing responsibilities, and contribute to its future success through innovative problem-solving and continuous learning.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Education Journey</h3>
              <div className="space-y-6">
                <div className="group bg-gradient-to-r from-blue-50 via-teal-50 to-purple-50 p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">B.Tech Computer Science Engineering</h4>
                      <p className="text-blue-600 font-semibold text-lg">Graphic Era Hill University, Dehradun</p>
                      <p className="text-gray-600 font-medium">CGPA: 7.15/10 | 2021 - 2025</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-r from-teal-50 via-purple-50 to-orange-50 p-8 rounded-3xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">12th CBSE</h4>
                      <p className="text-teal-600 font-semibold text-lg">St John's Sr Sec School, Meerut</p>
                      <p className="text-gray-600 font-medium">74.16% | 2019 - 2021</p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-r from-purple-50 via-orange-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">10th ICSE</h4>
                      <p className="text-purple-600 font-semibold text-lg">St Francis Convent School, Meerut</p>
                      <p className="text-gray-600 font-medium">78% | 2017 - 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-gray-900">Software Engineer</h3>
                    <p className="text-2xl text-blue-600 font-bold">LTI Mindtree</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 lg:mt-0">
                    <Star className="text-yellow-500 fill-current" size={24} />
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg">
                      Offer Received
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    🚀 Excited to begin my professional journey and contribute to impactful projects that make a difference.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    💡 Ready to apply my technical skills, collaborate with experienced teams, and drive innovative solutions that create real value for clients and users.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    🎯 Committed to continuous learning and growing within the organization while delivering excellence in every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 w-24 h-24 rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Code className="text-white" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Programming</h3>
              <div className="space-y-2">
                {['Java', 'C++', 'Python'].map((skill, index) => (
                  <div key={skill} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-semibold border border-blue-200 hover:bg-blue-100 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 w-24 h-24 rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Database className="text-white" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Areas</h3>
              <div className="space-y-2">
                {['DBMS', 'Operating Systems', 'Computer Organization'].map((skill, index) => (
                  <div key={skill} className="bg-teal-50 text-teal-700 px-4 py-2 rounded-xl font-semibold border border-teal-200 hover:bg-teal-100 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 w-24 h-24 rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Globe className="text-white" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Tech</h3>
              <div className="space-y-2">
                {['React JS', 'HTML', 'CSS', 'JavaScript'].map((skill, index) => (
                  <div key={skill} className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl font-semibold border border-orange-200 hover:bg-orange-100 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 w-24 h-24 rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Smartphone className="text-white" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools</h3>
              <div className="space-y-2">
                {['Streamlit', 'Git', 'VS Code'].map((skill, index) => (
                  <div key={skill} className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl font-semibold border border-purple-200 hover:bg-purple-100 transition-colors duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group bg-white p-12 rounded-3xl shadow-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="relative text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 via-teal-500 to-purple-500 w-20 h-20 rounded-3xl mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl">
                    <Globe className="text-white" size={32} />
                  </div>
                </div>
                
                <h3 className="text-3xl font-black text-gray-900 mb-6">Web Design & Development</h3>
                <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
                  Specialized in creating <span className="text-blue-600 font-bold">responsive</span> and 
                  <span className="text-teal-600 font-bold"> user-friendly</span> web applications with 
                  <span className="text-purple-600 font-bold"> clean UI</span> and 
                  <span className="text-orange-600 font-bold"> smooth animations</span>. 
                  I focus on delivering modern, efficient solutions that provide excellent user experiences across all devices.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Cross-Platform'].map((feature, index) => (
                    <div key={feature} className="bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 px-6 py-3 rounded-2xl font-bold border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Latest <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HealthGuard",
                subtitle: "Secured Diagnostic System",
                tech: "Machine Learning, Streamlit, Python",
                description: "Advanced ML system that predicts multiple diseases including diabetes, liver, kidney, and cancer with an intuitive frontend interface.",
                github: "https://github.com/bhavyanshu-051/Multiple-Disease-Prediction-System",
                gradient: "from-blue-500 via-teal-500 to-purple-500",
                bgGradient: "from-blue-50 to-teal-50"
              },
              {
                title: "Diabetes Prediction",
                subtitle: "ML Health Application",
                tech: "Python, Machine Learning",
                description: "Intelligent system that predicts diabetes risk using advanced machine learning algorithms with high accuracy.",
                github: "https://github.com/bhavyanshu-051/diabetes-prediction",
                gradient: "from-teal-500 via-green-500 to-emerald-500",
                bgGradient: "from-teal-50 to-green-50"
              },
              {
                title: "Car Rental System",
                subtitle: "Java Application",
                tech: "Java, OOP",
                description: "Comprehensive rental management system providing detailed information about available cars with booking functionality.",
                github: "https://github.com/bhavyanshu-051/Car-rental",
                gradient: "from-orange-500 via-red-500 to-pink-500",
                bgGradient: "from-orange-50 to-red-50"
              },
              {
                title: "BMI Calculator",
                subtitle: "Web Application",
                tech: "HTML, CSS, JavaScript",
                description: "Elegant and responsive Body Mass Index calculator with modern design and instant results.",
                github: "https://github.com/bhavyanshu-051/BMI-Calculator",
                gradient: "from-purple-500 via-pink-500 to-rose-500",
                bgGradient: "from-purple-50 to-pink-50"
              },
              {
                title: "Moving Animation",
                subtitle: "Interactive Animation",
                tech: "HTML, CSS, JavaScript",
                description: "Creative interactive animation where a character's head follows cursor movement with smooth transitions.",
                github: "https://github.com/bhavyanshu-051/Animation-using-HTML-CSS-and-JavaScript",
                gradient: "from-indigo-500 via-purple-500 to-blue-500",
                bgGradient: "from-indigo-50 to-purple-50"
              }
            ].map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-300 transform hover:-translate-y-4 transition-all duration-500 relative">
                  {/* Top gradient bar */}
                  <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.bgGradient} opacity-50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                  
                  <div className="p-8 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">{project.subtitle}</p>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                    
                    <p className="text-gray-700 text-base mb-6 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-bold text-base transition-all duration-300 group-hover:gap-4"
                    >
                      View Project 
                      <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-xl text-gray-700 leading-relaxed font-medium mb-10">
                  I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology and innovation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Mail size={28} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:bhavyanshusrivastava@gmail.com" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                      bhavyanshusrivastava@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Phone size={28} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+917302403304" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                      +91 7302403304
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Linkedin size={28} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">LinkedIn</h4>
                    <a href="#" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-800 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Github size={28} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">GitHub</h4>
                    <a href="#" className="text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300">
                <form className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-bold text-gray-900 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 text-lg font-medium hover:border-blue-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 text-lg font-medium hover:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-bold text-gray-900 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 resize-none text-lg font-medium hover:border-blue-400"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 text-white py-4 rounded-2xl font-bold text-xl hover:from-blue-600 hover:via-teal-600 hover:to-purple-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3"
                  >
                    Send Message
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-medium">
            <span>© 2025 Bhavyanshu Srivastava. Crafted with</span>
            <Heart className="text-red-500 fill-current animate-pulse" size={20} />
            <span>and lots of</span>
            <Coffee className="text-yellow-500 animate-bounce" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;