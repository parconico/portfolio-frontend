import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function About({ children }: Props) {
  return (
    <main className="flex flex-col w-3/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg">
      {children}
    </main>
  );
}
