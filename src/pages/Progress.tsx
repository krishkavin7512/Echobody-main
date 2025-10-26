import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Flame, Award } from "lucide-react";
import Layout from "@/components/Layout";

const Progress = () => {
  const stats = [
    { label: "Total Workouts", value: "156", icon: Trophy, color: "text-primary" },
    { label: "Total Calories Burned", value: "42,500", icon: Flame, color: "text-accent" },
    { label: "Longest Streak", value: "14 days", icon: Award, color: "text-secondary" },
    { label: "Average Echo Score", value: "78", icon: Target, color: "text-primary" },
  ];

  const personalRecords = [
    { exercise: "Bench Press", weight: "100 kg", date: "2024-01-10" },
    { exercise: "Squat", weight: "140 kg", date: "2024-01-08" },
    { exercise: "Deadlift", weight: "160 kg", date: "2024-01-05" },
  ];

  return (
    <Layout title="Progress">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Echo Score Trend */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Echo Score Trend (90 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Chart placeholder - Integrate with charting library
            </div>
          </CardContent>
        </Card>

        {/* Personal Records */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Personal Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {personalRecords.map((record, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                >
                  <div>
                    <p className="font-medium">{record.exercise}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(record.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-primary">{record.weight}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Progress;
