interface SocialIconProps {
  icon: string;
  link: string;
}

const SocialIcon = ({ icon, link }: SocialIconProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-center items-center w-12 h-12 mx-4 border border-whiteText rounded-full hover:bg-whiteText"
    >
      <img src={icon} alt="icon" className="w-5 h-5 group-hover:invert" />
    </a>
  );
};

export default SocialIcon;
