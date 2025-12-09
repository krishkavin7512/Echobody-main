import { api } from './api';

export interface Workout {
    id?: string;
    name: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    weight: number;
    duration?: number;
    caloriesBurned?: number;
    notes?: string;
    date?: string;
}

export const workoutService = {
    getAll: () => api.get('/workouts'),
    create: (workout: Workout) => api.post('/workouts', workout),
    update: (id: string, workout: Workout) => api.put(`/workouts/${id}`, workout),
    delete: (id: string) => api.delete(`/workouts/${id}`),
};
