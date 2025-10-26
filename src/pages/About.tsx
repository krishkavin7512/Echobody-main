import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white font-sans relative overflow-hidden py-20">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          About EchoBody
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Our mission is to empower your wellness journey with intelligent tracking and personalized insights.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <motion.div
            className="bg-white/5 border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Users size={48} className="text-[#0EA5E9] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-gray-300">To create a world where everyone has the tools to understand and optimize their health and fitness effortlessly.</p>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Lightbulb size={48} className="text-[#8B5CF6] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Technology</h3>
            <p className="text-gray-300">Leveraging cutting-edge AI and data visualization to provide actionable insights into your body's unique needs.</p>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <Award size={48} className="text-[#0EA5E9] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Our Commitment</h3>
            <p className="text-gray-300">Dedicated to privacy, accuracy, and continuous innovation to support your journey to a healthier you.</p>
          </motion.div>
        </div>
      </div>

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

export default About;
