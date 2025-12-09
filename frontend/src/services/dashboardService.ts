import { api } from './api';

export interface DashboardSummary {
    workoutsThisWeek: number;
    caloriesToday: number;
    streakDays: number;
    energyLevel: string;
    totalWorkouts: number;
    totalMeals: number;
    totalCaloriesConsumed: number;
    totalCaloriesBurned: number;
}

export const dashboardService = {
    getSummary: () => api.get('/dashboard/summary'),
};
