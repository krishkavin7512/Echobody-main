
import React from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressChartProps {
  data: { date: string; score: number }[];
  title: string;
  ariaLabel: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    // Placeholder for delta calculation if needed
    // const prevScore = ...
    // const delta = score - prevScore;
    return (
      <div className="bg-card p-3 rounded-lg shadow-lg border border-border text-sm">
        <p className="font-bold text-foreground">{label}</p>
        <p className="text-primary">Score: {score}</p>
        {/* {delta !== undefined && (
          <p className={`${delta >= 0 ? "text-green-500" : "text-red-500"}`}>
            {delta >= 0 ? "+" : ""}{delta} from previous
          </p>
        )} */}
      </div>
    );
  }
  return null;
};

export default function ProgressChart({
  data,
  title,
  ariaLabel,
}: ProgressChartProps) {
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
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="h-80 p-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#888" tickFormatter={(tick) => new Date(tick).toLocaleDateString("en-US", { month: "short", day: "numeric" })} />
              <YAxis stroke="#888" />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#00ffd8', strokeWidth: 1 }} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="url(#colorScore)"
                strokeWidth={2}
                dot={{ r: 4, fill: '#00ffd8', stroke: '#00ffd8', strokeWidth: 1 }}
                activeDot={{ r: 6, fill: '#7c3aed', stroke: '#7c3aed', strokeWidth: 2 }}
                animationDuration={1500}
              />
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#00ffd8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
