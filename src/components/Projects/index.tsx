import { Element } from 'react-scroll';

import Project from './Project';
import Title from '@/components/Title';
import test from '@/assets/test.png';

const Projects = () => {
  return (
    <Element name="projects">
      <Title title="projects." description="PROJECTS THAT I MADE" />
      <div className="flex flex-wrap justify-center gap-6">
        <Project
          title="Coming Soon ..."
          link=""
          description="E-Commerce platform built with NextJS, NestJS, MySQL and Recommendation Systems"
          thumbnail={test}
        />
        <Project
          title="Visit Website >"
          link="https://github.com/DinhQuanELV/SocialNetwork"
          description="Social Media platform built with ReactJS, ExpressJS, MongoDB and Web Socket"
          thumbnail={test}
        />
        <Project
          title="Visit Website >"
          link="https://github.com/DinhQuanELV/StudentGradeManagement"
          description="Student Grade Management platform built with HTML, CSS, PHP, MySQL"
          thumbnail={test}
        />
        <Project
          title="Play game >"
          link="https://dinhquanelv.github.io/FlappyPigMobile/"
          description="Flappy Pig game on Mobile web built with HTML, CSS, JavaScript"
          thumbnail={test}
        />
        <Project
          title="View Code >"
          link="https://github.com/DinhQuanELV/IEEE754"
          description="IEEE 754 Floating Point Converter built with C++"
          thumbnail={test}
        />
        <Project
          title="View Code >"
          link="https://github.com/DinhQuanELV/EmployeeManage"
          description="Employee manage console application build with C++"
          thumbnail={test}
        />
      </div>
    </Element>
  );
};

export default Projects;
