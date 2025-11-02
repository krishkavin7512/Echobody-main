
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Utensils, Flame, Milk, Beef, Carrot } from "lucide-react";

interface MealCardProps {
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
  };
  onSelect: (mealId: string) => void;
  onEdit: (mealId: string) => void;
  onDelete: (mealId: string) => void;
}

const getMealIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "breakfast":
      return <Milk className="h-5 w-5 text-yellow-500" />;
    case "lunch":
      return <Carrot className="h-5 w-5 text-orange-500" />;
    case "dinner":
      return <Beef className="h-5 w-5 text-red-500" />;
    case "snack":
      return <Utensils className="h-5 w-5 text-green-500" />;
    default:
      return <Utensils className="h-5 w-5 text-primary" />;
  }
};

export default function MealCard({
  meal,
  onSelect,
  onEdit,
  onDelete,
}: MealCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 10px 20px rgba(0,255,220,0.1)" }}
      className="nutrition-neon rounded-xl overflow-hidden cursor-pointer focus-outline"
      onClick={() => onSelect(meal.id)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${meal.title} at ${meal.time}`}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              {getMealIcon(meal.type)} {meal.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{meal.time}</p>
          </div>
          <p className="text-sm text-muted-foreground">{meal.shortDesc}</p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <div className="flex items-center gap-1 mb-1">
            <Flame className="h-4 w-4 text-orange-400" /> Calories: <span className="text-foreground font-medium">{meal.calories} kcal</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Protein: <span className="font-medium">{meal.protein}g</span></span>
            <span>Carbs: <span className="font-medium">{meal.carbs}g</span></span>
            <span>Fat: <span className="font-medium">{meal.fat}g</span></span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(meal.id);
            }}
            aria-label={`Edit ${meal.title}`}
            className="focus-outline"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(meal.id);
            }}
            aria-label={`Delete ${meal.title}`}
            className="focus-outline"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
