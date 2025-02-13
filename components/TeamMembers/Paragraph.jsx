"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Paragraph({ text, additionalText, Id, ON }) {
  const splitRef = useRef();

  useGSAP(() => {
    const SplitText = new SplitType(splitRef.current, { types: "words" });

    gsap.from(SplitText.words, {
      yPercent: 80,
      stagger: 0.02,
      ease: "back.out",
      duration: 0.5,
      scrollTrigger: {
        trigger: splitRef.current,
        start: "top 90%",
        toggleActions: "restart",
      },
    });
  });

  return (
    <div className=" block md:flex justify-center items-start gap-8" id={Id}>
      {additionalText ? (
        <h1 className="text-2xl w-full md:text-3xl lg:text-5xl text-center md:w-[31rem] lg:w-max font-PlatNomor border-b-2 border-black pb-2">
          {additionalText}
        </h1>
      ) : null}
      <p className=" w-full text-start mt-5 text-[1rem] md:text-start md:mt-0 md:text-[1rem] lg:text-lg font-PoppinsE md:w-full lg:w-2/3" ref={ON ? splitRef : null}>
        {text}
      </p>
    </div>
  );
}
