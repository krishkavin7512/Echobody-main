import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  accent: string;
  percent?: number;
  icon?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  accent, // Expecting gradient classes like "from-primary to-secondary"
  percent,
  icon,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-card rounded-xl overflow-hidden relative group"
    >
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${accent} opacity-50 group-hover:opacity-100 transition-opacity`} />

      <Card className="bg-transparent border-none shadow-none relative z-10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-extrabold text-white tracking-tight">{value}</div>
          {percent !== undefined && (
            <div className="h-1.5 w-full rounded-full bg-white/10 mt-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${accent} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Glow Effect */}
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${accent} rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none`} />
    </motion.div>
  );
}