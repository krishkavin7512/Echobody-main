
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
      accentColor: 'from-gray-600 to-gray-500',
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
      accentColor: 'from-[#0EA5E9] to-[#8B5CF6]',
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
      accentColor: 'from-purple-600 to-pink-600',
    },
  ];

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
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
                className={`text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 ${
                  link.name === 'Pricing' ? 'text-[#0EA5E9]' : ''
                }`}
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
                className={`text-gray-300 hover:text-[#0EA5E9] transition-colors duration-300 text-lg ${
                  link.name === 'Pricing' ? 'text-[#0EA5E9]' : ''
                }`}
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

      <main className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Flexible Plans for Every Goal
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
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
              className={`relative bg-white/5 border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.isPopular ? 'border-[#0EA5E9] shadow-lg shadow-[#0EA5E9]/20' : ''
              }`}
              variants={slideInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h2 className="text-3xl font-bold text-white mb-4">{plan.name}</h2>
              <p className="text-5xl font-extrabold text-white mb-2">
                {plan.price}
                <span className="text-lg font-medium text-gray-400">{plan.frequency}</span>
              </p>
              <ul className="text-gray-300 text-left space-y-3 my-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle size={20} className="text-[#0EA5E9] mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className={`mt-auto w-full relative px-8 py-3 rounded-full bg-gradient-to-r ${plan.accentColor} text-white font-bold text-lg flex items-center justify-center overflow-hidden group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`absolute inset-0 w-full h-full bg-gradient-to-r ${plan.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></span>
                <span className="relative z-10">{plan.buttonText}</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
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

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
