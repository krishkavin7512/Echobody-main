import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Heart, Utensils, Brain, Github, Twitter, Linkedin } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesInView, setIsFeaturesInView] = useState(false);

  const featuresRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Features', href: '#features', ref: featuresRef, inView: isFeaturesInView },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)', transition: { duration: 0.3 } },
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFeaturesInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust this value to control when the section is considered 'in view'
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [featuresRef]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white font-sans relative overflow-hidden">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        className="sticky top-0 z-50 w-full bg-[#0F172A]/80 backdrop-blur-md py-4"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="EchoBody Logo" className="h-8 mr-2" />
            <span className="text-2xl font-bold text-white">EchoBody</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.ref) {
                    e.preventDefault();
                    scrollToSection(link.ref);
                  }
                }}
                className={`text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 ${link.inView ? 'text-[#0EA5E9]' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a href="/login" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300">
              Login
            </a>
            <motion.button
              className="relative px-6 py-2 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white font-semibold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-[#0F172A] bg-opacity-95 z-20 flex flex-col items-center py-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.ref) {
                    e.preventDefault();
                    scrollToSection(link.ref);
                  }
                }}
                className={`text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 text-lg ${link.inView ? 'text-[#0EA5E9]' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a href="/login" className="text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 text-lg">
              Login
            </a>
            <motion.button
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 w-full py-20 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-4 drop-shadow-lg"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
          >
            The Future of Fitness Tracking
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Track workouts, meals, and progress — all in one intelligent dashboard.
          </motion.p>
          <motion.a
            href="/login" // Redirect to login page
            className="relative px-6 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-white font-bold text-lg flex items-center justify-center mx-auto overflow-hidden group"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center">
              View Dashboard <ArrowRight className="ml-2" size={20} />
            </span>
          </motion.a>
        </div>

        {/* 3D Abstract Digital Fitness Graphics Placeholder */}
        <div className="relative w-full max-w-6xl mx-auto mt-16 md:mt-24 h-64 md:h-96 flex items-center justify-center">
          {/* Layer 1: Base glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 rounded-3xl filter blur-2xl opacity-50 animate-pulse-slow"></div>
          {/* Layer 2: Glassmorphism card */}
          <div className="absolute inset-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Inner abstract elements */}
            <div className="absolute w-48 h-48 bg-[#0EA5E9]/30 rounded-full -top-10 -left-10 mix-blend-screen filter blur-xl animate-float"></div>
            <div className="absolute w-60 h-60 bg-[#8B5CF6]/30 rounded-full -bottom-10 -right-10 mix-blend-screen filter blur-xl animate-float animation-delay-2000"></div>
            <div className="absolute w-32 h-32 bg-white/10 rounded-full top-1/4 left-1/4 mix-blend-overlay filter blur-lg animate-float animation-delay-4000"></div>
            <p className="relative z-10 text-gray-300 text-lg font-semibold">Futuristic Data Visualization (Placeholder)</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative z-10 w-full py-20 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-12"
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Powerful Health Tracking, Simplified.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: 'Workout Insights', description: 'Analyze your performance, track progress, and optimize your training routines.', iconGradient: 'from-blue-400 to-cyan-400' },
              { icon: Utensils, title: 'Nutrition Analytics', description: 'Log meals, monitor macros, and gain insights into your dietary habits.', iconGradient: 'from-green-400 to-teal-400' },
              { icon: Brain, title: 'Smart Echo Score', description: 'A comprehensive wellness index that adapts to your unique health journey.', iconGradient: 'from-purple-400 to-fuchsia-400' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="relative bg-white/5 border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center group overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                  background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.3), rgba(139, 92, 246, 0.3))',
                  filter: 'blur(15px)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
                data-group-hover-class="opacity-100"></div>

                <div className={`relative z-10 p-4 rounded-full bg-gradient-to-br ${feature.iconGradient} mb-6 border border-white/10`}>
                  <feature.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="relative z-10 w-full py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your body’s progress, visualized.</h2>
              <p className="text-lg text-gray-200 mb-8">
                See your fitness journey unfold with intuitive charts, detailed reports, and a clear overview of your Echo Score.
              </p>
              <motion.button
                className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white font-bold text-lg flex items-center justify-center mx-auto md:mx-0 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">Learn More</span>
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Dashboard Mockup Placeholder */}
              <div className="relative w-full h-64 md:h-96 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center shadow-xl backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <p className="text-gray-300 text-lg font-semibold">Dashboard Mockup (Placeholder)</p>
                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 70%)',
                  animation: 'pulse-glow 4s infinite alternate'
                }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 w-full py-20 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Ready to transform your fitness journey?
          </motion.h2>
          <motion.button
            className="relative px-10 py-4 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white font-bold text-xl flex items-center justify-center mx-auto overflow-hidden group"
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">Join Now</span>
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 w-full bg-white/5 pt-12 pb-8 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6]"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">EchoBody</h3>
            <p className="text-gray-400">Your intelligent fitness and wellness companion.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Legal & Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300">Contact</a></li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300"><Github size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-[#0EA5E9] transition-colors duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} EchoBody. All rights reserved.
        </div>
      </motion.footer>

      {/* Custom CSS for animations and glowing effects */}
      <style jsx>{`
        @keyframes pulse-glow {
          0% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
        }

        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes animate-float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(2deg);
          }
          50% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          75% {
            transform: translateY(10px) translateX(-5px) rotate(-2deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: animate-float 10s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }

        /* Group hover effect for feature cards */
        .group:hover [data-group-hover-class="opacity-100"] {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default HomePage;