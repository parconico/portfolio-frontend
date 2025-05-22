import { axiosClient } from "@/services/axios.service";
import { LanguageSkill } from "@/types/languages-skills.interface";
import { create } from "zustand";

type Store = {
  skills: LanguageSkill[];
  getSkills: () => void;
};

export const useSkillStore = create<Store>()((set) => ({
  skills: [],
  getSkills: async () => {
    try {
      const { data } = await axiosClient.get<LanguageSkill[]>("/skill");
      set({
        skills: data,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));
