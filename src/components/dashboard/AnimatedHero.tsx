
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedHero({ name = "Athlete", score = 72 }) {
  const circumference = 2 * Math.PI * 15.9155;
  const scoreOffset = circumference - (score / 100) * circumference;

  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-20">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">{name}!</span>
          </h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-36 h-36 bg-card rounded-xl flex items-center justify-center card-glass shadow-lg"
          >
            <svg viewBox="0 0 36 36" className="w-28 h-28 -rotate-90">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-muted/20 stroke-current"
                strokeWidth="3"
                fill="transparent"
              />
              <motion.circle
                cx="18"
                cy="18"
                r="15.9155"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: scoreOffset }}
                transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
                strokeLinecap="round"
                strokeWidth="3"
                stroke="url(#grad1)"
                fill="transparent"
                strokeDasharray={`${circumference} ${circumference}`}
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-foreground">{score}</span>
                <span className="text-xs text-muted-foreground">EchoScore</span>
            </div>
            <div className="sr-only" aria-live="polite">Echo score {score} out of 100</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
