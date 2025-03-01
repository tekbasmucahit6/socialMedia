import { create } from "zustand";

interface user {
    user: any;
    setUser: (user: any) => void;
}

export const useAuthStore = create<user>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));