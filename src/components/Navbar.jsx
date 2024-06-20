"use client";
import { animations } from "@/Data/animations";
import { animatePageOut } from "@/utils/gsapTransition";
import { usePathname, useRouter } from "next/navigation";
export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href, name) => {
    const textTransition = document.getElementById("banner-2");
    textTransition.innerText = name;
    if (pathName != href) {
      animatePageOut(href, router, window.innerWidth, window.innerHeight);
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
