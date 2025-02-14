"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "../../i18n/routing";
import first from "../../public/photos/water2.jpg";
import second from "../../public/photos/water3.jpg";
import third from "../../public/photos/build1.jpg";
import forth from "../../public/photos/Build2.jpg";
import fivth from "../../public/photos/Build3.jpg";
import "./Carosel.css";

const slider = [
  {
    img: first,
  },
  {
    img: second,
  },
  {
    img: third,
  },
  {
    img: forth,
  },
  {
    img: fivth,
  },
];
export default function Carosel() {
  const [slide, setSlide] = useState(0);
  const [move, setMove] = useState(true);
  const t = useTranslations("Slider");
  const path = usePathname();
  let timeOut = null;

  function previousSlide() {
    const firstSlide = slide === 0;
    const IsSlider = firstSlide ? slider.length - 1 : slide - 1;
    setSlide(IsSlider);
  }
  function nextSlide() {
    const lastSlide = slide === slider.length - 1;
    const IsSlider = lastSlide ? 0 : slide + 1;
    setSlide(IsSlider);
  }

  function giveMEindex(itemIndex, event) {
    setSlide(itemIndex);
  }
  useEffect(() => {
    timeOut =
      move &&
      setTimeout(() => {
        nextSlide();
      }, 2500);
  }, [slide]);

  let SliderClass =
    "z-20 w-full flex md:flex flex-row-reverse justify-around absolute top-1/2 selection:bg-[#e0b472] selection:text-white";
  let contentClass =
    "font-arab w-[60%] md:w-[600px] md:flex flex-col selection:bg-[#e0b472] selection:text-white text-right";

  if (!path.includes("ar")) {
    SliderClass =
      "z-20 w-full flex md:flex flex-row justify-around absolute top-1/2 selection:bg-[#e0b472] selection:text-white";
    contentClass =
      "font-Azonix w-[60%] md:w-[600px] md:flex flex-col selection:bg-[#e0b472] selection:text-white text-left leading-l";
  }

  return (
    <>
      <div className="addShadow w-full h-screen relative  overflow-hidden">
        <div
          className="w-full h-full flex"
          onMouseEnter={() => {
            setMove(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setMove(true);
            setTimeout(() => {
              nextSlide();
            }, 2500);
          }}
        >
          {slider.map((el, elIndex) => {
            return (
              <Image
                key={elIndex}
                src={el.img}
                alt="Slider Photo"
                className={
                  elIndex == slide ? "carasol carasol_cardActive" : "carasol"
                }
                loading="lazy"
              />
            );
          })}
          <div className={SliderClass}>
            <div className={contentClass + " w-[80%]"}>
              <h1 className="leading-tight text-2xl sm:text-5xl text-[#e0b472] mb-2 font-bold md:text-5xl md:leading-tight md:font-bold md:mb-5">
                {t("HEAD")}
              </h1>
              <h5 className="text-white text-lg mb-4 font-medium md:text-2xl md:mb-5 ">
                {t("P")}
              </h5>
              <div className="space-x-3 text-white flex">
                <Link
                  href="/"
                  className=" btn w-1/2 text-center font-bold  py-3 sm:px-10 sm:py-2 md:px-10 md:py-5 rounded-xl border cursor-pointer shadow-lg md:font-medium md:text-2xl duration-200"
                >
                  {t("btn1")}
                </Link>
                <Link
                  href="/"
                  className="btn w-1/2 text-center font-bold  py-3 sm:px-10 sm:py-2 md:px-10 md:py-5 rounded-xl border cursor-pointer shadow-lg md:font-medium md:text-2xl  duration-200"
                >
                  {t("btn2")}
                </Link>
              </div>
            </div>

            <div>
              <div
                className="text-3xl leading-[100%] text-center hover:text-[#e0b472]  duration-300 font-bold text-white px-1 cursor-pointer select-none"
                onClick={previousSlide}
              >
                {" "}
                <span>
                  <SlArrowRight />
                </span>
              </div>
              <div
                className="text-3xl leading-[100%] text-center hover:text-[#e0b472]  duration-300 font-bold text-white px-1 cursor-pointer select-none"
                onClick={nextSlide}
              >
                <span>
                  <SlArrowLeft />
                </span>
              </div>
            </div>
          </div>

          <ul className=" bottom-0 z-20 -rotate-90 left-1/2 -translate-x-1/2 flex justify-start flex-col items-start absolute md:top-1/2 md:-translate-y-48 md:translate-x-0  md:left-0 md:rotate-0 ">
            {slider.map((item, itemIndex) => {
              return (
                <li
                  key={itemIndex}
                  id={itemIndex}
                  className={
                    slide == itemIndex
                      ? "bg-[#e0b472] w-32 h-[1px] cursor-pointer duration-300 mt-2"
                      : "mt-2 bg-white w-24 h-[1px] cursor-pointer hover:bg-gray duration-300"
                  }
                  onClick={(event) => giveMEindex(itemIndex, event)}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
