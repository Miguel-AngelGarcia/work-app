import React from 'react';
import { CustomIcon } from '..';
import { sidebarTopData } from '@/constants';

const SidebarTop = () => {
  return (
    <div className="sb-top-comp ">
      {sidebarTopData.map((sbtItem) => (
        <div className={`${sbtItem.text}-btn`} key={sbtItem.text}>
          <button className="btnStyle btn-sb bt-t">
            <CustomIcon
              src={sbtItem.link}
              alt={`${sbtItem.text} icon`}
              size="sm"
            />
            <span className="text-[16px]">{sbtItem.text}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SidebarTop;
