import { create } from "zustand";

interface showHamburger {
  showHamburger: boolean;
  setShowHamburger: (showHamburger: boolean) => void;
}

export const useShowHamburgerStore = create<showHamburger>((set) => ({
  showHamburger: true,
  setShowHamburger: (showHamburger: boolean) => set({ showHamburger }),
}));

interface scrollValue {
  scrollValue: number;
  setScrollValue: (scrollValue: number) => void;
}

export const useScrollValueStore = create<scrollValue>((set) => ({
  scrollValue: 0,
  setScrollValue: (scrollValue: number) => set({ scrollValue }),
}));

interface navbarHeight {
  navbarHeight: number;
  setNavbarHeight: (navbarHeight: number) => void;
}

export const useNavbarHeightStore = create<navbarHeight>((set) => ({
  navbarHeight: 0,
  setNavbarHeight: (navbarHeight: number) => set({ navbarHeight }),
}));
