"use client"

import { Card, CardContent } from "@/components/atom/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/atom/tabs"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/atom/collapsible"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Experience {
  id: number
  logo: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    logo: "xd",
    title: "Android Developer",
    company: "xdroidOSS",
    location: "Tulungagung, East Java, Indonesia",
    period: "Jan 2021 - Present",
    description: [
      "Developed custom ROM based on Android Open Source Project (AOSP)",
      "Implemented new features and optimizations for better user experience",
      "Maintained device trees and kernels for supported devices",
      "Collaborated with team members for testing and bug fixes"
    ]
  },
  {
    id: 2,
    logo: "ltt",
    title: "Android Developer",
    company: "PT Lingkup Total Technology",
    location: "Surabaya, East Java, Indonesia",
    period: "Feb 2022 - Dec 2022",
    description: [
      "Developed a mobile operating system called iMOS based on the Android Open Source Project (AOSP) for PT PAL Indonesia.",
      "Created and customized iMOS to meet the specific requirements and functionalities desired by PT PAL Indonesia.",
      "Implemented and tested new features, enhancements, and optimizations for iMOS to improve performance and user experience.",
      "Ensured the security and stability of iMOS by inlining the source with the latest AOSP security patches.",
      "Built iMOS as a Generic System Image (GSI) to ensure compatibility across a wide range of Android devices, providing flexibility and accessibility for end-users."
    ]
  },
  {
    id: 3,
    logo: "infotech",
    title: "Lead of Information System",
    company: "Infotech UMM",
    location: "Malang, East Java, Indonesia",
    period: "Jan 2024 - Present",
    description: [
      "Leading the development of information systems for the organization",
      "Managing team of developers and coordinating project timelines",
      "Implementing best practices for system architecture and security",
      "Ensuring quality and timely delivery of projects"
    ]
  }
]

export default function Experience() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-xl text-gray-400 mb-8">
          Several projects that I have worked on, both private and open source.
        </p>

        <Tabs defaultValue="career" className="mb-8">
          <TabsList className="bg-gray-900">
            <TabsTrigger 
              value="career"
              className="data-[state=active]:bg-gray-800"
            >
              Career & Education
            </TabsTrigger>
            <TabsTrigger 
              value="activity"
              className="data-[state=active]:bg-gray-800"
            >
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="career">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Experience Column */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Work & Experience</h2>
                <div className="space-y-4">
                  {experiences.map((experience) => (
                    <Collapsible
                      key={experience.id}
                      open={openItems.includes(experience.id)}
                      onOpenChange={() => toggleItem(experience.id)}
                    >
                      <Card className="bg-gray-900 border-gray-800">
                        <CollapsibleTrigger className="w-full">
                          <CardContent className="p-6">
                            <div className="flex gap-4">
                              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                                {experience.logo === "xd" ? (
                                  <div className="w-full h-full bg-rose-300 rounded-lg flex items-center justify-center text-white font-bold">
                                    xd
                                  </div>
                                ) : (
                                  <img
                                    src="/placeholder.svg?height=64&width=64"
                                    alt={experience.company}
                                    className="w-12 h-12 object-contain"
                                  />
                                )}
                              </div>
                              <div className="flex-1 text-left">
                                <h3 className="text-xl font-bold">{experience.title}</h3>
                                <p className="text-gray-400">{experience.company} • {experience.location}</p>
                                <p className="text-gray-500 text-sm mt-2">{experience.period}</p>
                              </div>
                              <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${
                                openItems.includes(experience.id) ? 'transform rotate-180' : ''
                              }`} />
                            </div>
                          </CardContent>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="ml-20">
                              <ul className="list-disc space-y-2 text-gray-400">
                                {experience.description.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Education</h2>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="University of Muhammadiyah Malang"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">University of Muhammadiyah Malang</h3>
                      <p className="text-gray-400">Bachelor's degree • Informatics Engineering, S.Kom</p>
                      <p className="text-gray-500 text-sm mt-2">2021 - Current • Malang, East Java, Indonesia</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="text-center text-gray-400 py-8">
              Activity content will be displayed here
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}