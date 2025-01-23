"use client";
import Image from "next/image";
import build from '../../../public/photos/Page Building/Building-1.jpg';
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import '../pageContent.css'
export default function ConstructionText() {
  const t = useTranslations("Text");
  const path = usePathname();
  let classes = "autor md:w-2/3 text-white p-4 font-Azonix selection:bg-white";
  let pClass =
    "leading-8 text-md lg:leading-10 lg:text-lg font-RedGlass selection:bg-[#e0b472]";
  if (path.includes("ar")) {
    classes =
      "autor md:w-2/3 text-white p-4 text-right font-arab md:font-semibold";
    pClass =
      "leading-8 text-md lg:leading-10 font-arab selection:bg-[#e0b472] lg:text-xl";
  }

  return (
    <>
      <div className="bg-black  block md:flex sm:items-center gap-10 relative">
        <div className="autor">
          <Image src={build} width={600} alt="building" className="w-full  object-cover" />
        </div>

        <div className={classes}>
          <h1 className="text-lg text-[#e0b472] lg:text-2xl py-2">
            {t("buildth1")}
          </h1>
          <p className={pClass}>{t("buildt1")}</p>
        </div>
      </div>
    </>
  );
}
