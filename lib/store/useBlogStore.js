import { create } from "zustand";

export const useBlogStore = create((set) => ({
  blog: [],
  loading: false,
  error: null,
  setBlog: (blog) => set({ blog }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
