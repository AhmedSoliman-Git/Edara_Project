"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHelmetSafety } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Benefits() {
  const t = useTranslations("Benefits");
  const path = usePathname();
  let hClass = "font-PlatNomor text-2xl xl:text-3xl py-3";
  let pClass = "font-PoppinsE text-lg mb-3";
  let classes = "m-0 md:m-10 bg-[#efefef] p-0 sm:p-12 font-PlatNomor";
  let benClass = "text-center text-5xl font-Azonix";
  let marClass =
    "text-left text-5xl text-[#e0b472] my-10 bg-black font-PoppinsE font-bold p-2";
  const secRef = useRef();

  if (path.includes("ar")) {
    classes = "m-0 md:m-10 bg-[#efefef] p-0 sm:p-12 font-arab";
    hClass = "font-arab text-3xl text-right py-3";
    pClass = "font-arab text-right text-lg mb-3";
    benClass = "text-center text-5xl font-arab";
    marClass =
      "text-left text-5xl text-[#e0b472] my-10 bg-black font-arab font-bold p-2";
  }

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".autoShow");
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: secRef }
  );
  return (
    <>
      <div className={benClass}>
        <h1 className="mb-3">{t("BENH")}</h1>
        <p className="w-1/3 font-bold bg-[#e0b472] h-2 m-auto"></p>
      </div>
      <section className={classes+ " serviceBg"}>
        <marquee className={marClass}>{t("BEN1")}</marquee>

        <div
          className="imgMain flex flex-col justify-center items-center gap-y-2 py-10"
          ref={secRef}
        >
          <div className="autoShow flex flex-col justify-start items-start p-10 opacity-0 w-full scale-0 lg:w-1/2 duration:300 border border-white">
            <div className="px-8 py-5 flex justify-center items-center border rounded-t-full mb-6 border-white">
              <HiOutlineLightBulb fontSize={50} color="white" />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN2")}</h3>
              <p className={pClass}>{t("BEN8")}</p>
            </div>
          </div>

          <div className="autoShow flex flex-col justify-start items-start p-10 opacity-0 w-full scale-0 lg:w-1/2 duration:300 border border-white">
            <div className="px-8 py-5 flex justify-center items-center border rounded-t-full mb-6 border-white">
              <FaHandshake fontSize={50} color="white" />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN3")}</h3>
              <p className={pClass}>{t("BEN9")}</p>
            </div>
          </div>

          <div className="autoShow flex flex-col justify-start items-start p-10 opacity-0 w-full scale-0 lg:w-1/2 duration:300 border border-white">
            <div className="px-8 py-5 flex justify-center items-center border rounded-t-full mb-6 border-white">
              <FaRegEye fontSize={50} color="white" />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN4")}</h3>
              <p className={pClass}>{t("BEN10")}</p>
            </div>
          </div>

          <div className=" autoShow flex flex-col justify-start items-start p-10 opacity-0 w-full scale-0 lg:w-1/2 duration:300 border border-white">
            <div className="px-8 py-5 flex justify-center items-center border rounded-t-full mb-6 border-white">
              <FaPeopleGroup fontSize={50} color="white" />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN5")}</h3>
              <p className={pClass}>{t("BEN11")}</p>
            </div>
          </div>

          <div className=" autoShow flex flex-col justify-start items-start p-10 opacity-0 w-full scale-0 lg:w-1/2 duration:300 border border-white">
            <div className="px-8 py-5 flex justify-center items-center border rounded-t-full mb-6 border-white">
              <FaHelmetSafety fontSize={50} color="white" />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN6")}</h3>
              <p className={pClass}>{t("BEN12")}</p>
            </div>
          </div>

          <div className="autoShow flex flex-col justify-start items-start p-10 opacity-0 scale-0 w-full lg:w-1/2 duration:300 border border-white ">
            <div className="px-8 py-5 flex justify-center items-center border rounded-t-full mb-6 border-white">
              <CiTimer fontSize={50} color="white" />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN7")}</h3>
              <p className={pClass}>{t("BEN13")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
