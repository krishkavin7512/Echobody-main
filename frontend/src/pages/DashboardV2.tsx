
import React from "react";
import { motion } from "framer-motion";
import AnimatedHero from "../components/dashboard/AnimatedHero";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import InsightsFeed from "../components/dashboard/InsightsFeed";
import "../styles/dashboard.css";
import { useCurrentUser } from "../hooks/useCurrentUser";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboardService";

export default function DashboardV2() {
  const { user, loading } = useCurrentUser();

  const { data: summary, isLoading: summaryLoading } = useQuery({
    queryKey: ['dashboardSummary'],
    queryFn: dashboardService.getSummary,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background relative z-10">
      <AnimatedHero name={user?.name} score={82} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Workouts"
            value={summaryLoading ? "..." : summary?.totalWorkouts?.toString() || "0"}
            accent="from-teal-400 to-purple-600"
            percent={60}
          />
          <StatCard
            title="Meals Logged"
            value={summaryLoading ? "..." : summary?.totalMeals?.toString() || "0"}
            accent="from-green-400 to-teal-300"
            percent={80}
          />
          <StatCard
            title="Cals Consumed"
            value={summaryLoading ? "..." : summary?.totalCaloriesConsumed?.toString() || "0"}
            accent="from-orange-400 to-yellow-500"
            percent={75}
          />
          <StatCard
            title="Cals Burned"
            value={summaryLoading ? "..." : summary?.totalCaloriesBurned?.toString() || "0"}
            accent="from-pink-500 to-rose-500"
            percent={90}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <InsightsFeed />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
