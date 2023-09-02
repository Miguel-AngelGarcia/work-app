import React from 'react';
import { CustomIcon } from '..';

const MainContent = () => {
  const mockUser = 'Persony';

  return (
    <div className="bn-mc-container overflow-hidden rounded-tl-lg bg-slate-300">
      <div>
        <div className="children relative flex flex-col w-full h-auto pb-[52px]">
          <div className="header">
            <div className="flex flex-col justify-center item">
              <span>Hey there {mockUser}</span>
              <br />
              <span className="font-semibold">
                Quickly access your recent boards, Inbox and workspaces
              </span>
            </div>
          </div>
          <div className="component-body">
            <div className="main-panel-cont">
              <div className="body-section">
                <div className="collapsible">
                  <div className="collaps-header">
                    <button className="h-[24px] w-[24px] flex items-center justify-center">
                      <CustomIcon
                        src="./chevron.svg"
                        alt="collapse recently visited icon"
                        size="sm"
                      />
                    </button>

                    <h2 className="collaps-title">Recently visited</h2>
                  </div>
                  <div className="collaps-content">
                    <div className="test-info"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
