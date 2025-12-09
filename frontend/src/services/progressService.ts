import { api } from './api';

export interface ProgressSummary {
    totalWorkouts: number;
    totalCaloriesBurned: number;
    longestStreak: number;
    avgEchoScore: number;
}

export interface TrendPoint {
    date: string;
    score: number;
}

export interface PersonalRecord {
    id: string;
    name: string;
    date: string;
    value: number;
    unit: string;
}

export const progressService = {
    getSummary: async (): Promise<ProgressSummary> => {
        return api.get('/progress/summary');
    },
    getTrend: async (): Promise<TrendPoint[]> => {
        return api.get('/progress/trend');
    },
    getRecords: async (): Promise<PersonalRecord[]> => {
        return api.get('/progress/records');
    }
};
