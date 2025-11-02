
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NutritionToolbar from "../components/nutrition/NutritionToolbar";
import MealList from "../components/nutrition/MealList";
import MealDetailModal from "../components/nutrition/MealDetailModal";
import NutritionChart from "../components/nutrition/NutritionChart";
import "../styles/nutrition.css";
import { useCurrentUser } from "../hooks/useCurrentUser"; // Assuming this hook exists
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

// Placeholder for meal data and API calls
const mockMeals = [
  {
    id: "1",
    time: "08:00 AM",
    title: "Oatmeal with Berries",
    shortDesc: "Healthy breakfast",
    calories: 350,
    protein: 15,
    carbs: 50,
    fat: 10,
    type: "breakfast",
    notes: "Added a scoop of protein powder.",
  },
  {
    id: "2",
    time: "12:30 PM",
    title: "Chicken Salad",
    shortDesc: "Light and fresh lunch",
    calories: 450,
    protein: 40,
    carbs: 20,
    fat: 25,
    type: "lunch",
    notes: "Used olive oil dressing.",
  },
  {
    id: "3",
    time: "03:00 PM",
    title: "Protein Shake",
    shortDesc: "Post-workout snack",
    calories: 200,
    protein: 30,
    carbs: 15,
    fat: 5,
    type: "snack",
    notes: "Mixed with water and banana.",
  },
  {
    id: "4",
    time: "07:00 PM",
    title: "Salmon with Roasted Vegetables",
    shortDesc: "Nutrient-dense dinner",
    calories: 600,
    protein: 50,
    carbs: 30,
    fat: 30,
    type: "dinner",
    notes: "Asparagus and sweet potato.",
  },
];

export default function NutritionV2() {
  const { user, loading: userLoading } = useCurrentUser();
  const [meals, setMeals] = useState(mockMeals);
  const [filteredMeals, setFilteredMeals] = useState(mockMeals);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Placeholder for daily macros
  const dailyMacros = {
    calories: { current: 1600, target: 2000 },
    protein: { current: 120, target: 150 },
    carbs: { current: 180, target: 250 },
    fat: { current: 60, target: 70 },
  };

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredMeals(meals);
      return;
    }
    setFilteredMeals(
      meals.filter((meal) =>
        meal.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleFilter = (filter: string) => {
    if (filter === "all") {
      setFilteredMeals(meals);
      return;
    }
    setFilteredMeals(
      meals.filter((meal) =>
        meal.type.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const handleNewMeal = () => {
    alert("Log New Meal clicked!");
  };

  const handleSelectMeal = (mealId: string) => {
    const meal = meals.find((m) => m.id === mealId);
    setSelectedMeal(meal);
    setIsDetailModalOpen(true);
  };

  const handleEditMeal = (mealId: string) => {
    alert(`Edit meal ${mealId}`);
  };

  const handleDeleteMeal = (mealId: string) => {
    if (window.confirm("Are you sure you want to delete this meal?")) {
      setMeals(meals.filter((meal) => meal.id !== mealId));
      setFilteredMeals(filteredMeals.filter((meal) => meal.id !== mealId));
    }
  };

  const handleLoadMore = () => {
    setListLoading(true);
    setTimeout(() => {
      setMeals((prev) => [...prev, ...mockMeals.map((m, i) => ({ ...m, id: `${prev.length + i + 1}` }))]);
      setFilteredMeals((prev) => [...prev, ...mockMeals.map((m, i) => ({ ...m, id: `${prev.length + i + 1}` }))]);
      setListLoading(false);
      setHasMore(meals.length < 20); // Example: stop loading after 20 items
    }, 1000);
  };

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    // In a real app, you would fetch meals for this date
    console.log("Fetching meals for date:", date);
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
                <span>Calories: {dailyMacros.calories.current}/{dailyMacros.calories.target} kcal</span>
                <span>{(dailyMacros.calories.current / dailyMacros.calories.target * 100).toFixed(0)}%</span>
              </div>
              <Progress value={dailyMacros.calories.current / dailyMacros.calories.target * 100} className="h-2 bg-primary/20 [&::-webkit-progress-bar]:bg-primary/20 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-teal-400 [&::-webkit-progress-value]:to-purple-600" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Protein: {dailyMacros.protein.current}/{dailyMacros.protein.target}g</span>
                <span>{(dailyMacros.protein.current / dailyMacros.protein.target * 100).toFixed(0)}%</span>
              </div>
              <Progress value={dailyMacros.protein.current / dailyMacros.protein.target * 100} className="h-2 bg-primary/20 [&::-webkit-progress-bar]:bg-primary/20 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-green-400 [&::-webkit-progress-value]:to-teal-300" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Carbs: {dailyMacros.carbs.current}/{dailyMacros.carbs.target}g</span>
                <span>{(dailyMacros.carbs.current / dailyMacros.carbs.target * 100).toFixed(0)}%</span>
              </div>
              <Progress value={dailyMacros.carbs.current / dailyMacros.carbs.target * 100} className="h-2 bg-primary/20 [&::-webkit-progress-bar]:bg-primary/20 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-orange-400 [&::-webkit-progress-value]:to-yellow-500" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fat: {dailyMacros.fat.current}/{dailyMacros.fat.target}g</span>
                <span>{(dailyMacros.fat.current / dailyMacros.fat.target * 100).toFixed(0)}%</span>
              </div>
              <Progress value={dailyMacros.fat.current / dailyMacros.fat.target * 100} className="h-2 bg-primary/20 [&::-webkit-progress-bar]:bg-primary/20 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-pink-500 [&::-webkit-progress-value]:to-rose-500" />
            </div>
          </CardContent>
        </Card>
        <NutritionChart />
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
            loading={listLoading}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
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
              {/* Add more nutrition-specific quick actions here */}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <MealDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        meal={selectedMeal}
        onEdit={handleEditMeal}
      />
    </motion.div>
  );
}
