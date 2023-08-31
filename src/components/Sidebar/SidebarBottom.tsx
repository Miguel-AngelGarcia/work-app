import React from 'react';
import { sidebarBottomMockData } from '@/constants';
import { CustomIcon } from '..';

const SidebarBottom = () => {
  return (
    <div className="sb-bot-comp ">
      {sidebarBottomMockData.map((sbtItem) => (
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

export default SidebarBottom;
