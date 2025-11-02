
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cake, Ruler, Scale, Heart, Target } from "lucide-react";

interface ProfileStatsGridProps {
  user: {
    age?: number;
    height_cm?: number;
    weight_kg?: number;
    gender?: string;
    goal?: string;
  };
}

const statItems = [
  { key: "age", label: "Age", icon: Cake, unit: "years" },
  { key: "height_cm", label: "Height", icon: Ruler, unit: "cm" },
  { key: "weight_kg", label: "Weight", icon: Scale, unit: "kg" },
  { key: "gender", label: "Gender", icon: Heart },
  { key: "goal", label: "Goal", icon: Target },
];

export default function ProfileStatsGrid({ user }: ProfileStatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {statItems.map((item, index) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index + 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,255,209,0.1)" }}
          className="profile-neon rounded-lg overflow-hidden focus-outline"
          tabIndex={0}
          role="status"
          aria-label={`${item.label}: ${user[item.key as keyof typeof user]} ${item.unit || ""}`}
        >
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.label}
              </CardTitle>
              {item.icon && <item.icon className="h-5 w-5 text-primary" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {user[item.key as keyof typeof user] || "N/A"} {item.unit}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
