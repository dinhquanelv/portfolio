import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-scroll';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Logo from './Logo';

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <FiMenu size={24} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>
              <Logo />
            </Link>
          </SheetTitle>
          <div className="flex flex-col">
            <Link to="about-me" smooth={true} duration={500} onClick={handleLinkClick}>
              <div className="flex justify-start w-full p-4 border-b hover:cursor-pointer">About Me</div>
            </Link>
            <Link to="skills" smooth={true} duration={500} onClick={handleLinkClick}>
              <div className="flex justify-start w-full p-4 border-b hover:cursor-pointer">Skills</div>
            </Link>
            <Link to="projects" smooth={true} duration={500} onClick={handleLinkClick}>
              <div className="flex justify-start w-full p-4 border-b hover:cursor-pointer">Projects</div>
            </Link>
            <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>
              <div className="flex justify-start w-full p-4 border-b hover:cursor-pointer">Contact</div>
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
