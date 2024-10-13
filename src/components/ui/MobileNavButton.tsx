"use client";
import Link from "next/link";
import React, { useState } from "react";

interface MobileNavButtonProps {
  title: string | JSX.Element;
  redirect: string;
  className?: string;
}

const MobileNavButton: React.FC<MobileNavButtonProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={props.redirect}>
      <div className="w-fit text-2xl hover:cursor-pointer">
        <div
          className={`font-dms duration-[400ms] text-black transition-all ease-in-out hover:ml-2 hover:text-black/80 ${props.className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.title}
        </div>
        <div
          className="duration-[400ms] bottom-0 left-0 h-[2px] w-0 bg-white transition-all ease-in-out"
          style={{
            width: isHovered ? "100%" : "0",
            marginLeft: isHovered ? "8px" : "0",
          }}
        />
      </div>
    </Link>
  );
};

export default MobileNavButton;
