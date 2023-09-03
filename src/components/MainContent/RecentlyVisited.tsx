import React from 'react';

export type RvProps = {
  title: string;
};

const RecentlyVisited = ({ title }: RvProps) => {
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
  </span>;
};

export default RecentlyVisited;
