import { api } from './api';

export interface Meal {
    id?: string;
    title: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    type: string;
    notes?: string;
    dateTime?: string;
}

export const nutritionService = {
    getAll: () => api.get('/meals'),
    create: (meal: Meal) => api.post('/meals', meal),
    update: (id: string, meal: Meal) => api.put(`/meals/${id}`, meal),
    delete: (id: string) => api.delete(`/meals/${id}`),
};
