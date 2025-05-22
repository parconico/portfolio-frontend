import { useIcons } from "@/modules/common/hooks/useIcon";
import type { Activity } from "@/types/activity.interface";
import React from "react";

interface Props {
  activity: Activity;
}

export default function Activity({ activity }: Props) {
  const { icons } = useIcons();
  return (
    <div className="flex bg-gradient-to-br gap-2 from-neutral-800 to-[#222222] px-4 py-8 rounded-xl shadow-lg">
      <div className="px-2">{icons.get(activity.icon)}</div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-white text-xl">{activity.name}</h3>
        <p className="text-white text-[14px]">{activity.content}</p>
      </div>
    </div>
  );
}
