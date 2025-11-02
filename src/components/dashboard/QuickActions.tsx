import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell, Utensils, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  {
    label: "Log Workout",
    icon: <Dumbbell className="h-5 w-5" />,
    path: "/workouts",
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Log Meal",
    icon: <Utensils className="h-5 w-5" />,
    path: "/nutrition",
    color: "from-green-500 to-green-600",
  },
  {
    label: "Log Mood",
    icon: <Heart className="h-5 w-5" />,
    path: "/mood",
    color: "from-red-500 to-red-600",
  },
];

export default function QuickActions() {
  return (
    <Card className="h-full card-glass">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index + 0.5 }}
          >
            <Link to={action.path} className="block">
              <Button
                className={`w-full justify-start gap-3 p-6 text-lg font-semibold text-white rounded-lg shadow-lg
                bg-gradient-to-r ${action.color} hover:shadow-xl transition-all duration-300 focus-outline`}
                aria-label={action.label}
              >
                {action.icon}
                <span>{action.label}</span>
              </Button>
            </Link>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}