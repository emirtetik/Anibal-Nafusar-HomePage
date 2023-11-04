import { useState } from 'react';
import Navigation from '../navigation';
import Search from '@/app/components/_corecomponent/search';
import ThemeButton from '@/app/components/_corecomponent/button/themeButton';
import Logo from '@/app/components/logo';
import MobileButton from '@/app/components/_corecomponent/button/mobileButton';
import { BsMenuButtonFill } from "react-icons/bs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-black text-white">
       <div className="flex justify-between items-center w-full">
      {!isOpen ?  <Logo /> : ""}
        <div className="md:hidden text-2xl ml-auto">
          <MobileButton
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsMenuButtonFill className="w-6 h-6 " />
          </MobileButton>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex space-x-2 md:space-x-4 mt-4 md:mt-0 transition-all duration-700 ease-in-out`}
      >
       <div className='flex justify-between w-full mt-4'>
          <div className='flex flex-col space-x-2 md:space-x-4'>
            <Navigation />
            <Search />
          </div>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default MobileMenu;
