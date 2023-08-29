import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTable,
  faTimeline,
  faChartPie,
  faGaugeHigh,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const FormMenu = () => {
  const tableIcon = <FontAwesomeIcon icon={faTable} size="sm" />;

  const timelineIcon = <FontAwesomeIcon icon={faTimeline} size="sm" />;

  const chartIcon = <FontAwesomeIcon icon={faChartPie} size="sm" />;

  const dashIcon = <FontAwesomeIcon icon={faGaugeHigh} size="sm" />;

  return (
    <div className="form-menu-items flex flex-row items-center">
      <div className="flex-1">
        <div className="flex flex-row justify-items-center items-center">
          {tableIcon}
          <h6 className="center-helper">Main Table</h6>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-row justify-items-center items-center">
          {timelineIcon}
          <h6 className="center-helper">Timeline</h6>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-row justify-items-center items-center">
          {chartIcon}
          <h6 className="center-helper">Chart</h6>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-row justify-items-center items-center">
          {dashIcon}
          <h6 className="center-helper">Dashboard</h6>
        </div>
      </div>
    </div>
  );
};

export default FormMenu;
