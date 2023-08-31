import React from 'react';
import { CustomIcon } from '..';

const SidebarSearch = () => {
  return (
    <div className="sidebar-search">
      <div>
        <div className="flex flex-col">
          <div></div>
          <div className="searchbox-cont">
            <div className="flex flex-col w-full">
              <div className="searchbox">
                <CustomIcon
                  src="./search.svg"
                  alt="search projects icons"
                  size="sm"
                />
                <input
                  className="input text-[16px]"
                  placeholder="Search"
                ></input>
              </div>
            </div>
            <div className="btn-wrapper ml-[12px]">
              <div className="relative">
                <div className="btntop h-[32px] w-[32px] rounded overflow">
                  <span className="inline-flex h-full w-full">
                    <button className="w-full h-full invert100 btn-trans bg-[#e28743] hover:bg-[#b36d39] rounded">
                      <CustomIcon
                        src="./plus.svg"
                        alt="add item to workspace icon"
                        size="sm"
                      />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSearch;
