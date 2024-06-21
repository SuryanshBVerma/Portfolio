'use client';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, ProjectCard, Wrapper } from '@/components';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';



const Projects = () => {
  const { projects, title } = projectsSection;
  // const [showMore, setShowMore] = useState(false);
  // const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  // const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>
      <div className="">

        <HoverEffect
          {...projects}
          items={projects} />

        <Button
          size="lg"
          className="!mt-20"
          center
        >
          Show More
        </Button>
      </div>

    </Wrapper>
  );
};

export default Projects;
