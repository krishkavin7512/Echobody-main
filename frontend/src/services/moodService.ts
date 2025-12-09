
import { api } from './api';

export interface MoodEntry {
    id?: string;
    userId?: string;
    mood: string; // Great, Good, Okay, Low, Bad
    energy: number; // 1-10
    notes?: string;
    date?: string;
}

export const moodService = {
    getAll: async (): Promise<MoodEntry[]> => {
        return api.get('/mood');
    },

    create: async (entry: MoodEntry): Promise<MoodEntry> => {
        return api.post('/mood', entry);
    },

    delete: async (id: string): Promise<void> => {
        await api.delete(`/mood/${id}`);
    }
};
