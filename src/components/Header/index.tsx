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
        <div className="sm:hidden block">
          <Menu />
        </div>
        <Logo />
        <div className="sm:flex hidden flex-row select-none">
          <button className="btn">About me</button>
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
