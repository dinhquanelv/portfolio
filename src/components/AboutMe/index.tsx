import { Element } from 'react-scroll';

import About from './About';
import ThemeIcon from './ThemeIcon';
import avatar from '@/assets/avatar.webp';
import phoneLM from '@/assets/phoneLM.png';
import phoneDM from '@/assets/phoneDM.png';
import emailLM from '@/assets/emailLM.png';
import emailDM from '@/assets/emailDM.png';
import linkedinLM from '@/assets/linkedinLM.png';
import linkedinDM from '@/assets/linkedinDM.png';

const AboutMe = () => {
  return (
    <Element name="about-me">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 w-full">
        <div className="flex justify-center lg:justify-normal row-span-1 lg:row-span-2 p-4 lg:p-8">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-3xl w-[252px] h-[378px] lg:w-[336px] lg:h-[448px] xl:w-[420px] xl:h-[560px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="col-span-1 row-span-1 lg:col-span-2 lg:row-span-2 p-4 lg:p-8">
          <About />
        </div>
        <div className="p-4 lg:p-8">
          <h4 className="text-3xl md:text-4xl font-semibold mb-4 lg:mb-8">education.</h4>
          <p className="mb-2">2021 - 2025</p>
          <p className="mb-2 font-bold">Ho Chi Minh City University of Education</p>
          <p className="mb-2">Software Engineering - Information Technology</p>
        </div>
        <div className="p-4 lg:p-8">
          <h4 className="text-3xl md:text-4xl font-semibold mb-4 lg:mb-8">experience.</h4>
          <p className="mb-2">Mar 2025 - Present</p>
          <p className="mb-2 font-bold">FLASH VN - Building Digital-ready Community</p>
          <p className="mb-2">Fullstack Developer - NextJS - NodeJS</p>
        </div>
        <div className="p-4 lg:p-8">
          <h4 className="text-3xl md:text-4xl font-semibold mb-4 lg:mb-8">contact.</h4>
          <div className="flex flex-row items-center mb-2">
            <ThemeIcon light={phoneLM} dark={phoneDM} alt="phone" />
            <a href="tel:+840388837803" className="ml-2 hover:underline">
              +84 38 883 7803
            </a>
          </div>
          <div className="flex flex-row items-center mb-2">
            <ThemeIcon light={emailLM} dark={emailDM} alt="email" />
            <a href="mailto:quanvonguyendinh@gmail.com" className="ml-2 hover:underline">
              quanvonguyendinh@gmail.com
            </a>
          </div>
          <div className="flex flex-row items-center mb-2">
            <ThemeIcon light={linkedinLM} dark={linkedinDM} alt="phone" />
            <a
              href="https://www.linkedin.com/in/dinhquanelv"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 hover:underline"
            >
              www.linkedin.com/in/dinhquanelv
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
