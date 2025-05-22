import { axiosClient } from "@/services/axios.service";
import { Achievement } from "@/types/achievement.interface";
import { create } from "zustand";

type Store = {
  education: Achievement[];
  getEducationList: () => void;
};

export const useEducationStore = create<Store>()((set) => ({
  education: [],
  getEducationList: async () => {
    try {
      const { data } = await axiosClient.get<Achievement[]>("/education");
      set({
        education: data,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));
