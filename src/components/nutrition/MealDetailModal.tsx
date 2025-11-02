
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Utensils, Flame, Milk, Beef, Carrot, Edit, X } from "lucide-react";

interface MealDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  meal: {
    id: string;
    time: string;
    title: string;
    shortDesc: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    type: string;
    notes?: string;
  } | null;
  onEdit: (mealId: string) => void;
}

const getMealIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "breakfast":
      return <Milk className="h-6 w-6 text-yellow-500" />;
    case "lunch":
      return <Carrot className="h-6 w-6 text-orange-500" />;
    case "dinner":
      return <Beef className="h-6 w-6 text-red-500" />;
    case "snack":
      return <Utensils className="h-6 w-6 text-green-500" />;
    default:
      return <Utensils className="h-6 w-6 text-primary" />;
  }
};

export default function MealDetailModal({
  isOpen,
  onClose,
  meal,
  onEdit,
}: MealDetailModalProps) {
  if (!meal) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  {getMealIcon(meal.type)} {meal.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground flex items-center gap-1">
                  {meal.shortDesc} - {meal.time}
                </DialogDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full focus-outline"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-400" />
                  <span className="text-muted-foreground">Calories:</span>
                  <span className="font-semibold text-foreground">{meal.calories} kcal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Protein:</span>
                  <span className="font-semibold text-foreground">{meal.protein}g</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Carbs:</span>
                  <span className="font-semibold text-foreground">{meal.carbs}g</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Fat:</span>
                  <span className="font-semibold text-foreground">{meal.fat}g</span>
                </div>
                {meal.notes && (
                  <div>
                    <h4 className="font-semibold text-foreground mt-2">Notes:</h4>
                    <p className="text-muted-foreground text-sm">{meal.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={() => onEdit(meal.id)} className="focus-outline">
                  <Edit className="mr-2 h-4 w-4" /> Edit Meal
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
