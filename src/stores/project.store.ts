import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";
import type { Project } from "@/types/project.interface";

type Store = {
  projects: Project[];
  getProjects: () => void;
};

export const useProjectStore = create<Store>()((set) => ({
  projects: [],
  getProjects: async () => {
    try {
      const { data } = await axiosClient.get<Project[]>("/project");
      set({ projects: data });
    } catch (error) {
      console.log(error);
    }
  },
}));
