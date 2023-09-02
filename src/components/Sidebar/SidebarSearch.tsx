import React from 'react';
import { CustomIcon } from '..';

const SidebarSearch = () => {
  return (
    <div className="sidebar-search mt-[12px]">
      <div>
        <div className="flex flex-col gap-[12px]">
          <div className="searchbox-cont workplace-switcher">
            <div className="flex items-center w-full justify-between">
              <button className="pro-name-chev flex w-full justify-between items-center btn rounded h-[32px]">
                <div className="ml-[7px] proj-name-in-title flex gap-2">
                  <div className="w-[22px] h-[22px] bg-orange-400 flex items-center justify-center text-white rounded">
                    <h2>M</h2>
                  </div>
                  <h2>Multi Project</h2>
                </div>
                <div className="chevron-in-title h-[18px] w-[18px] flex items-center justify-center">
                  <CustomIcon
                    src="./chevron.svg"
                    alt="switch project dropdown icon"
                    size="xs"
                  />
                </div>
              </button>
              <div className="btn-wrapper ml-[12px]">
                <div className="relative">
                  <div className="btntop h-[32px] w-[32px] rounded overflow">
                    <span className="inline-flex h-full w-full">
                      <button className="w-full h-full btn-trans rounded hover:bg-[lightgray]">
                        <CustomIcon
                          src="./dots.svg"
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
          <div className="searchbox-cont search-area">
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
