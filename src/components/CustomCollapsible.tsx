'use server';

import React from 'react';
import { CustomIcon } from '.';

type Props = {
  title: string;
  component?: React.ComponentType;
};

interface ParentCompProps {
  childComp?: React.ReactNode;
  title: string;
}

type Props2 = {
  title: string;
  component: JSX.Element;
};

/*
const CustomCollapsible = ({ title, childComp }: ParentCompProps) => {
  return (
    <div className="collapsible-content">
      <div className="collaps-header">
        <button className="h-[24px] w-[24px] flex items-center justify-center">
          <CustomIcon
            src="./chevron.svg"
            alt="collapse recently visited icon"
            size="sm"
          />
        </button>
        <h2 className="collaps-title">{title}</h2>
      </div>
      <div className="collaps-content">{childComp}</div>
    </div>
  );
};
*/

const CustomCollapsible: React.FC<Props2> = (props) => {
  return (
    <div className="collapsible-content">
      <div className="collaps-header">
        <button className="h-[24px] w-[24px] flex items-center justify-center">
          <CustomIcon
            src="./chevron.svg"
            alt="collapse recently visited icon"
            size="sm"
          />
        </button>
        <h2 className="collaps-title">{props.title}</h2>
      </div>
      <div className="collaps-content">{props.component}</div>
    </div>
  );
};

export default CustomCollapsible;
