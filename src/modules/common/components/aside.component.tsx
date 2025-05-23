import Info from "@/modules/profile/components/info.component";
import Image from "next/image";
import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useProfileStore } from "@/stores/profile.store";

export default function Aside() {
  const getProfile = useProfileStore((state) => state.getProfile);
  const profile = useProfileStore((state) => state.profile);
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  return (
    <aside className="flex flex-col w-full lg:w-1/4 px-8 sm:px-10 py-10 bg-neutral-900 my-6 lg:my-14 rounded-2xl border border-neutral-700 justify-between gap-4">
      <div className="flex flex-col gap-5 items-center">
        <div
          className="bg-gradient-to-br from-neutral-800
         to-[#212121] p-5 rounded-[30px]"
        >
          <Image
            src="/fotoport.png"
            alt="Logo"
            width={500}
            height={500}
            className="rounded-full w-full max-h-[250px]"
          />
        </div>
        <h1 className="text-white font-bold text-2xl text-center">
          {profile?.name}
        </h1>
        <span className="bg-neutral-800 px-4 py-2 rounded-lg">
          <h2 className="text-white text-xs">{profile?.specialty}</h2>
        </span>
      </div>
      <div className="w-full border-t border-neutral-600"></div>
      <div className="flex flex-col items-center gap-5 ">
        <Info type="email" content={profile?.email || ""} />
        <Info type="phone" content={profile?.phone || ""} />
        <Info type="calendar" content={profile?.birthDay || ""} />
        <Info type="location" content={profile?.location || ""} />
      </div>
      <div className="flex justify-center gap-5 mt-4">
        <GitHubIcon sx={{ color: "white" }} />
        <LinkedInIcon sx={{ color: "white" }} />
        <InstagramIcon sx={{ color: "white" }} />
      </div>
    </aside>
  );
}
