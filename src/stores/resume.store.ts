import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";
import { Resume } from "@/types/resume.interface";

type Store = {
  resume: null | Resume;
  getResume: () => void;
};

export const useResumeStore = create<Store>()((set) => ({
  resume: null,
  getResume: async () => {
    try {
      const { data } = await axiosClient.get<Resume>("/resume");
      set({
        resume: data,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));
