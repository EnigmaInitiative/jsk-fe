import { motion } from "framer-motion";
import React, { useState } from "react";
import PopupButton from "./PopupButton";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { useRouter } from "next/navigation";

interface PopupItem {
  title: string;
  redirect: string;
}

interface NavbarButtonProps {
  title: string;
  redirect: string;
  popup: PopupItem[];
  height: number;
  active: boolean;
}

const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger>
        <div
          className={`border-black font-poppins ${props.active && "border-b"}`}
          onClick={() => props.redirect !== "" && router.push(props.redirect)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {props.title}
        </div>
      </PopoverTrigger>
      {props.popup[0]?.title && open && (
        <PopoverContent className="p-0" onMouseEnter={() => setOpen(true)}>
          {props.popup.map((item, i) => (
            <motion.div
              key={i}
              className="m-4 h-fit w-fit min-w-[150px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setOpen(false)}
            >
              <PopupButton title={item.title} redirect={item.redirect} />
            </motion.div>
          ))}
        </PopoverContent>
      )}
    </Popover>
  );
};

export default NavbarButton;
