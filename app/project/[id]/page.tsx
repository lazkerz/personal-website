/* eslint-disable @next/next/no-img-element */
// app/project/[id]/page.tsx
'use client';

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/atom/button";

// Data projects (bisa dipindah ke file terpisah)
const projectsData = {
  mahati: {
    title: "mahati",
    description: "is a mobile application designed to be a reliable companion for individuals dealing with hypertension...",
    fullDescription: "Mobile aplikasi untuk mengelola tekanan darah pengguna, memberikan informasi dan pemantauan terkait hipertensi.",
    images: [
      "/projects/mahati/preview1.png",
      "/projects/mahati/preview2.png",
      "/projects/mahati/preview3.png"
    ],
    technologies: [
      {
        name: "Android",
        icon: "/icons/android.svg",
        color: "bg-[#3DDC84]/20"
      },
      {
        name: "Flutter",
        icon: "/icons/flutter.svg",
        color: "bg-[#02569B]/20"
      },
      {
        name: "Firebase",
        icon: "/icons/firebase.svg",
        color: "bg-[#FFCA28]/20"
      }
    ],
    demoUrl: "https://example.com/mahati-demo"
  },
  xdroidoss: {
    title: "xdroidOSS",
    description: "An Android OS with Minimal Design...",
    fullDescription: "Custom Android OS yang fokus pada UI/UX minimalis...",
    images: [
      "/projects/xdroid/preview1.png",
      "/projects/xdroid/preview2.png"
    ],
    technologies: [
      {
        name: "Android",
        icon: "/icons/android.svg",
        color: "bg-[#3DDC84]/20"
      }
    ],
    demoUrl: "https://example.com/xdroid-demo"
  }
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <Link href="/project">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
            <p className="mt-4 text-gray-600">{project.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack :</h2>
            <div className="flex gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${tech.color}`}
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Images */}
          <div className="grid gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Demo Button */}
          {project.demoUrl && (
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              >
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}