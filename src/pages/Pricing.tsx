
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Menu, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const pricingPlans = [
    {
      name: 'Basic',
      price: 'Free',
      frequency: '',
      features: [
        'Track Workouts',
        'Basic Nutrition Logging',
        'Echo Score (Daily)',
        'Community Access',
      ],
      buttonText: 'Get Started',
      accentColor: 'bg-muted',
    },
    {
      name: 'Pro',
      price: '₹79',
      frequency: '/ month',
      features: [
        'All Basic Features',
        'Advanced Nutrition Analytics',
        'Detailed Echo Score Trends',
        'Personalized Coaching AI',
        'Priority Support',
      ],
      buttonText: 'Go Pro',
      accentColor: 'bg-primary',
      isPopular: true,
    },
    {
      name: 'Premium',
      price: '₹199',
      frequency: '/ month',
      features: [
        'All Pro Features',
        'Custom Workout Plans',
        'Meal Planning & Recipes',
        'Exclusive Content',
        'Dedicated Support',
      ],
      buttonText: 'Get Premium',
      accentColor: 'bg-secondary',
    },
  ];

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
              <a
                key={link.name}
                href={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 holographic-underline ${
                  link.name === 'Pricing' ? 'text-primary' : ''
                }`}
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

      <main className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6 drop-shadow-lg"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Flexible Plans for Every Goal
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Choose the EchoBody plan that fits your fitness journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-card relative rounded-xl p-8 flex flex-col items-center text-center overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.isPopular ? 'border-primary shadow-lg shadow-primary/20' : ''
              }`}
              variants={slideInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h2 className="text-3xl font-bold text-foreground mb-4">{plan.name}</h2>
              <p className="text-5xl font-extrabold text-foreground mb-2">
                {plan.price}
                <span className="text-lg font-medium text-muted-foreground">{plan.frequency}</span>
              </p>
              <ul className="text-muted-foreground text-left space-y-3 my-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className={`mt-auto w-full relative px-8 py-3 rounded-full ${plan.accentColor} text-foreground font-bold text-lg flex items-center justify-center overflow-hidden group holographic-sheen`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{plan.buttonText}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;
