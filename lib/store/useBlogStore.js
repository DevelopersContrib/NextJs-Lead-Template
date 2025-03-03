import { create } from "zustand";

export const useBlogStore = create((set) => ({
  blog: [],
  blogSlug: [],
  loading: false,
  error: null,
  setBlog: (blog) => set({ blog }),
  setBlogSlug: (blogSlug) => set({ blogSlug }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
