import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Flame, Activity, Zap } from "lucide-react";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black pb-20 lg:pb-0">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[30%] w-[20%] h-[20%] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 text-center lg:text-left">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 mx-auto lg:mx-0"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">v2.0 is now live</span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Your fitness, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            reflected perfectly.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        The all-in-one companion for your wellness journey. Track workouts, nutrition, and mood with effortless precision and beautiful insights.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            onClick={() => navigate("/register")}
                            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold h-12 px-8 text-lg shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                        >
                            Start for Free <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto h-12 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            See how it works
                        </Button>
                    </div>

                    <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start text-sm text-gray-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs font-bold text-gray-400">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <p>Trusted by 10,000+ early adopters</p>
                    </div>
                </motion.div>

                {/* Right Visual (Mock Dashboard) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="relative perspective-1000 hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-lg mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-purple-500/10">
                        {/* Floating Elements */}
                        <FloatingStats
                            icon={<Flame className="text-orange-500" />}
                            label="Calories Burned"
                            value="1,240"
                            delay={1.2}
                            className="absolute -top-6 -right-6 z-20"
                        />
                        <FloatingStats
                            icon={<Activity className="text-green-400" />}
                            label="Avg Heart Rate"
                            value="142 bpm"
                            delay={1.4}
                            className="absolute -bottom-6 -left-6 z-20"
                        />

                        {/* Main Card Content Dummy */}
                        <div className="h-full w-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-4">
                                <div className="h-8 w-32 bg-white/10 rounded-lg animate-pulse" />
                                <div className="h-8 w-8 bg-white/10 rounded-full animate-pulse" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-24 w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/10 flex items-center justify-center">
                                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">92</div>
                                </div>
                                <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
                                <div className="h-4 w-1/2 bg-white/10 rounded animate-pulse" />
                            </div>

                            {/* Graphs */}
                            <div className="flex gap-2 items-end h-32 mt-4 pb-2 justify-between">
                                {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                                        className="w-full bg-cyan-500/30 rounded-t-sm hover:bg-cyan-400 transition-colors"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function FloatingStats({ icon, label, value, delay, className }: any) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay, duration: 0.5 }}
            className={`bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-xl flex items-center gap-4 ${className}`}
        >
            <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
            <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="font-bold text-white shadow-glow">{value}</p>
            </div>
        </motion.div>
    )
}
