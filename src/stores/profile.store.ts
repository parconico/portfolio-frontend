import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";
import { Profile } from "@/types/profile.interface";

type Store = {
  profile: Profile | null;
  getProfile(): void;
};

export const useProfileStore = create<Store>()((set) => ({
  profile: null,
  getProfile: async () => {
    try {
      const { data } = await axiosClient.get<Profile>("/profile");
      set({
        profile: data,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));
