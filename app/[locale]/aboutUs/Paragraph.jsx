'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useRef } from "react";
gsap.registerPlugin(useGSAP,ScrollTrigger);


export default function Paragraph({ text, classes, additionalText }) {
  const splitRef = useRef();

  useGSAP(() => {
    const SplitText = new SplitType(splitRef.current, { types: "chars" });

    gsap.from(SplitText.chars, {
      yPercent: 80,
      stagger: 0.02,
      ease: "back.out",
      duration: 0.2,
      scrollTrigger: {
        trigger: splitRef.current,
        start: "top 90%",
        toggleActions: "restart",
      },
    });
  });

  return <p className={classes} ref={splitRef}>{text}</p>
}
