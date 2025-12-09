
import React, { useState } from "react";
import { motion } from "framer-motion";
import NutritionToolbar from "../components/nutrition/NutritionToolbar";
import MealList from "../components/nutrition/MealList";
import MealDetailModal from "../components/nutrition/MealDetailModal";
import NutritionChart from "../components/nutrition/NutritionChart";
import MealFormModal from "../components/nutrition/MealFormModal";
import "../styles/nutrition.css";
// import { useCurrentUser } from "../hooks/useCurrentUser"; 
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { nutritionService, Meal } from "@/services/nutritionService";
import { toast } from "sonner";

export default function NutritionV2() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Fetch Meals
  const { data: meals = [], isLoading } = useQuery({
    queryKey: ['meals'],
    queryFn: nutritionService.getAll,
  });

  const deleteMutation = useMutation({
    mutationFn: nutritionService.delete,
    onSuccess: () => {
      toast.success("Meal deleted");
      queryClient.invalidateQueries({ queryKey: ['meals'] });
      queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
    },
    onError: () => toast.error("Failed to delete meal"),
  });

  // Calculate Macros
  const dailyTop = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 70
  };

  const currentMacros = meals.reduce((acc: any, meal: Meal) => ({
    calories: acc.calories + meal.calories,
    protein: acc.protein + meal.protein,
    carbs: acc.carbs + meal.carbs,
    fat: acc.fat + meal.fat
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const filteredMeals = meals.filter((meal: Meal) => {
    const matchesSearch = meal.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || meal.type.toLowerCase() === filterType.toLowerCase();
    // In a real app we would filter by date too
    return matchesSearch && matchesFilter;
  });

  const handleSearch = (query: string) => setSearchQuery(query);
  const handleFilter = (filter: string) => setFilterType(filter);
  const handleDateChange = (date: Date | undefined) => setSelectedDate(date);

  const handleNewMeal = () => {
    setIsFormModalOpen(true);
  };

  const handleSelectMeal = (mealId: string) => {
    const meal = meals.find((m: Meal) => m.id === mealId);
    if (meal) {
      setSelectedMeal(meal);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditMeal = (mealId: string) => {
    const meal = meals.find((m: Meal) => m.id === mealId);
    if (meal) {
      setSelectedMeal(meal);
      setIsFormModalOpen(true);
    }
  };



  const handleDeleteMeal = (mealId: string) => {
    deleteMutation.mutate(mealId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <NutritionToolbar
        onSearch={handleSearch}
        onFilter={handleFilter}
        onNewMeal={handleNewMeal}
        onDateChange={handleDateChange}
      />

      {/* Hero Summary */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card className="nutrition-neon p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold">Daily Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Calories: {currentMacros.calories}/{dailyTop.calories} kcal</span>
                <span>{(currentMacros.calories / dailyTop.calories * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.calories / dailyTop.calories * 100)} className="h-2 bg-primary/20" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Protein: {currentMacros.protein}/{dailyTop.protein}g</span>
                <span>{(currentMacros.protein / dailyTop.protein * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.protein / dailyTop.protein * 100)} className="h-2 bg-primary/20 [&::-webkit-progress-value]:bg-green-400" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Carbs: {currentMacros.carbs}/{dailyTop.carbs}g</span>
                <span>{(currentMacros.carbs / dailyTop.carbs * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.carbs / dailyTop.carbs * 100)} className="h-2 bg-primary/20 [&::-webkit-progress-value]:bg-orange-400" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fat: {currentMacros.fat}/{dailyTop.fat}g</span>
                <span>{(currentMacros.fat / dailyTop.fat * 100).toFixed(0)}%</span>
              </div>
              <Progress value={Math.min(100, currentMacros.fat / dailyTop.fat * 100)} className="h-2 bg-primary/20 [&::-webkit-progress-value]:bg-pink-500" />
            </div>
          </CardContent>
        </Card>
        <NutritionChart meals={meals} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <MealList
            meals={filteredMeals}
            onSelect={handleSelectMeal}
            onEdit={handleEditMeal}
            onDelete={handleDeleteMeal}
            loading={isLoading}
            onLoadMore={() => { }}
            hasMore={false}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 hidden lg:block space-y-8"
        >
          {/* Quick Actions for Nutrition */}
          <Card className="nutrition-neon p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <Button onClick={handleNewMeal} className="w-full focus-outline">
                <PlusCircle className="mr-2 h-5 w-5" /> Log New Meal
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <MealDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        meal={selectedMeal as any}
        onEdit={handleEditMeal}
      />
      <MealFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        initialData={selectedMeal}
      />
    </motion.div>
  );
}
