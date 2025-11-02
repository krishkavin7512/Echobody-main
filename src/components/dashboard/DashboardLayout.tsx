import { Activity, BarChart, Dumbbell, Utensils } from 'lucide-react';
import { EchoScoreCard } from './EchoScoreCard';
import { QuickActions } from './QuickActions';
import { StatCard } from './StatCard';

export function DashboardLayout() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <EchoScoreCard />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-fade-slide-up">
        <StatCard
          title="Workouts This Week"
          value="3"
          icon={<Dumbbell className="h-4 w-4 text-gray-400" />}
        />
        <StatCard
          title="Energy Level"
          value="High"
          icon={<Activity className="h-4 w-4 text-gray-400" />}
        />
        <StatCard
          title="Calories Today"
          value="1,800"
          icon={<Utensils className="h-4 w-4 text-gray-400" />}
        />
        <StatCard
          title="Current Streak"
          value="12 days"
          icon={<BarChart className="h-4 w-4 text-gray-400" />}
        />
      </div>

      {/* Insights/Activity Section - Placeholder */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Your Insights</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-gray-800/50 p-4">
            <h3 className="font-semibold">New Peak Performance</h3>
            <p className="text-sm text-gray-400">You hit a new personal best in your last workout!</p>
          </div>
          <div className="rounded-lg bg-gray-800/50 p-4">
            <h3 className="font-semibold">Mindful Moment</h3>
            <p className="text-sm text-gray-400">You've logged a mood entry for 5 days in a row.</p>
          </div>
          <div className="rounded-lg bg-gray-800/50 p-4">
            <h3 className="font-semibold">Nutrition Tip</h3>
            <p className="text-sm text-gray-400">Consider adding more protein to your next meal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
