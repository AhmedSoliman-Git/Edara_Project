"use client";
import Image from "next/image";
import img from "../../../public/photos/Page Building/Building-3.jpg";
import "../pageContent.css";
import { Link } from "../../../i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Idea() {
  const t = useTranslations("Text");
  const path = usePathname();
  let classes =
    "w-full left-0 absolute p-10 z-20 text-left font-PoppinsM md:left-11 bg-[#0000009b] -translate-y-1/2 top-1/2 md:w-[600px]";
  let hClasses = "text-2xl sm:text-4xl text-[#e0b472] mb-6 font-PoppinsE";
  if (path.includes("ar")) {
    classes =
      "w-full right-0 absolute p-10 z-20 text-right font-arab md:right-11 bg-[#0000009b] -translate-y-1/2 top-1/2 md:w-[600px]";
    hClasses = "text-2xl sm:text-4xl text-[#e0b472] mb-6 font-arab";
  }
  return (
    <div className="mb-20">
      <div className="w-full py-28 p-11 bg-black  text-center ">
        <p className="font-PoppinsE text-[#e0b472] text-2xl md:text-5xl">
          Ready to Start your Projects ?
        </p>
      </div>

      <div className="imgb relative w-full h-[70vh] bg-black ">
        <Image src={img} className="imageMain" alt="construction Building" />
        <div className={classes}>
          <h1 className={hClasses}>{t("TrasTh")}</h1>
          <p className="leading-8 text-white">{t("TrasTp")}</p>
          <p className="text-white mt-6 w-52  text-center ml-auto block font-bold">
            <Link href="/help" className="btn block py-3 px-8">
              {t("TrasTB")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
