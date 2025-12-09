
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import { progressService } from "@/services/progressService";
import StatCard from "../components/progress/StatCard";
import ProgressChart from "../components/progress/ProgressChart";
import MiniSparkline from "../components/progress/MiniSparkline";
import RecordsList from "../components/progress/RecordsList";
import RangeFilter from "../components/progress/RangeFilter";
import "../styles/progress.css";
import { Dumbbell, Flame, TrendingUp, Gauge, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for demonstration
const mockSummary = {
  totalWorkouts: 156,
  totalCaloriesBurned: 42500,
  longestStreak: 14,
  avgEchoScore: 78,
};

const mockTrendData = Array.from({ length: 90 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (90 - i));
  return {
    date: date.toISOString().split("T")[0],
    score: Math.floor(Math.random() * 30) + 60, // Score between 60-90
  };
});

const mockSparklineData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  value: Math.floor(Math.random() * 10) + 1,
}));

const mockRecords = [
  { id: "1", name: "Deadlift", date: "2024-01-05", value: 160, unit: "kg" },
  { id: "2", name: "Bench Press", date: "2024-02-10", value: 100, unit: "kg" },
  { id: "3", name: "Squat", date: "2024-03-15", value: 140, unit: "kg" },
];

export default function ProgressV2() {
  const { user, loading: userLoading } = useCurrentUser();
  /*
  const [summary, setSummary] = useState(mockSummary);
  */
  /*
  const [trendData, setTrendData] = useState(mockTrendData);
  const [records, setRecords] = useState(mockRecords);
  */
  // const [loading, setLoading] = useState(true); // Don't rely on local loading state
  const [dateRange, setDateRange] = useState("90");

  const { data: summary = mockSummary, isLoading: isSummaryLoading } = useQuery({
    queryKey: ['progressSummary'],
    queryFn: progressService.getSummary,
  });

  const { data: trendData = [], isLoading: isTrendLoading } = useQuery({
    queryKey: ['progressTrend'],
    queryFn: progressService.getTrend,
  });

  const { data: records = [], isLoading: isRecordsLoading } = useQuery({
    queryKey: ['progressRecords'],
    queryFn: progressService.getRecords,
  });

  const loading = isSummaryLoading || isTrendLoading || isRecordsLoading;

  const handleRangeChange = (range: string) => {
    setDateRange(range);
  };

  const handleEditRecord = (recordId: string) => {
    alert(`Edit record ${recordId} (Not implemented yet - records are auto-generated from workouts)`);
  };

  const handleDeleteRecord = (recordId: string) => {
    // Allow delete maybe? Or just info that it's derived data.
    alert("Records are derived from your workout history. To delete a record, delete the corresponding workout.");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  if (loading) {
    return (
      <div className="p-4 md:p-8 space-y-8">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-foreground">Your Progress</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => <motion.div key={i} variants={itemVariants}><StatCard icon={<Dumbbell />} label="Loading" value="..." /></motion.div>)}
        </div>
        <Skeleton className="h-80 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-40 w-full" />)}
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-4 md:p-8"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Your Progress</h1>
        <RangeFilter onRangeChange={handleRangeChange} initialRange={dateRange} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<Dumbbell className="h-5 w-5 text-primary" />}
            label="Total Workouts"
            value={summary.totalWorkouts}
            delta={{ value: "+12%", isPositive: true }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<Flame className="h-5 w-5 text-orange-400" />}
            label="Total Calories Burned"
            value={summary.totalCaloriesBurned}
            delta={{ value: "+8%", isPositive: true }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<TrendingUp className="h-5 w-5 text-green-400" />}
            label="Longest Streak"
            value={`${summary.longestStreak} days`}
            delta={{ value: "+2 days", isPositive: true }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            icon={<Gauge className="h-5 w-5 text-purple-400" />}
            label="Avg. Echo Score"
            value={summary.avgEchoScore}
            delta={{ value: "-1", isPositive: false }}
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mb-8">
        <ProgressChart
          data={trendData}
          title="Echo Score Trend (Last {dateRange} Days)"
          ariaLabel="Echo Score trend over the last 90 days"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div variants={itemVariants}>
          <MiniSparkline
            data={mockSparklineData}
            title="Workout Frequency"
            value="5 workouts/week"
            color="#00ffd8"
            ariaLabel="Workout frequency trend"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MiniSparkline
            data={mockSparklineData.map(d => ({ ...d, value: d.value * 100 }))}
            title="Calories Trend"
            value="2500 kcal/day"
            color="#7c3aed"
            ariaLabel="Calories trend"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MiniSparkline
            data={mockSparklineData.map(d => ({ ...d, value: d.value * 2 }))}
            title="Streak Timeline"
            value="14 day streak"
            color="#f97316"
            ariaLabel="Streak timeline"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card className="progress-neon">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold">Personal Records</CardTitle>
            <Button variant="ghost" size="icon" aria-label="Add new record">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <RecordsList
              records={records}
              loading={loading}
              onEdit={handleEditRecord}
              onDelete={handleDeleteRecord}
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
