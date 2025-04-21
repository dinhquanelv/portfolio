import Title from '@/components/Title';
import Project from './Project';

import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element name="projects">
      <Title title="projects." description="PROJECTS THAT I MADE" />
      <div className="flex flex-wrap justify-center gap-8">
        <Project
          title="Visit website"
          description="lores lores lores lores lores lores lores lores lores lores lores lores lores"
          thumbnail=""
        />
        <Project
          title="Visit website"
          description="lores lores lores lores lores lores lores lores lores lores lores lores lores"
          thumbnail=""
        />
        <Project
          title="Visit website"
          description="lores lores lores lores lores lores lores lores lores lores lores lores lores"
          thumbnail=""
        />
        <Project
          title="Visit website"
          description="lores lores lores lores lores lores lores lores lores lores lores lores lores"
          thumbnail=""
        />
        <Project
          title="Visit website"
          description="lores lores lores lores lores lores lores lores lores lores lores lores lores"
          thumbnail=""
        />
        <Project
          title="Visit website"
          description="lores lores lores lores lores lores lores lores lores lores lores lores lores"
          thumbnail=""
        />
      </div>
    </Element>
  );
};

export default Projects;
