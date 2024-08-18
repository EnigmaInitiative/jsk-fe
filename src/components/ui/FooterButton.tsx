"use client";
import React, { useState } from "react";

interface FooterButtonProps {
  title: string;
  redirect: string;
}

const FooterButton: React.FC<FooterButtonProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href={props.redirect}>
      <div className='hover:cursor-pointer w-fit'>
        <div
          className=' font-dms'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.title}
        </div>
        <div
          className='bottom-0 left-0 w-0 h-[2px] bg-white transition-all ease-in-out duration-[400ms]'
          style={{ width: isHovered ? "100%" : "0" }}
        ></div>
      </div>
    </a>
  );
};

export default FooterButton;
