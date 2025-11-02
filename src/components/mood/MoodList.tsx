
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MoodEntryCard from "./MoodEntryCard";
import { Skeleton } from "@/components/ui/skeleton";

interface MoodListProps {
  entries: any[]; // Replace 'any' with actual MoodEntry type
  onSelect: (entryId: string) => void;
  onEdit: (entryId: string) => void;
  onDelete: (entryId: string) => void;
  loading: boolean;
}

export default function MoodList({
  entries,
  onSelect,
  onEdit,
  onDelete,
  loading,
}: MoodListProps) {
  if (loading && entries.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-40 w-full" />
        ))}
      </div>
    );
  }

  if (entries.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No mood entries yet. Log your first mood!</p>
      </motion.div>
    );
  }

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence>
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <MoodEntryCard
              entry={entry}
              onSelect={onSelect}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
