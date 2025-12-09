import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell, Utensils, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  {
    label: "Log Workout",
    sub: "Track your lifts",
    icon: <Dumbbell className="h-6 w-6" />,
    path: "/workouts",
    gradient: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/50",
  },
  {
    label: "Log Meal",
    sub: "Count your macros",
    icon: <Utensils className="h-6 w-6" />,
    path: "/nutrition",
    gradient: "from-emerald-400 to-green-600",
    shadow: "shadow-emerald-500/50",
  },
  {
    label: "Log Mood",
    sub: "Record how you feel",
    icon: <Heart className="h-6 w-6" />,
    path: "/mood",
    gradient: "from-rose-500 to-purple-600",
    shadow: "shadow-rose-500/50",
  },
];

export default function QuickActions() {
  return (
    <Card className="h-full glass-card border-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.label}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index + 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to={action.path} className="block group">
              <div
                className={`w-full p-4 rounded-xl relative overflow-hidden flex items-center gap-4 bg-gradient-to-r ${action.gradient} transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]`}
              >
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  {action.icon}
                </div>
                <div className="flex-1 text-white">
                  <div className="font-bold text-lg leading-tight">{action.label}</div>
                  <div className="text-xs text-white/80">{action.sub}</div>
                </div>
                {/* Shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </div>
            </Link>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}