
import React from "react";
// forcing re-analysis
import { motion, AnimatePresence } from "framer-motion";
import MealCard from "./MealCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Meal } from "@/services/nutritionService";

interface MealListProps {
  meals: Meal[];
  onSelect: (mealId: string) => void;
  onEdit: (mealId: string) => void;
  onDelete: (mealId: string) => void;
  loading: boolean;
  onLoadMore: () => void;
  hasMore: boolean;
}

export default function MealList({
  meals,
  onSelect,
  onEdit,
  onDelete,
  loading,
  onLoadMore,
  hasMore,
}: MealListProps) {
  if (loading && meals.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-48 w-full" />
        ))}
      </div>
    );
  }

  if (meals.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No meals found for this day. Log your first meal!</p>
        {/* Potentially add a button to log new meal */}
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
          {meals.map((meal) => (
            <motion.div
              key={meal.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <MealCard
                meal={meal}
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
