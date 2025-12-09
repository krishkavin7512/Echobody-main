import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Award, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  // ...

  // Inside return

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animated-bg"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="EchoBody Logo" className="h-8 mr-2" />
            <span className="text-2xl font-bold text-foreground">EchoBody</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline ${link.name === 'About' ? 'text-primary' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline">
              Login
            </Link>
            <motion.button
              className="relative px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden group holographic-sheen"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              <Link
                key={link.name}
                to={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 text-lg`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
              Login
            </Link>
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

      <main className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6 drop-shadow-lg"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          About EchoBody
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Our mission is to empower your wellness journey with intelligent tracking and personalized insights.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <motion.div
            className="glass-card rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Users size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">To create a world where everyone has the tools to understand and optimize their health and fitness effortlessly.</p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Lightbulb size={48} className="text-secondary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Technology</h3>
            <p className="text-muted-foreground">Leveraging cutting-edge AI and data visualization to provide actionable insights into your body's unique needs.</p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <Award size={48} className="text-accent mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Commitment</h3>
            <p className="text-muted-foreground">Dedicated to privacy, accuracy, and continuous innovation to support your journey to a healthier you.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
