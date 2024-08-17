import React from "react";

const Heading = ({ children }: { children?: React.ReactNode }) => {
  return <div className="font-inter text-[#13131A] text-5xl leading-snug text-center font-semibold">{children}</div>;
};

export default Heading;
