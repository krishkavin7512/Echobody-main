import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Plus, Edit, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Nutrition = () => {
  const [open, setOpen] = useState(false);
  
  const dailySummary = {
    calories: { consumed: 1850, goal: 2200 },
    protein: { consumed: 120, goal: 150 },
    carbs: { consumed: 180, goal: 250 },
    fats: { consumed: 65, goal: 70 },
  };

  const meals = [
    {
      id: "1",
      type: "Breakfast",
      time: "08:30",
      food: "Oatmeal with berries",
      calories: 350,
      protein: 12,
      carbs: 55,
      fats: 8,
    },
    {
      id: "2",
      type: "Lunch",
      time: "13:00",
      food: "Grilled chicken salad",
      calories: 450,
      protein: 45,
      carbs: 30,
      fats: 18,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Meal logged successfully!");
    setOpen(false);
  };

  return (
    <Layout title="Nutrition">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">Track Your Nutrition</h3>
            <p className="text-sm text-muted-foreground">Monitor your daily food intake and macros</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-white gap-2">
                <Plus className="w-4 h-4" />
                Log Meal
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Log Meal</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input type="time" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Meal Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meal type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Breakfast">Breakfast</SelectItem>
                        <SelectItem value="Lunch">Lunch</SelectItem>
                        <SelectItem value="Dinner">Dinner</SelectItem>
                        <SelectItem value="Snack">Snack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Food Name</Label>
                    <Input placeholder="e.g., Grilled chicken salad" />
                  </div>
                  <div className="space-y-2">
                    <Label>Calories</Label>
                    <Input type="number" placeholder="450" />
                  </div>
                  <div className="space-y-2">
                    <Label>Protein (g)</Label>
                    <Input type="number" placeholder="45" />
                  </div>
                  <div className="space-y-2">
                    <Label>Carbs (g)</Label>
                    <Input type="number" placeholder="30" />
                  </div>
                  <div className="space-y-2">
                    <Label>Fats (g)</Label>
                    <Input type="number" placeholder="18" />
                  </div>
                </div>
                <Button type="submit" className="w-full gradient-primary text-white">
                  Save Meal
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Daily Summary */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Today's Nutrition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(dailySummary).map(([key, data]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium capitalize">{key}</span>
                    <span className="text-muted-foreground">
                      {data.consumed}/{data.goal}
                    </span>
                  </div>
                  <Progress value={(data.consumed / data.goal) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meals List */}
        <div className="space-y-4">
          {["Breakfast", "Lunch", "Dinner", "Snack"].map((mealType) => {
            const mealItems = meals.filter((m) => m.type === mealType);
            if (mealItems.length === 0) return null;

            return (
              <Card key={mealType} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">{mealType}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mealItems.map((meal) => (
                      <div
                        key={meal.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">{meal.time}</span>
                            <span className="font-medium">{meal.food}</span>
                          </div>
                          <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                            <span>{meal.calories} kcal</span>
                            <span>P: {meal.protein}g</span>
                            <span>C: {meal.carbs}g</span>
                            <span>F: {meal.fats}g</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Nutrition;
