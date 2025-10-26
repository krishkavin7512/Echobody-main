import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dumbbell, Utensils, Heart, Zap, Flame, TrendingUp, Award } from "lucide-react";
import Layout from "@/components/Layout";

const Dashboard = () => {
  // Mock data - replace with API calls
  const echoScore = 82;
  const scoreBreakdown = [
    { label: "Workout Consistency", value: 85 },
    { label: "Calorie Balance", value: 72 },
    { label: "Sleep Quality", value: 90 },
  ];

  const quickStats = [
    { label: "Workouts This Week", value: "5", icon: Dumbbell, color: "text-primary" },
    { label: "Energy Level", value: "8/10", icon: Zap, color: "text-secondary" },
    { label: "Calories Today", value: "1,850", icon: Flame, color: "text-accent" },
    { label: "Current Streak", value: "7 days", icon: Award, color: "text-secondary" },
  ];

  const insights = [
    { icon: "💪", message: "Great job! 5-day workout streak" },
    { icon: "⚡", message: "Your energy has been low this week" },
    { icon: "🥗", message: "Protein intake below goal" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-secondary";
    if (score >= 60) return "text-yellow-500";
    if (score >= 40) return "text-orange-500";
    return "text-destructive";
  };

  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Row 1: Echo Score & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Echo Score Card */}
          <Card className="lg:col-span-2 glass-card">
            <CardHeader>
              <CardTitle className="text-xl">Your Echo Score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - echoScore / 100)}`}
                      className={getScoreColor(echoScore)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-6xl font-bold ${getScoreColor(echoScore)}`}>
                      {echoScore}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {scoreBreakdown.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>
              <div className="text-center text-sm">
                <span className="text-secondary font-medium">↑ 5% from last week</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gap-3 h-12 gradient-primary text-white">
                <Dumbbell className="w-5 h-5" />
                Log Workout
              </Button>
              <Button className="w-full justify-start gap-3 h-12 gradient-secondary text-white">
                <Utensils className="w-5 h-5" />
                Log Meal
              </Button>
              <Button className="w-full justify-start gap-3 h-12 gradient-accent text-white">
                <Heart className="w-5 h-5" />
                Log Mood
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Row 2: Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <TrendingUp className="w-5 h-5 text-muted-foreground" />
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

        {/* Row 3: Insights */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-xl">Your Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 flex items-start gap-3"
                >
                  <span className="text-2xl">{insight.icon}</span>
                  <p className="text-sm text-muted-foreground">{insight.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
