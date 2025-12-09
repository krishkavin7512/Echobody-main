
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: {
    value: string | number;
    isPositive: boolean;
  };
}

export default function StatCard({
  icon,
  label,
  value,
  delta,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,255,220,0.2)" }}
      className="progress-neon rounded-lg overflow-hidden cursor-pointer focus-outline"
      role="status"
      aria-label={`${label}: ${value}`}
      tabIndex={0}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {label}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {delta && (
            <p
              className={`text-xs flex items-center ${delta.isPositive ? "text-green-500" : "text-red-500"}`}
            >
              {delta.isPositive ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {delta.value}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
