
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkoutCard from "./WorkoutCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Workout } from "@/services/workoutService";

interface WorkoutListProps {
  workouts: Workout[];
  onSelect: (workoutId: string) => void;
  onEdit: (workoutId: string) => void;
  onDelete: (workoutId: string) => void;
  loading: boolean;
  onLoadMore: () => void;
  hasMore: boolean;
}

export default function WorkoutList({
  workouts,
  onSelect,
  onEdit,
  onDelete,
  loading,
  onLoadMore,
  hasMore,
}: WorkoutListProps) {
  if (loading && workouts.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    );
  }

  if (workouts.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No workouts found. Log your first workout!</p>
        {/* Potentially add a button to log new workout */}
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
      >
        <AnimatePresence>
          {workouts.map((workout) => (
            <motion.div
              key={workout.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <WorkoutCard
                workout={workout}
                onSelect={onSelect}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button onClick={onLoadMore} disabled={loading} className="focus-outline">
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
}
