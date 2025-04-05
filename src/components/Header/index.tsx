import { FiMenu } from 'react-icons/fi';

import Logo from './Logo';
import ToggleButton from './ToggleButton';

const Header = () => {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 h-[56px] w-full border-b border-solid 
      bg-light text-blackText dark:bg-dark dark:text-whiteText 
      border-lightBorder dark:border-darkBorder"
    >
      <div className="flex flex-row items-center justify-between max-w-[1440px] m-auto px-4">
        <button className="sm:hidden block">
          <FiMenu size={24} />
        </button>
        <Logo />
        <div className="sm:flex hidden flex-row">
          <button className="btn">About Me</button>
          <button className="btn">Skills</button>
          <button className="btn">Projects</button>
          <button className="btn">Contact</button>
        </div>
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
