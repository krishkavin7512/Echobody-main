import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Heart, Utensils, Brain, Github, Twitter, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  { title: "Track Smarter", description: "AI-powered fitness and nutrition tracking" },
  { title: "Progress Insights", description: "Real-time stats and performance analytics" },
  { title: "Predict & Plan", description: "Intelligent scheduling and recovery planning" },
  { title: "Stay Consistent", description: "Personalized motivation and streak tracking" },
];

const HeroSection: React.FC<{ heroOpacity: number, navbarHeight: number }> = ({ heroOpacity, navbarHeight }) => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } },
  };

  const featureNodeVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: -15,
      transition: { duration: 0.6, delay: 0.8 + i * 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const featureTextVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 1.2 + i * 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative z-10" style={{ opacity: heroOpacity }}>
      <motion.h1
        className="text-7xl md:text-9xl font-extrabold text-foreground"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        EchoBody
      </motion.h1>
      <motion.p
        className="text-2xl md:text-3xl text-muted-foreground mt-4"
        variants={taglineVariants}
        initial="hidden"
        animate="visible"
      >
        your fitness, reflected perfectly.
      </motion.p>
      <div className="absolute bottom-20 w-full max-w-4xl mx-auto">
        <motion.div
          className="h-0.5 bg-primary/30 w-full"
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
        />
        <div className="flex justify-between mt-4">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <motion.div
                className="w-2 h-2 rounded-full bg-primary glow-primary"
                custom={i}
                variants={featureNodeVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.div
                className="mt-4 text-center"
                custom={i}
                variants={featureTextVariants}
                initial="hidden"
                animate="visible"
              >
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesInView, setIsFeaturesInView] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const navbarRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

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

  const taglineVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // Custom ease-out with overshoot
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: '0 0 30px hsl(var(--primary) / 0.6)', transition: { duration: 0.3 } },
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = window.innerHeight * 0.4; // Fade out over 40% of viewport height
      const newOpacity = 1 - Math.min(1, scrollY / fadeDistance);
      setHeroOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden" style={{ paddingTop: navbarHeight }}>
      <HeroSection heroOpacity={heroOpacity} navbarHeight={navbarHeight} />
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animated-bg"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        ref={navbarRef}
        className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md py-4 transition-opacity duration-600 opacity-100 pointer-events-auto"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="EchoBody Logo" className="h-8 mr-2" />
            <span className="text-2xl font-bold text-foreground">EchoBody</span>
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
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline ${link.inView ? 'text-primary' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a href="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline">
              Login
            </a>
            <motion.button
              className="relative px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden group holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/register')}
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-background bg-opacity-95 z-20 flex flex-col items-center py-4 space-y-4"
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
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 text-lg ${link.inView ? 'text-primary' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a href="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
              Login
            </a>
            <motion.button
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold holographic-sheen"
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
            className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground mb-4 hero-tagline"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            your fitness, reflected perfectly.
          </motion.h1>
          <div className="hero-reflection"></div>
        </div>

        {/* 3D Abstract Digital Fitness Graphics Placeholder */}
        <div className="relative w-full max-w-6xl mx-auto mt-16 md:mt-24 h-64 md:h-96 flex items-center justify-center">
          {/* Layer 1: Base glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background rounded-3xl filter blur-2xl opacity-50 animate-pulse-slow"></div>
          {/* Layer 2: Glassmorphism card */}
          <div className="glass-card absolute inset-4 rounded-3xl flex items-center justify-center overflow-hidden">
            <p className="relative z-10 text-muted-foreground text-lg font-semibold">Futuristic Data Visualization (Placeholder)</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative z-10 w-full py-20 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-12"
            variants={taglineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Powerful Health Tracking, Simplified.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: 'Workout Insights', description: 'Analyze your performance, track progress, and optimize your training routines.' },
              { icon: Utensils, title: 'Nutrition Analytics', description: 'Log meals, monitor macros, and gain insights into your dietary habits.' },
              { icon: Brain, title: 'Smart Echo Score', description: 'A comprehensive wellness index that adapts to your unique health journey.' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="glass-card relative rounded-xl p-8 flex flex-col items-center text-center group overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`relative z-10 p-4 rounded-full bg-primary mb-6 border border-border`}>
                  <feature.icon size={36} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              variants={taglineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Your body’s progress, visualized.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                See your fitness journey unfold with intuitive charts, detailed reports, and a clear overview of your Echo Score.
              </p>
              <motion.button
                className="relative px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto md:mx-0 overflow-hidden group holographic-sheen"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/sample-dashboard')}
              >
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
              <div className="glass-card relative w-full h-64 md:h-96 rounded-xl p-4 flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full object-cover rounded-xl">
                  <rect width="800" height="600" rx="12" fill="hsl(var(--background))"/>
                  <rect x="20" y="20" width="760" height="560" rx="8" fill="hsl(var(--card))"/>
                  <path d="M50 400 L150 300 L250 350 L350 250 L450 300 L550 200 L650 280 L750 220" stroke="hsl(var(--primary))" strokeWidth="8" strokeLinecap="round"/>
                  <circle cx="50" cy="400" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="150" cy="300" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="250" cy="350" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="350" cy="250" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="450" cy="300" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="550" cy="200" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="650" cy="280" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="750" cy="220" r="15" fill="hsl(var(--primary))"/>
                  <text x="400" y="500" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="40" fontFamily="sans-serif">Fitness Dashboard</text>
                  <text x="400" y="540" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="24" fontFamily="sans-serif">Progress at a Glance</text>
                </svg>
                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)',
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
            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
            variants={taglineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Ready to transform your fitness journey?
          </motion.h2>
          <motion.button
            className="relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto overflow-hidden group holographic-sheen"
            variants={taglineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
          >
            <span className="relative z-10">Join Now</span>
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 w-full bg-card/50 pt-12 pb-8 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">EchoBody</h3>
            <p className="text-muted-foreground">Your intelligent fitness and wellness companion.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Legal & Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Github size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Twitter size={24} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-muted-foreground mt-12">
          &copy; {new Date().getFullYear()} EchoBody. All rights reserved.
        </div>
      </motion.footer>

      {/* Custom CSS for animations and glowing effects */}
      <style jsx>{`
        .animated-bg {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background: radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%),
                        radial-gradient(ellipse at 20% 80%, hsl(var(--secondary) / 0.1), transparent 70%),
                        radial-gradient(ellipse at 80% 80%, hsl(var(--accent) / 0.1), transparent 70%);
          animation: drift 40s ease infinite;
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -20px) rotate(20deg);
          }
          50% {
            transform: translate(0, 0) rotate(0deg);
          }
          75% {
            transform: translate(-20px, 20px) rotate(-20deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-bg,
          .hero-tagline {
            animation: none;
          }
        }

        .hero-tagline {
          animation: tagline-glow 3s 1s ease-out forwards;
        }

        .hero-reflection {
          height: 5rem;
          margin-top: 2rem;
          background: linear-gradient(to bottom, hsl(var(--primary) / 0.01), transparent 70%);
          -webkit-mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
          mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
        }

        @keyframes tagline-glow {
          0% {
            text-shadow: 0 0 8px hsl(var(--primary) / 0.2);
          }
          50% {
            text-shadow: 0 0 25px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.2);
          }
          100% {
            text-shadow: 0 0 8px hsl(var(--primary) / 0.2);
          }
        }

        .holographic-underline {
          position: relative;
        }

        .holographic-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)));
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease-out;
        }

        .holographic-underline:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .timeline-line {
          height: 1px;
          background: linear-gradient(to right, hsl(var(--primary) / 0.5), hsl(var(--secondary) / 0.5), hsl(var(--accent) / 0.5));
          box-shadow: 0 0 10px hsl(var(--primary) / 0.5);
        }

        .feature-card {
          backdrop-filter: blur(10px);
          border: 1px solid hsl(var(--border) / 0.2);
          background: hsl(var(--card) / 0.5);
        }

        .feature-card-node {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: hsl(var(--primary));
          box-shadow: 0 0 10px hsl(var(--primary));
        }

        @keyframes pulse-slow {
          0% {
            opacity: 0.5;
            transform: scale(1.02);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.5;
            transform: scale(1.02);
          }
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