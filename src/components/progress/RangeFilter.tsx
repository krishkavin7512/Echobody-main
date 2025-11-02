
import React from "react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RangeFilterProps {
  onRangeChange: (range: string) => void;
  initialRange?: string;
}

export default function RangeFilter({
  onRangeChange,
  initialRange = "90",
}: RangeFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Select onValueChange={onRangeChange} defaultValue={initialRange} aria-label="Select date range for progress data">
        <SelectTrigger className="w-[120px] focus-outline">
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30">Last 30 Days</SelectItem>
          <SelectItem value="60">Last 60 Days</SelectItem>
          <SelectItem value="90">Last 90 Days</SelectItem>
          <SelectItem value="365">Last Year</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
}
