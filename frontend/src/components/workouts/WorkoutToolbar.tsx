
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WorkoutToolbarProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  onNewWorkout: () => void;
}

export default function WorkoutToolbar({
  onSearch,
  onFilter,
  onNewWorkout,
}: WorkoutToolbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Debounce search input
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Your Workouts</h1>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search workouts..."
            className="pl-10 w-full focus-outline"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search workouts"
          />
        </div>
        <Select onValueChange={onFilter} aria-label="Filter workouts">
          <SelectTrigger className="w-[180px] focus-outline">
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="chest">Chest</SelectItem>
            <SelectItem value="back">Back</SelectItem>
            <SelectItem value="legs">Legs</SelectItem>
            <SelectItem value="arms">Arms</SelectItem>
            <SelectItem value="shoulders">Shoulders</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={onNewWorkout} className="focus-outline" aria-label="Log new workout">
          <PlusCircle className="mr-2 h-5 w-5" />
          Log Workout
        </Button>
      </div>
    </motion.div>
  );
}
