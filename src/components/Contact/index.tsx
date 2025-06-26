import { Element } from 'react-scroll';

import Title from '@/components/Title';
import ThemeIcon from '@/components/AboutMe/ThemeIcon';
import phoneLM from '@/assets/phoneLM.png';
import phoneDM from '@/assets/phoneDM.png';
import emailLM from '@/assets/emailLM.png';
import emailDM from '@/assets/emailDM.png';
import linkedinLM from '@/assets/linkedinLM.png';
import linkedinDM from '@/assets/linkedinDM.png';

const Contact = () => {
  return (
    <Element name="contact">
      <Title id="contact" title="interested" description="DON'T FORGET TO CONTACT ME" />
      <div className="flex flex-col md:flex-row justify-center -mt-72">
        <a
          href="tel:+840388837803"
          className="flex flex-row justify-center items-center p-4 m-4 border border-primaryColor rounded-full
        hover:bg-primaryColor hover:text-whiteText transition-all duration-300"
        >
          <ThemeIcon light={phoneLM} dark={phoneDM} alt="phone" />
          <span className="ml-2">Call me here</span>
        </a>
        <a
          href="https://www.linkedin.com/in/dinhquanelv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-center items-center p-4 m-4 border border-primaryColor rounded-full
        hover:bg-primaryColor hover:text-whiteText transition-all duration-300"
        >
          <ThemeIcon light={linkedinLM} dark={linkedinDM} alt="phone" />
          <span className="ml-2">Contact me here</span>
        </a>
        <a
          href="mailto:quanvonguyendinh@gmail.com"
          className="flex flex-row justify-center items-center p-4 m-4 border border-primaryColor rounded-full
        hover:bg-primaryColor hover:text-whiteText transition-all duration-300"
        >
          <ThemeIcon light={emailLM} dark={emailDM} alt="email" />
          <span className="ml-2">Email me here</span>
        </a>
      </div>
    </Element>
  );
};

export default Contact;
