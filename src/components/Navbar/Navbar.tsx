import React from 'react';
import Image from 'next/image';
import CustomIcon from '../CustomIcon';
import { NavbarRight } from '.';

const Navbar = () => {
  return (
    <div className="surface">
      <nav className="surface-control">
        <div className="nav-wrapper">
          <div className="nav-container">
            <div className="filler-div">
              <div className="space-between-div ">
                <div className="nav-left">
                  <div className="h-[40px] w-[40px] flex rounded relative justify-center items-center">
                    <a href="#">
                      <span className="pointer">
                        <div className="flex gap-1">
                          <CustomIcon
                            src="/staggered.svg"
                            alt="menu icon"
                            size="md"
                          />
                        </div>
                      </span>
                    </a>
                  </div>
                  <a href="#">
                    <div className="web-title flex ml-1 gap-2 h-[40px]">
                      <p className="font-semibold text-black text-[28px]">
                        pete&#39;s
                      </p>
                      <p className="font-thin text-black text-[28px]">
                        projects
                      </p>
                    </div>
                  </a>
                </div>
                <div className="nav-right">
                  <NavbarRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
