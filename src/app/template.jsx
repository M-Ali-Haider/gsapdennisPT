"use client";
import { animatePageIn } from "@/utils/gsapTransition";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }) {
  const [width, setWidth] = useState(0);
  const pathName = usePathname().substring(1);
  const formattedPathName =
    pathName.charAt(0).toUpperCase() + pathName.slice(1);
  useEffect(() => {
    setWidth(window.innerWidth);
    animatePageIn(window.innerWidth, window.innerHeight);
  }, []);
  return (
    <>
      <div
        style={{ opacity: width > 0 ? 0 : 1 }}
        className="fixed w-screen h-screen z-10 pointer-events-none bg-black"
      />
      <svg
        id="banner-1"
        className="h-[calc(100vh+600px)] w-screen z-[90] fixed top-0 left-0 pointer-events-none"
      >
        <path id="banner-3"></path>
      </svg>
      <div
        id="banner-2"
        className="text-6xl fixed left-[50%] top-[40%] -translate-x-[50%] text-white z-[100] pointer-events-none"
      >
        {formattedPathName === "" ? "Homepage" : formattedPathName}
      </div>
      {children}
    </>
  );
}
