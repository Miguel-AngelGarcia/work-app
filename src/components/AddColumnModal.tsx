'use client';
import React, { use } from 'react';
import { MouseEventHandler } from 'react';
import CustomIcon from './CustomIcon';

import Image from 'next/image';

const AddColumnModal = () => {
  const data = [
    { link: '/staggered.svg', text: 'status' },
    { link: '/cursor.svg', text: 'text' },
    { link: '/people.svg', text: 'people' },
    { link: '/hourglass.svg', text: 'timeline' },
    { link: '/date.svg', text: 'date' },
    { link: '/poundSign.svg', text: 'tags' },
  ];

  const handleClick = () => {
    console.log('hi');
  };

  return (
    <div className="bg-white text-black ac-modal h-[400px] w-[200px] rounded-xl flex flex-col p-[10px] z-10">
      <div className="flex flex-col ac-modal gap-y-1">
        {data.map((button) => (
          <a href="#" key={button.text} onClick={handleClick}>
            <div className="flex flex-row m-div">
              <CustomIcon
                src={button.link}
                alt={button.text}
                size="md"
              ></CustomIcon>
              <p className="capitalize">{button.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AddColumnModal;

/*OLD
 return (
    <div className="bg-white text-black ac-modal h-[400px] w-[200px] rounded-xl flex flex-col p-[10px]">
      <div className="flex flex-col ac-modal gap-y-1">
        <a href="#">
          <div className="flex flex-row m-div">
            <div className="icon-container">
              <Image
                src="/staggered.svg"
                alt="people icon"
                height={40}
                width={40}
                className="object-contain"
              />
            </div>
            <p>Status</p>
          </div>
        </a>

        <div className="flex flex-row m-div">
          <div className="icon-container">
            <a>
              <Image
                src="/cursor.svg"
                alt="text icon"
                height={40}
                width={40}
                className="object-contain"
              />
            </a>
          </div>
          <p>Text</p>
        </div>
        <div className="flex flex-row m-div">
          <div className="icon-container">
            <Image
              src="/people.svg"
              alt="people icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <p>People</p>
        </div>
        <div className="flex flex-row m-div">
          <div className="icon-container">
            <Image
              src="/hourglass.svg"
              alt="hourglass icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <p>Timeline</p>
        </div>
        <div className="m-div flex flex-row">
          <div className="icon-container">
            <Image
              src="/date.svg"
              alt="calendar icon"
              height={40}
              width={40}
              className="object-contain"
            />
          </div>
          <p>Date</p>
        </div>
        <div className="m-div flex flex-row">
          <div className="icon-container">
            <Image
              src="/poundSign.svg"
              alt="hashtag or pound sign icon"
              height={40}
              width={40}
              className="object-contain"
            />
          </div>
          <p>Tags</p>
        </div>
      </div>
    </div>
  );
  
  OLDV2
  
  return (
    <div className="bg-white text-black ac-modal h-[400px] w-[200px] rounded-xl flex flex-col p-[10px] z-10">
      <div className="flex flex-col ac-modal gap-y-1">
        {data.map((button) => (
          <a href="#" key={button.text} onClick={handleClick}>
            <div className="flex flex-row m-div">
              <div className="icon-container">
                <Image
                  src={button.link}
                  alt={`${button.text} icon`}
                  height={40}
                  width={40}
                  className="object-contain"
                />
              </div>
              <p className="capitalize">{button.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
  */
