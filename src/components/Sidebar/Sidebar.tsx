import React from 'react';
import CustomIcon from '../CustomIcon';
import SidebarTop from './SidebarTop';
import SidebarSearch from './SidebarSearch';
import { SidebarBottom } from '.';

const Sidebar = () => {
  const data = [
    { link: '/project.svg', text: 'Project Alpha' },
    { link: '/project.svg', text: 'Project Beta' },
    { link: '/barchartH.svg', text: 'Portfolio Dashboard' },
    { link: '/barchartH.svg', text: 'Learning Center' },
  ];

  return (
    <div className="w-[255px] flex-shrink-0 bg-slate-400 rounded-tr-lg bg-comp">
      <SidebarTop />
      <SidebarBottom />
    </div>
  );
};

export default Sidebar;
