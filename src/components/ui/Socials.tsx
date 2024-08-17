// import { Facebook, Twitter, Dribbble, Instagram } from "lucide-react";
import React from "react";

interface SocialProps {
  mode: "light" | "dark";
}
const Socials: React.FC<SocialProps> = () => {
  return (
    <div>
      <div className='flex flex-row gap-2'>
        {/* <SocialIcon
          icon={<Facebook />}
          mode={props.mode}
        />
        <SocialIcon
          icon={<Twitter />}
          mode={props.mode}
        />
        <SocialIcon
          icon={<Dribbble />}
          mode={props.mode}
        />
        <SocialIcon
          icon={<Instagram />}
          mode={props.mode}
        /> */}
      </div>
    </div>
  );
};

export default Socials;

// interface SocialIconProps {
//   icon: JSX.Element;
//   mode: "light" | "dark";
// }

// const SocialIcon: React.FC<SocialIconProps> = (props) => {
//   const borderColor =
//     props.mode === "dark" ? "border-white/15" : "border-black/15";

//   return (
//     <div
//       className={`rounded-full border-2 ${borderColor} p-3 flex items-center justify-center`}
//     >
//       {props.icon}
//     </div>
//   );
// };
