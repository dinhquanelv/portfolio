import { Element } from 'react-scroll';

import Project from './Project';
import Title from '@/components/Title';
import socialNetworkThumbnail from '@/assets/social-network-thumbnail.webp';
import eCommerceThumbnail from '@/assets/e-commerce-thumbnail.webp';
import SMGThumbnail from '@/assets/sgm-thumbnail.webp';
import flappyPigThumbnail from '@/assets/flappy-pig-thumbnail.webp';
import employeeManagerThumbnail from '@/assets/employee-manager-thumbnail.webp';
import IEEE754Thumbnail from '@/assets/IEEE754-thumbnail.webp';

const Projects = () => {
  return (
    <Element name="projects">
      <Title title="projects" description="SOME PROJECTS I MADE" />
      <div className="flex flex-wrap justify-center gap-6">
        <Project
          title="Coming Soon ..."
          link=""
          description="E-Commerce platform built with NextJS, NestJS, MySQL and Recommendation Systems"
          thumbnail={eCommerceThumbnail}
        />
        <Project
          title="View Code >"
          link="https://github.com/DinhQuanELV/SocialNetwork"
          description="Social Media platform built with ReactJS, ExpressJS, MongoDB and Web Socket"
          thumbnail={socialNetworkThumbnail}
        />
        <Project
          title="View Code >"
          link="https://github.com/DinhQuanELV/StudentGradeManagement"
          description="Student Grade Management platform built with HTML, CSS, PHP, MySQL"
          thumbnail={SMGThumbnail}
        />
        <Project
          title="Play Game >"
          link="https://dinhquanelv.github.io/FlappyPigMobile/"
          description="Flappy Pig game on Mobile web built with HTML, CSS, JavaScript"
          thumbnail={flappyPigThumbnail}
        />
        <Project
          title="View Code >"
          link="https://github.com/DinhQuanELV/EmployeeManage"
          description="Employee manage console application build with C++"
          thumbnail={employeeManagerThumbnail}
        />
        <Project
          title="View Code >"
          link="https://github.com/DinhQuanELV/IEEE754"
          description="IEEE 754 Floating Point Converter built with C++"
          thumbnail={IEEE754Thumbnail}
        />
      </div>
    </Element>
  );
};

export default Projects;
