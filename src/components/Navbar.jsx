"use client";
import { animations } from "@/Data/animations";
import { animatePageOut, animatePageOut2 } from "@/utils/gsapTransition";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href, name) => {
    const textTransition = document.getElementById("banner-2");
    textTransition.innerText = name;
    if (pathName != href) {
      animatePageOut(href, router, width, height);
    }
  };
  return (
    <>
      <div className="fixed top-5 left-5 font-bold flex items-center gap-5">
        {animations.map((animation, index) => {
          return (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => handleClick(animation.href, animation.name)}
            >
              {animation.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
