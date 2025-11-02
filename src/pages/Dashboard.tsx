import { motion } from 'framer-motion';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Skeleton } from '@/components/ui/skeleton';
import { EchoScoreCard } from '@/components/dashboard/EchoScoreCard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { StatCard } from '@/components/dashboard/StatCard';
import { Dumbbell, Activity, Utensils, BarChart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Dashboard() {
  const { user, loading, error } = useCurrentUser();

  if (loading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-12 w-1/2" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Skeleton className="h-96 md:col-span-2" />
          <Skeleton className="h-64" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight">
        Welcome back, {user?.name}!
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <EchoScoreCard />
        </motion.div>
        <motion.div variants={itemVariants}>
          <QuickActions />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"
      >
        <motion.div variants={itemVariants}>
          <StatCard
            title="Workouts This Week"
            value="3"
            icon={<Dumbbell className="h-6 w-6 text-primary" />}
            color="#3b82f6"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Energy Level"
            value="High"
            icon={<Activity className="h-6 w-6 text-primary" />}
            color="#10b981"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Calories Today"
            value="1,800"
            icon={<Utensils className="h-6 w-6 text-primary" />}
            color="#f97316"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Current Streak"
            value="12 days"
            icon={<BarChart className="h-6 w-6 text-primary" />}
            color="#8b5cf6"
          />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-2xl font-bold">Your Insights</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-card p-4 shadow-sm">
            <h3 className="font-semibold">New Peak Performance</h3>
            <p className="text-sm text-muted-foreground">You hit a new personal best in your last workout!</p>
          </div>
          <div className="rounded-lg bg-card p-4 shadow-sm">
            <h3 className="font-semibold">Mindful Moment</h3>
            <p className="text-sm text-muted-foreground">You've logged a mood entry for 5 days in a row.</p>
          </div>
          <div className="rounded-lg bg-card p-4 shadow-sm">
            <h3 className="font-semibold">Nutrition Tip</h3>
            <p className="text-sm text-muted-foreground">Consider adding more protein to your next meal.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
