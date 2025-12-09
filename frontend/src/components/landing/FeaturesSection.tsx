import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Heart, Utensils, Zap, Brain, Shield } from "lucide-react";

const features = [
    {
        icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
        title: "Smart Analytics",
        desc: "Visualize your progress with beautiful charts that track every rep, calorie, and mood shift."
    },
    {
        icon: <Utensils className="w-6 h-6 text-orange-400" />,
        title: "Nutrition Tracking",
        desc: "Log meals instantly and see how your diet impacts your energy levels and recovery."
    },
    {
        icon: <Heart className="w-6 h-6 text-rose-500" />,
        title: "Holistic Health",
        desc: "It’s not just about gym. Track sleep, mood, and stress for a complete wellness picture."
    },
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Instant Insights",
        desc: "Get real-time feedback on your consistency and receive badges for hitting milestones."
    },
    {
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        title: "Mood Patterns",
        desc: "Understand the correlation between your workouts, food, and how you feel mentally."
    },
    {
        icon: <Shield className="w-6 h-6 text-green-400" />,
        title: "Private & Secure",
        desc: "Your health data is yours. We use enterprise-grade encryption to keep it safe."
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-zinc-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Everything you need, <br />
                        <span className="text-gray-500">all in one place.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Stop switching between five different apps. EchoBody brings your fitness, nutrition, and mental well-being together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
        >
            <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
        </motion.div>
    );
}
