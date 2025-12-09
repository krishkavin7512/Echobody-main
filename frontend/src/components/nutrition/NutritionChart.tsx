import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Meal } from "@/services/nutritionService";

interface NutritionChartProps {
  meals: Meal[];
}

export default function NutritionChart({ meals }: NutritionChartProps) {
  if (!meals || meals.length === 0) return null;

  // Group meals by date
  const groupedData = meals.reduce((acc, meal) => {
    let date = "N/A";
    if (meal.dateTime) {
      const d = new Date(meal.dateTime);
      if (!isNaN(d.getTime())) {
        date = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      }
    }

    if (!acc[date]) {
      acc[date] = { date, protein: 0, carbs: 0, fat: 0 };
    }
    acc[date].protein += meal.protein;
    acc[date].carbs += meal.carbs;
    acc[date].fat += meal.fat;
    return acc;
  }, {} as Record<string, any>);

  const data = Object.values(groupedData).slice(-7);

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-white">Macro Breakdown (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="date" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            />
            <Legend wrapperStyle={{ paddingTop: '10px' }} />
            <Bar dataKey="protein" stackId="a" fill="#38bdf8" name="Protein" radius={[0, 0, 4, 4]} />
            <Bar dataKey="carbs" stackId="a" fill="#2dd4bf" name="Carbs" />
            <Bar dataKey="fat" stackId="a" fill="#f43f5e" name="Fat" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
