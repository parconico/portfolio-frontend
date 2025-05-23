import React from "react";

export default function ProjectLayout() {
  return (
    <nav className="flex gap-5 p-3 max-sm:hidden">
      <button className="text-white p-2 font-semibol hover:text-yellow-200">
        All
      </button>
      <button className="text-white p-2 font-semibol hover:text-yellow-200">
        Applications
      </button>
      <button className="text-white p-2 font-semibol hover:text-yellow-200">
        Web Development
      </button>
      <button className="text-white p-2 font-semibol hover:text-yellow-200">
        Mobile Development
      </button>
      <button className="text-white p-2 font-semibol hover:text-yellow-200">
        Web Design
      </button>
    </nav>
  );
}
