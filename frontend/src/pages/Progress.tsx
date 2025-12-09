import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Flame, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { useQuery } from "@tanstack/react-query";
import { progressService } from "@/services/progressService";
import ProgressChart from "@/components/progress/ProgressChart";
import { motion } from "framer-motion";

const Progress = () => {
  const { data: summary, isLoading: summaryLoading } = useQuery({
    queryKey: ['progressSummary'],
    queryFn: async () => {
      const res = await progressService.getSummary();
      return res.data;
    }
  });

  const { data: trend = [], isLoading: trendLoading } = useQuery({
    queryKey: ['progressTrend'],
    queryFn: async () => {
      const res = await progressService.getTrend();
      return res.data;
    }
  });

  const { data: records = [], isLoading: recordsLoading } = useQuery({
    queryKey: ['progressRecords'],
    queryFn: async () => {
      const res = await progressService.getRecords();
      return res.data;
    }
  });

  const stats = [
    { label: "Total Workouts", value: summary?.totalWorkouts || "0", icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/20" },
    { label: "Total Calories", value: summary?.totalCaloriesBurned?.toLocaleString() || "0", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/20" },
    { label: "Longest Streak", value: `${summary?.longestStreak || 0} days`, icon: Award, color: "text-blue-400", bg: "bg-blue-400/20" },
    { label: "Avg Echo Score", value: summary?.avgEchoScore || "0", icon: Target, color: "text-purple-400", bg: "bg-purple-400/20" },
  ];

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 drop-shadow-sm">
            Your Evolution
          </h1>
          <p className="text-muted-foreground mt-1">
            Visualize your journey and celebrate milestones.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                  <Icon className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Echo Score Trend */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {!trendLoading && <ProgressChart data={trend} />}
        </motion.div>

        {/* Personal Records */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Personal Records
          </h2>
          <div className="grid gap-3">
            {!recordsLoading && records.length > 0 ? (
              records.map((record: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 flex items-center justify-center text-yellow-500 font-bold text-sm">
                      #{index + 1}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{record.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(record.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      {record.value} <span className="text-sm text-muted-foreground font-medium">{record.unit}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">No records set yet. Keep pushing!</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Progress;
