
import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MiniSparklineProps {
  data: { name: string; value: number }[];
  title: string;
  value: string | number;
  color: string;
  ariaLabel: string;
}

export default function MiniSparkline({
  data,
  title,
  value,
  color,
  ariaLabel,
}: MiniSparklineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full progress-neon"
      role="img"
      aria-label={ariaLabel}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-0">
          <CardTitle className="text-md font-semibold text-muted-foreground">{title}</CardTitle>
          <div className="text-2xl font-bold text-foreground">{value}</div>
        </CardHeader>
        <CardContent className="h-20 p-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`color${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                fillOpacity={1}
                fill={`url(#color${title})`}
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
