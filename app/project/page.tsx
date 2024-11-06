'use client';

import Wrapper from "@/components/organ/wrapper";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/atom/tabs";
import ProjectCard from "@/components/mollecul/ProjectCard";

// Data projects
const webProjects = [
    {
      title: "mahati",
      description: "is a mobile application designed to be a reliable companion for individuals dealing with hypertension...",
      image: "/projects/mahati/cover.png",
      technologies: [
        {
          name: "Android",
          icon: "/tech/android.svg",
          color: "bg-green-500/20"
        },
        {
          name: "Flutter",
          icon: "/tech/flutter.svg",
          color: "bg-blue-500/20"
        },
        {
          name: "Firebase",
          icon: "/tech/firebase.svg",
          color: "bg-yellow-500/20"
        }
        // Add more technologies as needed
      ],
      link: "/projects/mahati",
      featured: true
    },
    {
      title: "xdroidOSS",
      description: "An Android OS with Minimal Design Oriented which offers a streamlined and simplistic user interface that...",
      image: "/projects/xdroid/cover.png",
      technologies: [
        {
          name: "Android",
          icon: "/tech/android.svg",
          color: "bg-green-500/20"
        },
        {
          name: "Linux",
          icon: "/tech/linux.svg",
          color: "bg-gray-500/20"
        }
      ],
      link: "/projects/xdroid",
      featured: true
    },
    // Add more projects...
  ];

const mobileProjects = [
    {
        title: "Fastfixx",
        description: "Mobile Application designed to be a reliable companion for individuals dealing with mental health issues. This app provides various features to help users manage their mental well-being.",
        image: "/project/mahati-preview.png",
        logo: "/project/mahati-logo.png",
        technologies: [
          {
            name: "React Native",
            icon: "/tech/react.svg",
            color: "bg-blue-500/20"
          },
          {
            name: "Firebase",
            icon: "/tech/firebase.svg",
            color: "bg-yellow-500/20"
          },
          // Add more technologies as needed
        ],
        link: "/project/mahati",
        featured: true
      },
];

export default function Project() {
  return (
    <Wrapper>
      <div className="md:m-10 md:mt-0 p-5 bg-gray-100 space-y-8">
        <p className="text-2xl font-medium text-gray-700">Project</p>
        <p className="text-md text-gray-600">
          This several project i have work and my work experience
        </p>

        <Tabs defaultValue="web" className="mb-10">
          <TabsList className="bg-gray-200 border border-gray-200 shadow shadow-md">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Wrapper>
  );
}