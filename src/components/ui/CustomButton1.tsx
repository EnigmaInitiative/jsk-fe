import React from "react";

interface CustomButton1Props {
  label: string | JSX.Element;
  redirect?: string;
}

const CustomButton1: React.FC<CustomButton1Props> = (props) => {
  const ButtonContent = (
    <div className="duration-[400ms] px-[42px] py-[18px] text-center font-medium uppercase tracking-widest text-white transition-all ease-in-out hover:cursor-pointer hover:brightness-90 bg-jsk-blue">
      {props.label}
    </div>
  );

  return props.redirect ? (
    <a href={props.redirect}>{ButtonContent}</a>
  ) : (
    ButtonContent
  );
};

export default CustomButton1;
