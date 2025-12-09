import React from "react";
import { Link } from "react-router-dom";
import { Activity, Twitter, Instagram, Github } from "lucide-react";

export default function LandingFooter() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">EchoBody</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6">
                            The all-in-one wellness companion that reflects your progress perfectly.
                            Track workouts, nutrition, and mood in one beautiful interface.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" />
                            <SocialLink icon={<Instagram className="w-5 h-5" />} href="#" />
                            <SocialLink icon={<Github className="w-5 h-5" />} href="#" />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <FooterLink to="/features">Features</FooterLink>
                            <FooterLink to="/pricing">Pricing</FooterLink>
                            <FooterLink to="/dashboard">Dashboard</FooterLink>
                            <FooterLink to="/updates">Updates</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/careers">Careers</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="/privacy">Privacy Policy</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} EchoBody Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-all"
        >
            {icon}
        </a>
    );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
    return (
        <li>
            <Link to={to} className="text-gray-400 hover:text-cyan-400 transition-colors">
                {children}
            </Link>
        </li>
    );
}
