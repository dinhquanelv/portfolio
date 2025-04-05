import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FiMenu } from 'react-icons/fi';

import Logo from './Logo';

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={24} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <Logo />
          </SheetTitle>
          <div className="flex flex-col">
            <div className="flex justify-start w-full p-4 ">About Me</div>
            <div className="flex justify-start w-full p-4 ">Skills</div>
            <div className="flex justify-start w-full p-4 ">Projects</div>
            <div className="flex justify-start w-full p-4 ">Contact</div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
