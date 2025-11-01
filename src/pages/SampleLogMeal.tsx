import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Utensils, PlusCircle, Trash2, RotateCcw } from 'lucide-react';
import { toast } from "sonner";

interface FoodItem {
  name: string;
  quantity: string;
  calories: number;
}

const SampleLogMeal: React.FC = () => {
  const navigate = useNavigate();
  const [mealDate, setMealDate] = useState<string>('');
  const [mealType, setMealType] = useState<string>('');
  const [mealNotes, setMealNotes] = useState<string>('');
  const [foodItems, setFoodItems] = useState<FoodItem[]>([{ name: '', quantity: '', calories: 0 }]);

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleFoodItemChange = (index: number, field: keyof FoodItem, value: string | number) => {
    const newFoodItems = [...foodItems];
    (newFoodItems[index][field] as any) = value;
    setFoodItems(newFoodItems);
  };

  const addFoodItem = () => {
    setFoodItems([...foodItems, { name: '', quantity: '', calories: 0 }]);
  };

  const removeFoodItem = (index: number) => {
    const newFoodItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(newFoodItems);
  };

  const handleClearForm = () => {
    setMealDate('');
    setMealType('');
    setMealNotes('');
    setFoodItems([{ name: '', quantity: '', calories: 0 }]);
    toast.info("Form cleared!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mealData = {
      mealDate,
      mealType,
      mealNotes,
      foodItems,
    };
    console.log("Logged Meal:", mealData);
    toast.success("Meal logged successfully! (See console for data)");
    // In a real app, you would send this data to a backend API
    handleClearForm(); // Clear form after successful submission
    // navigate(-1); // Optionally go back to dashboard after logging
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Button
          variant="outline"
          className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground mb-8"
          onClick={() => navigate(-1)} // Go back to the previous page (dashboard)
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Log Your Meal <Utensils className="inline-block ml-2" />
        </motion.h1>

        <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Card className="bg-white/5 border-border h-full">
            <CardHeader>
              <CardTitle className="text-foreground">Meal Details</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mealDate" className="text-muted-foreground">Date</Label>
                    <Input
                      id="mealDate"
                      type="date"
                      value={mealDate}
                      onChange={(e) => setMealDate(e.target.value)}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mealType" className="text-muted-foreground">Meal Type</Label>
                    <Select onValueChange={setMealType} value={mealType} required>
                      <SelectTrigger className="bg-white/10 border-border text-foreground focus:border-primary">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border text-foreground">
                        <SelectItem value="breakfast">Breakfast</SelectItem>
                        <SelectItem value="lunch">Lunch</SelectItem>
                        <SelectItem value="dinner">Dinner</SelectItem>
                        <SelectItem value="snack">Snack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Food Items</h3>
                  <div className="space-y-4">
                    {foodItems.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-4 border-border rounded-md bg-white/5">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor={`food-name-${index}`} className="text-muted-foreground">Food Name</Label>
                          <Input
                            id={`food-name-${index}`}
                            type="text"
                            value={item.name}
                            onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            placeholder="Chicken Breast"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`quantity-${index}`} className="text-muted-foreground">Quantity</Label>
                          <Input
                            id={`quantity-${index}`}
                            type="text"
                            value={item.quantity}
                            onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            placeholder="150g"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`calories-${index}`} className="text-muted-foreground">Calories</Label>
                          <Input
                            id={`calories-${index}`}
                            type="number"
                            value={item.calories}
                            onChange={(e) => handleFoodItemChange(index, 'calories', Number(e.target.value))}
                            className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                            min="0"
                            required
                          />
                        </div>
                        <div className="space-y-2 flex items-end gap-2">
                          {foodItems.length > 1 && (
                            <Button type="button" variant="destructive" size="icon" onClick={() => removeFoodItem(index)} className="bg-red-600 hover:bg-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" className="mt-4 bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={addFoodItem}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Food Item
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mealNotes" className="text-muted-foreground">Meal Notes</Label>
                  <Textarea
                    id="mealNotes"
                    value={mealNotes}
                    onChange={(e) => setMealNotes(e.target.value)}
                    className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Any additional notes about your meal..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-grow bg-gradient-to-r from-primary to-secondary text-foreground">
                    Save Meal
                  </Button>
                  <Button type="button" variant="outline" className="flex-grow bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={handleClearForm}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SampleLogMeal;
