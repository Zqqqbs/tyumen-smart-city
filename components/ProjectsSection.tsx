import React, { useMemo } from 'react';
import { PROJECTS, PROJECT_IMAGES, PROJECT_CATEGORIES } from '../constants';
import { Project } from '../types';
import { FilterSidebar } from './FilterSidebar';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imageUrl = useMemo(() => {
    if (project.category && PROJECT_IMAGES[project.category] && PROJECT_IMAGES[project.category].length > 0) {
      const images = PROJECT_IMAGES[project.category];
      return images[Math.floor(Math.random() * images.length)];
    }
    return null;
  }, [project.category]);

  if (imageUrl) {
    return (
      <div className="relative rounded-lg p-6 min-h-[200px] flex flex-col justify-end text-white overflow-hidden">
        <img src={imageUrl} alt={project.description} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <p>{project.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${project.bgColor} ${project.textColor || 'text-white'} rounded-lg p-6 min-h-[200px] flex flex-col justify-end`}>
      {project.title && <h3 className="text-3xl font-bold mb-4">{project.title}</h3>}
      <p>{project.description}</p>
    </div>
  );
};


export const ProjectsSection: React.FC = () => {
  const [firstProject, ...otherProjects] = PROJECTS;
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-1">
                <ProjectCard project={firstProject} />
             </div>
             {otherProjects.slice(0, 2).map((project) => (
                <div key={project.id} className="lg:col-span-1">
                    <ProjectCard project={project} />
                </div>
            ))}
            {otherProjects.slice(2).map((project) => (
                <div key={project.id} className="sm:col-span-1 lg:col-span-1">
                    <ProjectCard project={project} />
                </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <FilterSidebar categories={PROJECT_CATEGORIES} activeCategory="Управление городом" />
        </div>
      </div>
    </section>
  );
};