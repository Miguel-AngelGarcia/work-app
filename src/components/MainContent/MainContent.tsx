import React from 'react';
import { CustomIcon } from '..';
import CustomCollapsible from '../CustomCollapsible';
import { RecentlyVisited } from '.';

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
                <CustomCollapsible title={'Recently visited'} component={rv} />
                <CustomCollapsible
                  title={`Update feed (Inbox) ${2}`}
                  component={uf}
                />
                <CustomCollapsible title={'My workspaces'} component={mw} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

export const rv = (
  <span className="recent-entities-component collapse">
    <div
      className="quick-search-cards-list"
      role="listbox"
      aria-label="Quick search results"
    >
      <div className="flex items-center justify-center">
        <div className="test-info"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="test-info"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="test-info"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="test-info"></div>
      </div>
    </div>
    <div className="show-more-button flex justify-center items-center">
      <button className="show-all-btn btn-trans bt-t">Show all</button>
    </div>
  </span>
);

export const uf = (
  <div className="uf-container mt-[12px]">
    <div className="p-[16px]">
      <div className="posts">
        <div className="post-card-component">
          <span className="post-user-image mr-[12px]">
            <CustomIcon
              src={'./people.svg'}
              alt={'User image icon'}
              size="lg"
            />
          </span>
          <span className="post-content-body" /*being map below*/>
            <div className="p-c-header flex items-center mb-1">
              <span className="post-user-name">
                <div className="text-part">{'User Name'}</div>
              </span>
            </div>
            <div className="p-c-body-text">{'User Test Stuff'}</div>
          </span>
          <span className="post-time flex">
            <CustomIcon src="./clock.svg" alt="days old icon" size="sm" />
            <span>3d</span>
          </span>
        </div>
        <div className="line-sep">
          <div className="line-sep-inner"></div>
        </div>
      </div>
    </div>
  </div>
);

export const mw = (
  <span className="expandable-section-comp">
    <div className="my-workspaces-comp">
      <div className="workspaces-list">
        <div className="flex items-center justify-center">
          <div className="test-info"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="test-info"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="test-info"></div>
        </div>
      </div>
    </div>
  </span>
);
