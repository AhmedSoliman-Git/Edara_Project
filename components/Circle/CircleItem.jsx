"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function CircleItem() {
  let circleClass =
    "fixed bottom-4 p-4 hidden text-black hover:text-amber-700 z-[10000] bg-[#e0b472] right-10 rounded-full";
  const circleRef = useRef();
  useEffect(() => {
    const handleCircle = () => {
      if (window.scrollY >= 200) {
        circleRef.current.style.cssText =
          "display:block ; transition : all .3s ease-in";
      } else {
        circleRef.current.style.cssText =
          "display:hidden ; transition : all .3s ease-in";
      }
    };

    window.addEventListener("scroll", handleCircle);

    return () => {
      window.removeEventListener("scroll", handleCircle);
    };
  }, []);

  return (
    <Link href="#nav" className={circleClass} ref={circleRef}>
      <FaArrowUp />
    </Link>
  );
}
