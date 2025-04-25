import { create } from "zustand";

interface Login {
  name: string;
  number: string;
  isLogin: (userName: string, number: string) => void;
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
  courseNumber: number[];
  addCourseNumber: (number: number) => void;
}

export const useStore = create<Store>((set) => ({
  name: "",
  number: "",
  isLogin: (userName: string, number: string) =>
    set({ name: userName, number: number }),

  courses: [],
  addCourse: (course: Course) =>
    set((state) => ({ courses: [...state.courses, course] })),

  courseNumber: [],
  addCourseNumber: (number: number) =>
    set((state) => ({ courseNumber: [...state.courseNumber, number] })),
}));
