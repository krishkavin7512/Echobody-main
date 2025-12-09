
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Insight {
  id: string;
  title: string;
  description: string;
}

const insights: Insight[] = [
  {
    id: "1",
    title: "New Peak Performance",
    description: "You hit a new personal best in your last workout!",
  },
  {
    id: "2",
    title: "Mindful Moment",
    description: "You've logged a mood entry for 5 days in a row.",
  },
  {
    id: "3",
    title: "Nutrition Tip",
    description: "Consider adding more protein to your next meal.",
  },
  {
    id: "4",
    title: "Consistency is Key",
    description: "You've maintained your workout schedule for 3 weeks straight.",
  },
];

export default function InsightsFeed() {
  return (
    <Card className="h-full card-glass">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Your Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <AnimatePresence>
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-lg bg-background/50 shadow-sm border border-border focus-outline"
              tabIndex={0}
              aria-label={`${insight.title}: ${insight.description}`}
            >
              <h3 className="font-semibold text-foreground">{insight.title}</h3>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
