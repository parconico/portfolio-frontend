"use client";

import { LanguageSkill } from "@/types/languages-skills.interface";
import React, { useRef } from "react";

interface Props {
  property: LanguageSkill;
}

export default function Percentages({ property }: Props) {
  const barContainer = useRef<HTMLDivElement | null>(null);
  const bar = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col">
      <p className="text-white font-semibold">
        {property.name}
        <span className="text-neutral-300 font-normal ml-1">
          {property.level}
        </span>
      </p>
      <div
        ref={barContainer}
        className="w-full rounded-full bg-neutral-600 mt-2"
      >
        <div
          ref={bar}
          style={{
            width: barContainer.current
              ? (barContainer.current?.clientWidth * property.level) / 100
              : 0,
          }}
          className="p-[5px] rounded-full w-1/2 h-full bg-gradient-to-br from-yellow-200 to-amber-400"
        ></div>
      </div>
    </div>
  );
}
