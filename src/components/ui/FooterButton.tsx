"use client";
import React, { useState } from "react";

interface FooterButtonProps {
  title: string;
  redirect: string;
  className?: string;
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
      <div className="w-fit hover:cursor-pointer">
        <div
          className={`font-inter ${props.className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.title}
        </div>
        <div
          className={`duration-[400ms] bottom-0 left-0 h-[2px] w-0 bg-black transition-all ease-in-out`}
          style={{ width: isHovered ? "100%" : "0" }}
        ></div>
      </div>
    </a>
  );
};

export default FooterButton;
