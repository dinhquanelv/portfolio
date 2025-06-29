import { Element } from 'react-scroll';

import Project from './Project';
import Title from '@/components/Title';
import eBixelThumbnail from '@/assets/projects/E-Bixel.webp';
import axoliteThumbnail from '@/assets/projects/axolite.webp';
import congdanhvlxdThumbnail from '@/assets/projects/congdanhvlxd.webp';
import flashvnThumbnail from '@/assets/projects/flashvn.webp';
import socialNetworkThumbnail from '@/assets/projects/social-network-thumbnail.webp';
import SMGThumbnail from '@/assets/projects/sgm-thumbnail.webp';

const Projects = () => {
  return (
    <Element name="projects">
      <Title id="projects" title="projects" description="SOME PROJECTS I MADE" />
      <div className="flex flex-wrap justify-center gap-6">
        <Project
          title="Coming Soon ..."
          link="https://ebixel.com"
          description="Product Image editing service website"
          thumbnail={eBixelThumbnail}
        />
        <Project
          title="Coming Soon ..."
          link="https://congdanhvlxd.com"
          description="Product gallery website"
          thumbnail={congdanhvlxdThumbnail}
        />
        <Project
          title="Coming Soon ..."
          link="https://axolite.site"
          description="Chat app website"
          thumbnail={axoliteThumbnail}
        />
        <Project
          title="Private Repo!"
          link=""
          description="Building Digital-ready Community"
          thumbnail={flashvnThumbnail}
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
      </div>
    </Element>
  );
};

export default Projects;
