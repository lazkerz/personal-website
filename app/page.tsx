'use client'
import { useState, useEffect } from 'react'
import Wrapper from "@/components/organ/wrapper";
import TechStack from '@/components/mollecul/Techstack';
import Recommendation from '@/components/mollecul/Recomendation';
import {Avatar, AvatarImage, AvatarFallback } from "@/components/atom/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atom/card"
import { Skeleton } from "@/components/atom/skeleton"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Wrapper>
      <div className="md:m-10 md:mt-0 p-5 bg-gray-100 space-y-8">
        <div className="md:hidden flex flex-row items-center justify-between gap-3">
            <div className="flex flex-col verflow-hidden duration-300 group-data-[collapsible=icon]:opacity-0">
                <p className="text-sm font-semibold truncate">
                  Nurul Fatma Putri Lazira
                </p>
                <p className="text-xs font-medium text-muted-foreground truncate">
                  Software Developer
                </p>
            </div>
            <Avatar className="h-10 w-10">
                <AvatarImage src="/Nurul.jpg" alt="Nurul Fatma" />
                <AvatarFallback>N</AvatarFallback>
            </Avatar>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-gray-700">
              {isLoading ? <Skeleton className="h-8 w-32" /> : "About"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ) : (
              <p className="text-md text-gray-600 text-justify">
                As a Fullstack Web Developer, I have a passion for Front-End and Android Development. I have created intuitive and engaging user 
                experiences, achieving Top 5 in best product collaboration in the Kampus Merdeka program. My strengths are collaboration, adaptability, 
                and a commitment to continuous learning. With this enthusiasm, I am seeking opportunities to contribute to innovative projects and look 
                forward to connecting with like-minded professionals to explore greater collaboration potential.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-gray-700">
              {isLoading ? <Skeleton className="h-8 w-40" /> : "Tech Stacks"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                ))}
              </div>
            ) : (
              <TechStack />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-gray-700">
              {isLoading ? <Skeleton className="h-8 w-48" /> : "Recommendations"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="bg-gray-200 border-none">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-40" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[90%]" />
                      <Skeleton className="h-4 w-[80%]" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Recommendation />
            )}
          </CardContent>
        </Card>
      </div>
    </Wrapper>
  );
}