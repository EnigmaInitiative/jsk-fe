"use client";
import Link from "next/link";
import React from "react";

interface PopupButtonProps {
  title: string | JSX.Element;
  redirect: string;
}

const PopupButton: React.FC<PopupButtonProps> = (props) => {
  return (
    <Link href={props.redirect}>
      <div className="w-fit hover:cursor-pointer">
        <div className="font-dms duration-[400ms] transition-all ease-in-out hover:ml-2">
          {props.title}
        </div>
      </div>
    </Link>
  );
};

export default PopupButton;
