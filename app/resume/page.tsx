/* eslint-disable @next/next/no-img-element */
'use client'
import Wrapper from "@/components/organ/wrapper";
import {Card, CardContent} from "@/components/atom/card"
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/atom/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WeeklyStatistic from "@/components/mollecul/WeeklyStatistic";
import GitHubContributions from "@/components/mollecul/GithubContributions";


interface ExperienceProps {
  id: number
  title: string
  logo: string
  company: string
  location: string
  period: string
  description: string[]
}


const experiences: ExperienceProps[] = [
  {
    "id": 1,
    "logo": "https://seeklogo.com/images/T/telkomsel-logo-4EC1FC20C9-seeklogo.com.png",
    "title": "Fullstack Web Developer",
    "company": "PT Telkomsel",
    "location": "Medan, Indonesia",
    "period": "June 2024 - Present",
    "description": [
      "Successfully improved application performance by streamlining and optimizing existing features, providing a faster and more responsive user experience.",
      "Led the transition to a new, more modern framework and work tools, enhancing code resilience and simplifying maintenance, making it significantly more efficient than before.",
      "Simplified and streamlined code complexity, allowing for more efficient maintenance and smoother team collaboration, reducing debugging time by up to 25%.",
      "Developed a new, more user-friendly and responsive mobile interface, creating a more intuitive and engaging user experience.",
      "Optimized the management of thousands of sales transactions, increasing data processing speed by up to 40% and reducing data loading time to under 2 seconds for datasets containing over 10,000 records."
    ]
  },  
  {
    id: 2,
    logo: "https://media.licdn.com/dms/image/C4E0BAQHT9b3SD2EDGA/company-logo_200_200/0/1630620526294?e=2147483647&v=beta&t=8dwXjq1IV-E0bkP_RJ8izigoIuKadPKKd0mGYOJ6bTQ",
    title: "Android Developer",
    company: "PT Xtend Integrasi Indonesia",
    location: "Medan, Indonesia",
    period: "Jan 2024 - Maret 2024",
    description: [
      "Developed an Android application to address specific client issues, utilizing OAuth and Realm databases to ensure security and efficiency.",
      "Created an Android application as a solution for client needs, leveraging OAuth, Realm Database, and collaborating via GitHub and Postman.",
      "Wrote efficient code using the MVP architecture, employing Retrofit to access data from APIs, handle background processes, and integrate it into the developed application"
    ]
  },
  {
    id: 3,
    logo: "forum-gamers.jpg",
    title: "FrontEnd Developer",
    company: "Forum Gamers",
    location: "WFH",
    period: "Aug 2023 - Desc 2023",
    description: [
      "Leading the development of information systems for the organization",
      "Managing team of developers and coordinating project timelines",
      "Implementing best practices for system architecture and security",
      "Ensuring quality and timely delivery of projects"
    ]
  },

  {
    id: 4,
    logo: "",
    title: "Freelance",
    company: "",
    location: "WFH",
    period: "Jan 2024 - Present",
    description: [
      "Medan State Polytechnic Outstanding Student Dashboard: Managing the latest data on student achievements, organizing and visualize data to track performance metrics and perform analytics to provide insights",
      "Senate Honor Report System: Organized meeting results and attendance records to ensure accurate and timely honor disbursements. Analyzed attendance data and calculated honorarium for university senate members based on meeting participation. Developed an efficient process for data collection and representation.",
      "Additionally, I have worked on other projects tailored specifically to meet client needs, ensuring personalized and impactful results.",
    ]
  }

]

export default function Resume() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(current => {
      if (current.includes(id)) {
        return current.filter(item => item !== id)
      } else {
        return [...current, id]
      }
    })
  }
  return (
    <Wrapper>
      <div className="md:m-10 md:mt-0 p-5 bg-gray-100 space-y-8">
        <p className="text-2xl font-medium text-gray-700">Resume</p>
        <p className="text-md text-gray-600">
          This several project i have work and my work experience
        </p>

        <Tabs defaultValue="career" className="mb-10">
          <TabsList className="bg-gray-200 border border-gray-200 shadow shadow-md">
            <TabsTrigger 
              value="career"
              className="data-[state=active]:bg-white"
            >
              Career & Education
            </TabsTrigger>
            <TabsTrigger 
              value="activity"
              className="data-[state=active]:bg-white"
            >
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="career">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Experience Column */}
              <div>
                <h2 className="text-lg text-gray-900 font-bold mb-3">Work & Experience</h2>
                <div className="space-y-4">
                  {experiences.map((experience) => (
                    <Collapsible
                      key={experience.id}
                      open={openItems.includes(experience.id)}
                      onOpenChange={() => toggleItem(experience.id)}
                    >
                      <Card className="bg-gray-50 border-gray-800 shadow shadow-md">
                        <CollapsibleTrigger className="w-full">
                          <CardContent className="p-6">
                            <div className="flex gap-4">
                              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                                {experience.logo === "" ? (
                                  <div className="w-full h-full bg-rose-300 rounded-lg flex items-center justify-center text-white font-bold">
                                    F
                                  </div>
                                ) : experience.logo.startsWith('https://') ? (
                                  <img
                                    src={experience.logo}
                                    alt={experience.company}
                                    className="w-12 h-12 object-contain"
                                  />
                                ) : (
                                  <img
                                    src={`/${experience.logo}`}
                                    alt={experience.company}
                                    className="w-12 h-12 object-contain"
                                  />
                                )}
                              </div>
                              <div className="flex-1 text-left">
                                <h3 className="text-lg font-semibold">{experience.title}</h3>
                                <p className="text-gray-600">{experience.company} • {experience.location}</p>
                                <p className="text-gray-700 text-sm mt-2">{experience.period}</p>
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
                              <ul className="list-disc space-y-2 text-gray-600">
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
                <h2 className="text-lg text-gray-900 font-bold mb-3">Education</h2>
                <Card className="bg-gray-50 border-gray-800 shadow shadow-md">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <img src="https://th.bing.com/th/id/OIP.isCBhVG2czb_DIyEgxZD3wHaG_?w=180&h=180&c=7&r=0&o=5&pid=1.7" alt="Politeknik Negeri Medna" className="w-12 h-12 object-contain"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Politeknik Negeri Medan</h3>
                      <p className="text-gray-500">Diploma • Informatics Management, Amd.Kom</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="flex flex-col gap-5">
              <WeeklyStatistic/>
              <GitHubContributions/>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Wrapper>
  );
}
