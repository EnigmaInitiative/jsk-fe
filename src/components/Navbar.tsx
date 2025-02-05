"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/../../public/favicon.png";
import { navbar_data } from "../data/navbar_data";
import { Menu, X } from "lucide-react";
import { useShowHamburgerStore } from "@/store/store";
import NavbarButton from "./ui/NavbarButton";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavButton from "./ui/MobileNavButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [startTextAnimation, setStartTextAnimation] = useState(false);
  const { showHamburger, setShowHamburger } = useShowHamburgerStore();
  const divRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const pathname = usePathname();
  const [active, setActive] = useState(0);

  const toggleMenu = () => {
    if (showMenu) {
      setStartTextAnimation(false);
      setTimeout(() => setShowMenu(false), 400);
    } else {
      setShowMenu(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowHamburger(width < 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setShowHamburger]);

  useEffect(() => {
    if (divRef.current) {
      const heightInPixels = divRef.current.clientHeight;
      setNavbarHeight(heightInPixels);
    }
  }, [navbarHeight]);

  useEffect(() => {
    navbar_data.map((item, i) => {
      if (item.popup[0]?.title !== "") {
        item.popup.map((subItem) => {
          if (pathname === subItem.redirect) {
            setActive(i);
          }
        });
      }
    });
  }, [pathname]);

  return (
    <div
      className="flex h-full min-h-[10vh] flex-row items-center justify-between border-b-[1px]"
      ref={divRef}
    >
      <div className="flex h-full w-full flex-row items-center justify-between p-4">
        <a href="/">
          <Image
            src={logo as HTMLImageElement}
            className="h-[50px] w-auto"
            alt="Logo"
            height={0}
            width={0}
          />
        </a>
        {!showHamburger && (
          <div className="mx-8 flex flex-row gap-5">
            {navbar_data.map((items, i) => {
              return (
                <NavbarButton
                  key={i}
                  title={items.title}
                  popup={items.popup}
                  redirect={items.redirect}
                  height={navbarHeight}
                  active={active === i}
                />
              );
            })}
          </div>
        )}
      </div>
      {showHamburger && (
        <div className="flex w-fit items-center justify-center p-8 uppercase hover:cursor-pointer">
          <Menu onClick={toggleMenu} />
        </div>
      )}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="fixed top-0 z-[101] flex h-screen w-screen origin-top flex-col bg-white"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ scaleY: 0 }}
            onAnimationComplete={() => setStartTextAnimation(true)}
          >
            <div className="flex flex-row items-center justify-between">
              <Image
                src={logo as HTMLImageElement}
                className="ml-10 h-[50px] w-auto"
                alt="Logo"
                height={0}
                width={0}
              />
              <div className="duration-[400ms] flex w-fit p-8 uppercase text-black transition-all ease-in-out hover:rotate-90 hover:cursor-pointer hover:brightness-90">
                <X onClick={toggleMenu} />
              </div>
            </div>
            <div className="m-10 overflow-auto text-white">
              {navbar_data.map((item, i) => (
                <div key={i}>
                  <motion.div
                    key={i}
                    initial={{ x: -500, opacity: 0 }}
                    animate={{
                      x: startTextAnimation ? 0 : -500,
                      opacity: startTextAnimation ? 1 : 0,
                    }}
                    exit={{ x: -500, opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="my-2"
                    onClick={toggleMenu}
                  >
                    <MobileNavButton
                      title={item.title}
                      redirect={item.redirect}
                    />
                    {item.popup[0]?.title !== "" &&
                      item.popup.map((subItem, j) => (
                        <motion.div
                          key={`${i}-${j}`}
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                        >
                          <motion.div
                            initial={{ x: -500, opacity: 0 }}
                            animate={{
                              x: startTextAnimation ? 0 : -500,
                              opacity: startTextAnimation ? 1 : 0,
                            }}
                            exit={{ x: -500, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: i * 0.1 + j * 0.05,
                            }}
                            className="ml-4"
                            onClick={toggleMenu}
                          >
                            <MobileNavButton
                              title={subItem.title}
                              redirect={subItem.redirect}
                              className="text-lg"
                            />
                          </motion.div>
                        </motion.div>
                      ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
