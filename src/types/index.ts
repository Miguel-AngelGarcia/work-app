import { MouseEventHandler } from 'react';

export interface customerTableProps {
  rowTitle: string;
}

export interface CustomIconProps1 {
  src: string;
  alt: string;
  iconWidth: number;
  iconHeight: number;
  contWidth?: number;
  contHeight?: number;
  clickable?: boolean;
}

export interface CustomIconProps {
  src: string;
  alt: string;
  size: string;
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  icon: boolean; //true if icon will be needed
}
