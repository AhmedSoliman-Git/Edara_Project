"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Lines() {
  const lineRef = useRef();
  let classes = "text-3xl md:text-5xl font-Azonix text-center mb-8";
  const path = usePathname();
  const t = useTranslations("Slider");

  useGSAP(() =>
  gsap.to(".line", {
      width: "66%",
      scrollTrigger: {
        trigger: ".line",
        scrub: true,
      },
    })
  );

  if (path.includes("ar")) {
    classes = "text-3xl md:text-5xl font-arab text-center font-bold mb-8";
  }

  return (
    <>
      <div>
        <div className="w-full relative p-24" ref={lineRef}>
          <p className="line absolute top-12 left-0 bg-[black] w-0 h-1 duration-200"></p>
          <p className="line absolute top-20 left-0 bg-[black] w-0 h-1 duration-200"></p>
          <p className="line absolute top-16 right-0 bg-[#e0b472] w-0 h-1 duration-200"></p>
          <p className="line absolute top-24 right-0 bg-[#e0b472] w-0 h-1 duration-200"></p>
        </div>
        <p className={classes}> {t("text")}</p>
      </div>
    </>
  );
}
