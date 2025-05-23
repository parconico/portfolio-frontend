"use client";

import Layout from "@/modules/common/layouts/layout";
import Project from "@/modules/project/components/project";
import ProjectLayout from "@/modules/project/layouts/project-layout";
import { useProjectStore } from "@/stores/project.store";
import React, { useEffect } from "react";

export default function Portfolio() {
  const projects = useProjectStore((state) => state.projects);
  const getProjects = useProjectStore((state) => state.getProjects);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <Layout>
      <ProjectLayout />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {projects.length === 0
          ? null
          : projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
      </section>
    </Layout>
  );
}
