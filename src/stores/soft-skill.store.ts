import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";
import type { SoftSkill } from "@/types/soft-skill.interface";

type Store = {
  softSkills: SoftSkill[];
  getSoftSkills(): void;
};

export const useSoftSkillStore = create<Store>()((set) => ({
  softSkills: [],
  getSoftSkills: async () => {
    try {
      const { data } = await axiosClient.get<SoftSkill[]>("/soft-skill");
      console.log(data);
      set({ softSkills: data });
    } catch (error) {
      console.log(error);
    }
  },
}));
