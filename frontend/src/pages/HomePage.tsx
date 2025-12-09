import React, { useEffect } from "react";
import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingTeaser from "@/components/landing/PricingTeaser";
import LandingFooter from "@/components/landing/LandingFooter";

const HomePage = () => {
  // Ensure we start at the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30">
      <LandingNavbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingTeaser />
      </main>

      <LandingFooter />
    </div>
  );
};

export default HomePage;