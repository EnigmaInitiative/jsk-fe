import React from "react";
interface CustomButton1Props {
  label: string;
  onClick: () => void;
}

const CustomButton2: React.FC<CustomButton1Props> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className='text-[20px] bg-transparent border-2 border-black text-black uppercase tracking-widest transition-all ease-in-out duration-[400ms] hover:brightness-90 hover:cursor-pointer text-center font-medium px-[42px] py-[18px] hover:border-gradient-color-1'
    >
      {props.label}
    </div>
  );
};

export default CustomButton2;
