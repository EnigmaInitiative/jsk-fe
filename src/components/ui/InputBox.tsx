import React, { forwardRef } from "react";

interface InputBoxProps {
  icon?: JSX.Element;
  label: string;
  sliding?: boolean;
  ref?: HTMLInputElement;
  number?: boolean;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>((props, ref) => {
  return (
    <div
      className={`my-4 flex flex-col font-poppins font-medium text-jsk-blue`}
    >
      {props.icon}
      <p className="mb-4">{props.label}</p>
      <input
        type={props.number ? "number" : "text"}
        className="h-10 bg-[#F7F7F7] p-2"
        ref={ref}
      />
    </div>
  );
});

InputBox.displayName = "TextBox";

export default InputBox;
