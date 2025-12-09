
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedHero({ name = "Athlete", score = 72 }) {
  const circumference = 2 * Math.PI * 15.9155;
  const scoreOffset = circumference - (score / 100) * circumference;

  return (
    <section className="relative overflow-hidden mb-8">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-1 py-12 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2"
            >
              Welcome back, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-lg text-glow">{name}!</span>
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-lg"
            >
              Your daily metrics are looking strong. Keep up the momentum.
            </motion.p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-40 h-40 glass-card rounded-2xl flex items-center justify-center shadow-neon relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
            <svg viewBox="0 0 36 36" className="w-32 h-32 -rotate-90 relative z-10">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-white/5 stroke-current"
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
                stroke="url(#scoreGradient)"
                fill="transparent"
                strokeDasharray={`${circumference} ${circumference}`}
                className="filter drop-shadow-[0_0_4px_rgba(0,255,225,0.5)]"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center z-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-4xl font-bold text-white text-glow"
              >
                {score}
              </motion.span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">EchoScore</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
