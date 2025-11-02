import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [{ name: "Score", value: 82 }];
const COLORS = ["#3b82f6", "#e5e7eb"];

export function EchoScoreCard() {
  return (
    <Card className="h-full transition-shadow duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Your EchoScore</CardTitle>
        <CardDescription>A holistic measure of your well-being.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="relative h-48 w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[{ value: 82 }, { value: 18 }]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={450}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell fill={COLORS[0]} />
                <Cell fill={COLORS[1]} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-primary">82</span>
            <span className="text-sm text-muted-foreground">Excellent</span>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Keep up the great work!</h3>
          <p className="text-muted-foreground">
            Your score is based on your recent activity, nutrition, and mood logs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
