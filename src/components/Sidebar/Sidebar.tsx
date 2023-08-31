import React from 'react';
import CustomIcon from '../CustomIcon';
import SidebarTop from './SidebarTop';
import SidebarSearch from './SidebarSearch';
import SidebarBottom from './SidebarBottom';

const Sidebar = () => {
  return (
    <div className="w-[255px] flex-shrink-0 bg-slate-400 rounded-tr-lg bg-comp">
      <SidebarTop />
      <SidebarSearch />
      <SidebarBottom />
    </div>
  );
};

export default Sidebar;
