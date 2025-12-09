import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Create Profile",
        desc: "Set your goals, body metrics, and preferences in under 60 seconds."
    },
    {
        num: "02",
        title: "Track Daily",
        desc: "Log workouts, meals, and mood entries with our rapid-entry system."
    },
    {
        num: "03",
        title: "Get Insights",
        desc: "Watch your dashboard update instantly with progress charts and health scores."
    },
    {
        num: "04",
        title: "Evolve",
        desc: "Use the data to adjust your habits and reach your peak performance."
    }
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="text-6xl font-bold text-white/5 mb-4 font-mono select-none absolute -top-8 -left-4 z-0">
                                {step.num}
                            </div>
                            <div className="relative z-10 p-6 pt-8 border-l border-white/10 h-full hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
