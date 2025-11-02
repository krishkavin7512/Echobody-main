
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface MoodToolbarProps {
  onLogMood: () => void;
}

export default function MoodToolbar({ onLogMood }: MoodToolbarProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Mood & Energy</h1>
      <Button onClick={onLogMood} className="focus-outline" aria-label="Log new mood">
        <PlusCircle className="mr-2 h-5 w-5" />
        Log Mood
      </Button>
    </motion.div>
  );
}
