'use client';

import React from 'react';
import { Project } from '@/lib/constants/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface ProjectListProps {
  projects: Project[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item}>
          <ProjectCard
            id={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
            demo={project.demo}
            type={project.type}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;