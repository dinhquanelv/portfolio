import { Link } from 'react-scroll';

import Logo from './Logo';
import Menu from './Menu';
import ToggleButton from './ToggleButton';

const Header = () => {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 h-[56px] w-full border-b border-solid 
      bg-light text-blackText dark:bg-dark dark:text-whiteText 
      border-lightBorder dark:border-darkBorder"
    >
      <div className="flex flex-row items-center justify-between max-w-[1440px] m-auto px-4">
        <div className="sm:hidden block ">
          <Menu />
        </div>
        <Link to="home" smooth={true} duration={500}>
          <Logo />
        </Link>
        <div className="sm:flex hidden flex-row select-none">
          <Link to="about-me" smooth={true} duration={500}>
            <button className="btn">About me</button>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <button className="btn">Skills</button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button className="btn">Projects</button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">Contact</button>
          </Link>
        </div>
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
