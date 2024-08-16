"use client";
import Link from "next/link";
import React, { useState } from "react";

interface PopupButtonProps {
  title: string | JSX.Element;
  redirect: string;
}

const PopupButton: React.FC<PopupButtonProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={props.redirect}>
      <div className='hover:cursor-pointer w-fit'>
        <div
          className='font-dms text-[#d2d3d5d9] hover:text-white transition-all duration-[400ms] ease-in-out hover:ml-2'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.title}
        </div>
        <div
          className='bottom-0 left-0 w-0 h-[2px] bg-white transition-all ease-in-out duration-[400ms]'
          style={{
            width: isHovered ? "100%" : "0",
            marginLeft: isHovered ? "8px" : "0",
          }}
        ></div>
      </div>
    </Link>
  );
};

export default PopupButton;
