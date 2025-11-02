
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkoutChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="h-full card-glass"
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Workout Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center text-muted-foreground">
            {/* Placeholder for a chart */}
            <p>Chart coming soon...</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
