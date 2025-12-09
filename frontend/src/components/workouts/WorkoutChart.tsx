import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workout } from "@/services/workoutService";

interface WorkoutChartProps {
  workouts: Workout[];
}

export default function WorkoutChart({ workouts }: WorkoutChartProps) {
  if (!workouts || workouts.length === 0) return null;

  // Process data for the chart - calculate volume per day
  const data = workouts.map(workout => {
    let dateStr = "N/A";
    if (workout.date) {
      const d = new Date(workout.date);
      if (!isNaN(d.getTime())) {
        dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      }
    }
    return {
      date: dateStr,
      volume: (workout.sets || 0) * (workout.reps || 0) * (workout.weight || 0),
      calories: workout.caloriesBurned || 0,
    };
  }).slice(-7); // Last 7 workouts

  return (
    <Card className="glass-card mb-8">
      <CardHeader>
        <CardTitle className="text-white">Training Volume (Last 7 Sessions)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis dataKey="date" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#2dd4bf' }}
            />
            <Area type="monotone" dataKey="volume" stroke="#2dd4bf" strokeWidth={2} fillOpacity={1} fill="url(#colorVolume)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
