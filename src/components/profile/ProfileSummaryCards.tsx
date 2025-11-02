
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, CalendarDays, TrendingUp } from "lucide-react";

interface ProfileSummaryCardsProps {
  stats: {
    totalWorkouts: number;
    memberSince: string;
    currentStreak: number;
  };
}

const summaryItems = [
  { key: "totalWorkouts", label: "Total Workouts", icon: Dumbbell, unit: "" },
  { key: "memberSince", label: "Member Since", icon: CalendarDays, unit: "" },
  { key: "currentStreak", label: "Current Streak", icon: TrendingUp, unit: "days" },
];

export default function ProfileSummaryCards({ stats }: ProfileSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {summaryItems.map((item, index) => (
        <motion.div
          key={item.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,255,209,0.1)" }}
          className="profile-neon rounded-lg overflow-hidden focus-outline"
          tabIndex={0}
          role="status"
          aria-label={`${item.label}: ${stats[item.key as keyof typeof stats]} ${item.unit || ""}`}
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
                {stats[item.key as keyof typeof stats]} {item.unit}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
