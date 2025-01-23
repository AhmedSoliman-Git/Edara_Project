"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { HiOutlineLightBulb } from "react-icons/hi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Benefits() {
  //[#e0b472]
  const t = useTranslations("Benefits");
  const path = usePathname();
  let hClass = "font-PlatNomor text-3xl py-3";
  let pClass = "font-PoppinsE text-lg mb-3";
  let classes = "m-10 bg-[#efefef] p-12";
  const secRef = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.autoShow');
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity:1,
          scale:1,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: secRef }
  );



//   if (path.includes("ar")) {
//   }

  return (
    <>
      <div className="text-center text-5xl font-Azonix">
        <h1>{t("BENH")}</h1>
        <p className="w-1/3 font-bold bg-[#e0b472] h-2 m-auto"></p>
      </div>
      <section className={classes}>
        <marquee className="text-left text-5xl text-[#e0b472] my-10 bg-black font-PoppinsM font-bold">
          {t("BEN1")}
        </marquee>

        <div className="flex flex-col justify-center items-center" ref={secRef}>
          <div className="autoShow flex flex-col justify-start items-start p-10 bg-[#ffffff] -translate-x-1/2 opacity-0 scale-0">
            <div className="px-8 py-5 bg-slate-200 flex justify-center items-center border rounded-t-full mb-6">
              <HiOutlineLightBulb fontSize={50} />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN2")}</h3>
              <p className={pClass}>{t("BEN3")}</p>
            </div>
          </div>

          <div className="autoShow flex flex-col justify-start items-start p-10 bg-[#ffffff] translate-x-1/2 opacity-0 scale-0">
            <div className="px-8 py-5 bg-slate-200 flex justify-center items-center border rounded-t-full mb-6">
              <HiOutlineLightBulb fontSize={50} />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN2")}</h3>
              <p className={pClass}>{t("BEN3")}</p>
            </div>
          </div>


          <div className="autoShow flex flex-col justify-start items-start p-10 bg-[#ffffff] -translate-x-1/2 opacity-0 scale-0">
            <div className="px-8 py-5 bg-slate-200 flex justify-center items-center border rounded-t-full mb-6">
              <HiOutlineLightBulb fontSize={50} />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN2")}</h3>
              <p className={pClass}>{t("BEN3")}</p>
            </div>
          </div>


          <div className=" autoShow flex flex-col justify-start items-start p-10 bg-[#ffffff] translate-x-1/2 opacity-0 scale-0">
            <div className="px-8 py-5 bg-slate-200 flex justify-center items-center border rounded-t-full mb-6">
              <HiOutlineLightBulb fontSize={50} />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN2")}</h3>
              <p className={pClass}>{t("BEN3")}</p>
            </div>
          </div>


          <div className=" autoShow flex flex-col justify-start items-start p-10 bg-[#ffffff] -translate-x-1/2 opacity-0 scale-0">
            <div className="px-8 py-5 bg-slate-200 flex justify-center items-center border rounded-t-full mb-6">
              <HiOutlineLightBulb fontSize={50} />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN2")}</h3>
              <p className={pClass}>{t("BEN3")}</p>
            </div>
          </div>


        <div className="autoShow flex flex-col justify-start items-start p-10 bg-[#ffffff] translate-x-1/2 opacity-0 scale-0">
            <div className="px-8 py-5 bg-slate-200 flex justify-center items-center border rounded-t-full mb-6">
              <HiOutlineLightBulb fontSize={50} />
            </div>
            <div className="text-left">
              <h3 className={hClass}>{t("BEN2")}</h3>
              <p className={pClass}>{t("BEN3")}</p>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}
