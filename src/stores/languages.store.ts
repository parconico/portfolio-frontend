import { axiosClient } from "@/services/axios.service";
import { LanguageSkill } from "@/types/languages-skills.interface";
import { create } from "zustand";

type Store = {
  languages: LanguageSkill[];
  getLanguages: () => void;
};

export const useLanguageStore = create<Store>()((set) => ({
  languages: [],
  getLanguages: async () => {
    try {
      const { data } = await axiosClient.get<LanguageSkill[]>("/language");
      set({
        languages: data,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));
