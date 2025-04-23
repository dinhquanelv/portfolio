import { Element } from 'react-scroll';

import Skill from './Skill';
import Title from '@/components/Title';
import feWhite from '@/assets/frontendWhite.png';
import feBlack from '@/assets/frontendBlack.png';
import beWhite from '@/assets/backendWhite.png';
import beBlack from '@/assets/backendBlack.png';
import toolsWhite from '@/assets/toolsWhite.png';
import toolsBlack from '@/assets/toolsBlack.png';

const Skills = () => {
  const feSkill: string[] = [
    'HTML',
    'CSS (SASS/SCSS)',
    'JavaScript (TypeScript)',
    'ReactJS/Redux',
    'NextJS',
    'Tailwind/Bootstrap',
  ];

  const beSkill: string[] = [
    'NodeJS (ExpressJS/NestJS)',
    'Python (Django/Flask)',
    'JAVA (Spring Boot)',
    'Database (SQL/noSQL)',
    'Authentication & Authorization',
    'WebSocket (Socket.io)',
  ];

  const tools: string[] = ['Git (Github)', 'Docker', 'Figma', 'Draw.io', 'Adobe Photoshop', 'Adobe Premiere'];

  return (
    <Element name="skills">
      <Title title="skills." description="ALL SKILLS I HAVE" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Skill lightIcon={feWhite} darkIcon={feBlack} title="Front-end" skills={feSkill} />
        <Skill lightIcon={beWhite} darkIcon={beBlack} title="Back-end" skills={beSkill} />
        <Skill lightIcon={toolsWhite} darkIcon={toolsBlack} title="Tools" skills={tools} />
      </div>
    </Element>
  );
};

export default Skills;
