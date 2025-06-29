import SocialIcon from './SocialIcon';
import facebook from '@/assets/icons/facebook.png';
import github from '@/assets/icons/github.png';
import instagram from '@/assets/icons/instagram.png';
import linkedin from '@/assets/icons/linkedin.png';
import youtube from '@/assets/icons/youtube.png';

const Footer = () => {
  return (
    <div className="w-full py-32 bg-[#111111] mt-64">
      <div className="flex flex-row justify-center items-center mb-12">
        <SocialIcon icon={facebook} link="https://www.facebook.com/dinhquanelv" />
        <SocialIcon icon={github} link="https://github.com/DinhQuanELV" />
        <SocialIcon icon={instagram} link="https://www.instagram.com/dinhquanelv/" />
        <SocialIcon icon={linkedin} link="https://www.linkedin.com/in/dinhquanelv/" />
        <SocialIcon icon={youtube} link="https://www.youtube.com/@DinhQuanELV" />
      </div>
      <p className="text-center text-sm text-whiteText">Copyright © 2025 Dinh Quan ELV. All rights reserved</p>
    </div>
  );
};

export default Footer;
