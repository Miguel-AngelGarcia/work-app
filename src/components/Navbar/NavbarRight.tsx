import React from 'react';
import { rightNavbarData } from '@/constants';
import { CustomIcon } from '..';

const NavbarRight = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      {rightNavbarData.map((menuIcon) => (
        <div className="md-icon-cont" key={menuIcon.text}>
          <button className="rounded btn h-[40px] w-[40px]">
            <CustomIcon
              src={menuIcon.link}
              alt={`${menuIcon.text} icon`}
              size="md"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavbarRight;
