import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import PopupButton from "./PopupButton";

interface PopupItem {
  title: string;
  redirect: string;
}

interface NavbarButtonProps {
  title: string;
  redirect: string;
  popup?: PopupItem[];
  height: number;
}

const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupHovered, setIsPopupHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 400);
  };

  const handlePopupMouseEnter = () => {
    setIsPopupHovered(true);
  };

  const handlePopupMouseLeave = () => {
    setTimeout(() => {
      setIsPopupHovered(false);
    }, 400);
  };

  const shouldDisplayPopup = isHovered || isPopupHovered;

  return (
    <Link href={props.redirect || ""}>
      <div
        className='hover:cursor-pointer relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='font-poppins'>{props.title}</div>
        <motion.div
          className='bottom-0 left-0 w-0 h-[2px] bg-black'
          style={{ width: isHovered ? "100%" : "0" }}
          animate={{ width: isHovered ? "100%" : "0" }}
          transition={{ duration: 0.4 }}
        ></motion.div>
        {shouldDisplayPopup && props.popup && props.popup[0]!.title !== "" && (
          <motion.div
            className='fixed z-[100] text-white bg-secondary-color hover:cursor-default p-4 -mx-8 '
            style={{ top: props.height }}
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {props.popup.map((item, i) => (
              <motion.div
                key={i}
                className='min-w-[150px] m-4 h-fit w-fit'
              >
                <PopupButton
                  title={item.title}
                  redirect={item.redirect}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export default NavbarButton;
