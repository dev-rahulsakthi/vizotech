import React, { useEffect, useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Settings, 
  Database, 
  Cloud, 
  Headset, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  History, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook,
  Menu,
  X,
  ChevronRight,
  Monitor,
  Cpu,
  GraduationCap,
  Code2,
  Terminal,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data ---
const services = [
  {
    title: "Web and Mobile App Development",
    description: "Crafting native and cross-platform applications for iOS and Android, alongside scalable, responsive web solutions built with modern technology stacks.",
    iconName: "Smartphone"
  },
  {
    title: "AI & ML Research and Development",
    description: "Pioneering the future with custom Artificial Intelligence and Machine Learning models designed to solve complex data challenges and automate operations.",
    iconName: "Cpu"
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored software architecture designed to meet your unique business requirements, ensuring efficiency, scalability, and long-term reliability.",
    iconName: "Settings"
  },
  {
    title: "API Development",
    description: "Building robust, secure, and well-documented APIs that facilitate seamless integration and communication between disparate systems and platforms.",
    iconName: "Database"
  },
  {
    title: "Cloud Solutions",
    description: "Comprehensive cloud-native application development and migration services, leveraging AWS, Azure, and Google Cloud for maximum performance.",
    iconName: "Cloud"
  },
  {
    title: "Support & Maintenance",
    description: "Dedicated 24/7 technical support and proactive maintenance to ensure your digital products remain secure, updated, and highly available.",
    iconName: "Headset"
  }
];

const courses = [
  {
    title: "Web & Mobile Development",
    description: "A comprehensive journey from frontend basics to advanced mobile frameworks.",
    iconName: "Monitor"
  },
  {
    title: "MERN Full Stack",
    description: "Master full-stack development using MongoDB, Express, React, and Node.js.",
    iconName: "Code2"
  },
  {
    title: "AI and ML",
    description: "Deep dive into data science, neural networks, and predictive modeling.",
    iconName: "Terminal"
  },
  {
    title: "Linux administration",
    description: "Master enterprise Linux environments, shell scripting, and server management.",
    iconName: "Settings"
  },
  {
    title: "Network administration",
    description: "Learn networking fundamentals, routing, switching, and network security.",
    iconName: "Globe"
  },
  {
    title: "Cybersecurity",
    description: "Protect systems and networks from digital attacks and data breaches.",
    iconName: "Headset"
  },
  {
    title: "Devops",
    description: "Master focus on CI/CD, Docker, Kubernetes, and cloud automation.",
    iconName: "Layers"
  },
  {
    title: "AWS CloudOps",
    description: "Architect and manage scalable cloud infrastructure on Amazon Web Services.",
    iconName: "Cloud"
  },
  {
    title: "Azure CloudOps",
    description: "Build and deploy mission-critical solutions on Microsoft Azure cloud.",
    iconName: "Database"
  }
];

const projects = [
  { name: "Vizo Finance", category: "Web & Mobile", desc: "A robust financial ecosystem for tracking, reporting, and managing assets." },
  { name: "Vizo EShop", category: "E-Commerce", desc: "A feature-rich digital storefront optimized for high conversion and scale." },
  { name: "Vizo Blood Buddy", category: "Mobile App", desc: "A community-driven platform connecting blood donors with recipients in real-time." },
  { name: "Hotel Management System", category: "Enterprise", desc: "An all-in-one suite for booking, room service, and hospitality staff management." },
  { name: "Billing Software and E-Billing", category: "Business Tool", desc: "Automated invoicing and digital ledger system for streamlined accounting." },
  { name: "E-Commerce Platforms", category: "Custom Solution", desc: "Bespoke digital marketplaces tailored for diverse industry niches." },
  { name: "Assets Management", category: "Enterprise", desc: "Comprehensive inventory and asset lifecycle tracking for large organizations." },
  { name: "VeggiePro - Product Management", category: "Product Management", desc: "Specialized inventory and supply chain management for the agriculture sector." }
];

const stats = [
  { label: "Projects Delivered", value: "10+", iconName: "Briefcase" },
  { label: "Happy Clients", value: "5+", iconName: "CheckCircle2" },
  { label: "Team Members", value: "10+", iconName: "Users" },
  { label: "Years Experience", value: "2+", iconName: "History" }
];

const segments = [
  {
    title: "Startups",
    description: "We help launch MVPs quickly to validate ideas and attract investors.",
    iconName: "Monitor"
  },
  {
    title: "Businesses",
    description: "We streamline operations with custom software that scales with growth.",
    iconName: "Briefcase"
  },
  {
    title: "Enterprises",
    description: "We provide robust security and performance for mission-critical applications.",
    iconName: "Settings"
  }
];

// Icon mapping helper
const Icon = ({ name, className, size }: { name: string, className?: string, size?: number }) => {
  const icons: Record<string, any> = {
    Smartphone, Globe, Settings, Database, Cloud, Headset, CheckCircle2, 
    Users, Briefcase, History, Monitor, Cpu, GraduationCap, Code2, Terminal, Layers
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon className={className} size={size} /> : null;
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-100' : 'bg-white py-5'}`}>
      <div className="px-4 sm:px-8 md:px-12 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Logo" className="w-7 h-7 md:w-8 md:h-8" />
          <span className={`text-lg md:text-xl font-bold tracking-tight text-blue-600`}>
            Vizo <span className="text-slate-700">Technologies</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95 font-bold text-sm">
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-lg" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[60px] md:top-[72px] bg-white z-50 lg:hidden flex flex-col p-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-2xl font-bold text-slate-800 py-4 border-b border-slate-50 flex justify-between items-center group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pb-10">
              <a 
                href="#contact" 
                className="w-full bg-blue-600 text-white py-5 rounded-2xl text-center font-extrabold text-lg shadow-xl shadow-blue-600/20 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden pt-[60px] md:pt-[72px]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-72px)] flex items-center overflow-hidden bg-slate-50 py-12 lg:py-0">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-600/[0.03] rounded-l-full blur-3xl -z-10"></div>
        
        <div className="px-4 sm:px-8 md:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left z-10"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-600 text-[10px] md:text-xs font-bold mb-6 tracking-wider uppercase">
                Vizo Software Solutions
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.1] mb-6">
                Transforming Ideas into <span className="text-blue-600">Digital Reality</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Crafting exceptional mobile and web applications tailored for businesses, startups, and individuals. 
                We turn complex challenges into elegant digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group">
                  Our Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#courses" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all text-center">
                  Skill Up
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden md:block lg:block"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Development" 
                  className="w-full h-auto max-h-[55vh] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full -z-10 blur-2xl"></div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-white"
              >
                <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm lg:text-base text-slate-800">10+ Global Projects</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="px-4 sm:px-8 md:px-16 w-full">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">Built for Excellence</h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
              Vizo Software Solutions is a professional development powerhouse. We excel at turning complex challenges into elegant digital solutions through passion and strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-6 md:p-10 rounded-3xl text-center border border-slate-100 transition-all group"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 md:mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon name={stat.iconName} className="w-6 h-6 md:w-10 md:h-10" />
                </div>
                <h3 className="text-2xl md:text-5xl font-black text-slate-900 mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-slate-50">
        <div className="px-4 sm:px-8 md:px-16 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-6 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">Our Services</h2>
              <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed">
                Comprehensive technology solutions leveraging the latest tech stacks and industry best practices.
              </p>
            </div>
            <a href="#contact" className="text-blue-600 font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
              Request Solution <ChevronRight size={24} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-blue-600/20 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon name={service.iconName} className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
                <div className="mt-auto w-8 h-1.5 bg-slate-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-32 bg-white">
        <div className="px-4 sm:px-8 md:px-16 w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">Professional Training</h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Bridging the gap between academia and industry with expert-led courses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                  <Icon name={course.iconName} size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 text-sm font-medium">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="px-4 sm:px-8 md:px-16 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-24 gap-6 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black">Success Stories</h2>
            <div className="px-6 py-2 border border-white/20 rounded-full text-blue-400 font-bold tracking-widest text-xs md:text-sm uppercase">
              10+ Deliveries
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/5"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-blue-400 font-bold mb-1 text-xs md:text-sm tracking-wide">{project.category}</span>
                    <h3 className="text-xl md:text-2xl font-black mb-2">{project.name}</h3>
                    <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white relative">
        <div className="px-4 sm:px-8 md:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">Let's build the <span className="text-blue-600">Future</span>.</h2>
              <p className="text-lg md:text-xl text-slate-600 mb-12 font-medium leading-relaxed">
                Ready to take your project to the next level? Our experts are here to navigate your digital transformation.
              </p>
              
              <div className="space-y-8 md:space-y-10">
                {[
                  { icon: Mail, label: "Email Us", val: "vizosoftwares@gmail.com" },
                  { icon: Phone, label: "Call Us", val: "+91 63796 91338", val2: "+91 96772 53577" },
                  { icon: MapPin, label: "Visit Us", val: "Ambasamudram, Tirunelveli, Tamil Nadu, India" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] md:text-xs uppercase font-black tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-lg md:text-xl font-bold text-slate-800">{item.val}</p>
                      {item.val2 && <p className="text-lg md:text-xl font-bold text-slate-800">{item.val2}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all" placeholder="Enter email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Service</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all appearance-none">
                    <option>Web & Mobile Development</option>
                    <option>AI & ML Solutions</option>
                    <option>Custom Software</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all" placeholder="Project details..."></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] uppercase tracking-widest text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 bg-white border-t border-slate-50">
        <div className="px-4 sm:px-8 md:px-12 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-2">
              <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
              <span className="text-lg font-bold text-slate-800">Vizo <span className="text-blue-600">Technologies</span></span>
            </div>
            
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Facebook].map((SIcon, i) => (
                <a key={i} href="#" className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <SIcon size={20} />
                </a>
              ))}
            </div>
            
            <p className="text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Vizo Technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
