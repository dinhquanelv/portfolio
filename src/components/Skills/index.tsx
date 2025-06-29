import { Element } from 'react-scroll';

import Skill from './Skill';
import Title from '@/components/Title';
import feWhite from '@/assets/icons/frontendWhite.png';
import feBlack from '@/assets/icons/frontendBlack.png';
import beWhite from '@/assets/icons/backendWhite.png';
import beBlack from '@/assets/icons/backendBlack.png';
import toolsWhite from '@/assets/icons/toolsWhite.png';
import toolsBlack from '@/assets/icons/toolsBlack.png';

const Skills = () => {
  const feSkill: string[] = [
    'HTML / CSS',
    'JavaScript (TypeScript)',
    'ReactJS/Redux',
    'NextJS',
    'Tailwind/Bootstrap',
    'Figma',
  ];

  const beSkill: string[] = [
    'NodeJS (ExpressJS/NestJS)',
    'Python (FastAPI)',
    'JAVA (Spring Boot)',
    'C# (DotNET)',
    'Database (SQL/noSQL)',
    'WebSocket (Socket.io)',
  ];

  const tools: string[] = ['Git (Github)', 'Docker', 'Cloud (AWS, Azure)', 'Agile Scrum,', 'Jira', 'Trello'];

  return (
    <Element name="skills">
      <Title id="skills" title="skills" description="ALL TECHNOLOGIES I USE" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Skill lightIcon={feWhite} darkIcon={feBlack} title="Front-end" skills={feSkill} />
        <Skill lightIcon={beWhite} darkIcon={beBlack} title="Back-end" skills={beSkill} />
        <Skill lightIcon={toolsWhite} darkIcon={toolsBlack} title="Tools" skills={tools} />
      </div>
    </Element>
  );
};

export default Skills;
