import { create } from "zustand";

interface Login {
  name: string;
  isLogin: (userName: string) => void;
}

interface Course {
  id: number;
  course: string;
  isOnline: string;
  isMajor: string;
  professor: string;
  date: string;
  time: string;
}

interface Store extends Login {
  courses: Course[];
  addCourse: (course: Course) => void;
}

export const useStore = create<Store>((set) => ({
  name: "",
  isLogin: (userName: string) => set({ name: userName }),

  courses: [],
  addCourse: (course: Course) =>
    set((state) => ({ courses: [...state.courses, course] })),
}));
