'use client';

import React from 'react';
import Image from 'next/image';
import { CustomIconProps } from '@/types';
import { text } from 'stream/consumers';

const CustomIcon = ({ src, alt, size }: CustomIconProps) => {
  const smallStyle = 'max-w-[20px] max-h-[20px]';

  const mediumStyle = 'max-w-[30px] max-h-[30px]';

  const styles = {
    xs: 'max-w-[16px] max-h-[16px]',
    sm: 'max-w-[20px] max-h-[20px]',
    md: 'max-w-[30px] max-h-[30px]',
  };

  return (
    <div className="max-w-[40px] flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        height={40}
        width={40}
        //className={size == 'sm' ? smallStyle : mediumStyle}
        className={`custom-icon-${size}`}
      />
    </div>
  );
};

export default CustomIcon;
