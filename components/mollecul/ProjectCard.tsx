/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Card, CardContent } from "@/components/atom/card";
import Link from "next/link";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  link: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  featured
}) => {
  return (
    // components/mollecul/ProjectCard.tsx
    <Link href={`/project/${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <motion.div
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <Card className="relative h-[400px] bg-gray-100 hover:bg-gray-200 transition-all duration-300">
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Featured
              </span>
            </div>
          )}

          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              
              <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                {description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex gap-2 flex-wrap mb-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 ${tech.color} rounded-full p-1`}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Preview Image */}
            <div className="mt-auto relative flex-grow">
              <img
                src={image}
                alt={`${title} preview`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;