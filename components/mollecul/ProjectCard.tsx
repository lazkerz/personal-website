/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Card, CardContent } from "@/components/atom/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from 'react-icons';

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  images: {
    url: string;
    alt: string;
  }[];
  technologies: Technology[];
  demo: string;
  type: 'Web' | 'Mobile';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  images,
  technologies,
  type
}) => {
  // Mengambil gambar pertama saja untuk thumbnail
  const thumbnailImage = images[0];

  return (
    <Link href={`/project/${id}`}>
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
        <Card className="relative h-[400px] bg-gray-white hover:bg-gray-200 shadow shadow-lg border border-gray-800 transition-all duration-300">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-4">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex gap-2 flex-wrap mb-4">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className={`w-8 h-8 ${tech.color} rounded-lg p-1.5 flex items-center justify-center`}
                    title={tech.name}
                  >
                    <Icon className="w-full h-full text-gray-800" />
                  </div>
                );
              })}
            </div>

            {/* Preview Image */}
            <div className="mt-auto relative flex-grow">
              <img
                src={thumbnailImage.url}
                alt={thumbnailImage.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Type Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {type}
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;