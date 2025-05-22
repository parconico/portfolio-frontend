import { useIcons } from "@/modules/common/hooks/useIcon";
import type { SoftSkill } from "@/types/soft-skill.interface";
import React from "react";

interface Props {
  skill: SoftSkill;
}

export default function SoftSkill({ skill }: Props) {
  const { icons } = useIcons();
  return (
    <div className="py-5 px-8 rounded-lg bg-neutral-800 flex justify-between">
      <div className="flex flex-col shadow-lg">
        <div className="flex gap-5">
          <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 p-5 rounded-xl flex -mt-10">
            {icons.get(skill.icon)}
          </div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </div>

        <p className="text-neutral-300 mt-2">{skill.content}</p>
      </div>
    </div>
  );
}
