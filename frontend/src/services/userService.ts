
import { api } from './api';

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    age: number;
    height_cm: number;
    weight_kg: number;
    goal: string;
    gender: string;
}

export const userService = {
    getProfile: async (): Promise<UserProfile> => {
        const response = await api.get('/users/profile');
        return response; // Backend returns User object directly
    },
    updateProfile: async (user: UserProfile): Promise<UserProfile> => {
        const response = await api.put('/users/profile', user);
        return response;
    }
};
