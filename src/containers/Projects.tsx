'use client';
import { Button, Wrapper } from '@/components';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';
import { projectsSection } from '@/lib/content/projects';



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
      <div className="" id="projects">

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
