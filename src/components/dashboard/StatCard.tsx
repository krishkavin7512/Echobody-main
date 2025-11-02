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
  accent,
  percent,
  icon,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
      className="card-glass rounded-lg overflow-hidden"
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          {percent !== undefined && (
            <div className="h-1 w-full rounded-full bg-muted mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-full rounded-full bg-gradient-to-r ${accent}`}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}