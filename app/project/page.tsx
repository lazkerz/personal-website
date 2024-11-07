'use client';

import Wrapper from "@/components/organ/wrapper";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/atom/tabs";
import ProjectList from "@/components/mollecul/ProjectList";
import { projects } from "@/lib/constants/projects";

export default function Project() {
  const webProjects = projects.filter(project => project.type === 'Web');
  const mobileProjects = projects.filter(project => project.type === 'Mobile');

  return (
    <Wrapper>
      <div className="md:m-10 md:mt-0 p-5 bg-gray-100 space-y-8">
        <p className="text-2xl font-medium text-gray-700">Project</p>
        <p className="text-md text-gray-600">
          This several project i have work and my work experience
        </p>

        <Tabs defaultValue="web" className="mb-10">
          <TabsList className="bg-gray-200 border border-gray-200 shadow shadow-md mb-5">
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-white"
            >
              Web
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-white"
            >
              Mobile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="web">
            <ProjectList projects={webProjects} />
          </TabsContent>

          <TabsContent value="mobile">
            <ProjectList projects={mobileProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </Wrapper>
  );
}