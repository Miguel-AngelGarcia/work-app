import React from 'react';
import { CustomButtonProps } from '@/types';

const CustomButton = ({
  title,
  containerStyles,
  btnStyles,
  handleClick,
  btnType,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      type={'button' || btnType}
      className={`${btnStyles}`}
      onClick={handleClick}
    ></button>
  );
};

export default CustomButton;
