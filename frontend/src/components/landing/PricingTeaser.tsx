import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function PricingTeaser() {
    return (
        <section className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Simple, transparent pricing.
                </h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    Start for free and upgrade as you grow. No hidden fees.
                </p>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    {/* Free Tier */}
                    <div className="w-full max-w-sm p-8 rounded-2xl bg-white/5 border border-white/10 text-left">
                        <h3 className="text-xl font-bold text-white">Starter</h3>
                        <div className="text-3xl font-bold text-white mt-2 mb-6">$0</div>
                        <ul className="space-y-3 mb-8 text-gray-400">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Basic Workout Tracking</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 7-Day History</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Standard Support</li>
                        </ul>
                        <Button className="w-full" variant="outline" asChild>
                            <Link to="/register">Get Started Free</Link>
                        </Button>
                    </div>

                    {/* Pro Tier */}
                    <div className="w-full max-w-sm p-8 rounded-2xl bg-gradient-to-b from-cyan-900/20 to-black border border-cyan-500/30 text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                        <h3 className="text-xl font-bold text-white">Pro</h3>
                        <div className="text-3xl font-bold text-white mt-2 mb-6">$9<span className="text-sm font-normal text-gray-400">/mo</span></div>
                        <ul className="space-y-3 mb-8 text-gray-300">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Unlimited Tracking</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Advanced Analytics</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Priority Support</li>
                        </ul>
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold" asChild>
                            <Link to="/pricing">View Full Pricing <ArrowRight className="w-4 h-4 ml-1" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
