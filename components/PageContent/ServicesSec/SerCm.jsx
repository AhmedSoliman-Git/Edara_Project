"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import image1 from "../../../public/photos/Page Building/arch.jpg";
import image2 from "../../../public/photos/Page Building/arch2.jpg";
import image3 from "../../../public/photos/Page Building/reno.jpg";
import image4 from "../../../public/photos/Page Building/special.jpg";
import image5 from "../../../public/photos/Page Building/cons.jpg";
import image6 from "../../../public/photos/Page Building/electric.jpg";
import image7 from "../../../public/photos/Page Building/mep.jpeg";
import Service from "./Service";

export default function SerCm() {
  const t = useTranslations("SERVICES");
  const path = usePathname();
  let classes = "font-PoppinsE mb-5";
  let hClass = "text-[3rem] text-center font-Azonix";
  let servicesText =
    "flex flex-col items-start px-3 pb-10 pt-12 bg-[#ffffff] font-PlatNomor";
  let pP = "font-PoppinsE text-bold mb-1";

  if (path.includes("ar")) {
    classes = "font-arab mb-5";
    hClass = "text-[3rem] text-center font-arab leading-0";
    servicesText =
      "flex flex-col items-end text-right px-3 pb-10 pt-12 bg-[#ffffff] font-arab";
    pP = "font-arab text-bold mb-1 text-sm ";
  }
  return (
    <section>
      <div className={classes}>
        <h1 className={hClass}>{t("SERH")}</h1>
        <p className="w-1/3 font-bold bg-[#e0b472] h-2 m-auto"></p>
      </div>

      <div className="grid grid-cols-1 p-0 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:p-24 mx-0 md:mx-10 mb-48 bg-[#efefef]">
        <Service
          alt="building drawing"
          srvImg={image1}
          servicesText={servicesText}
          pP={pP}
          t1={t("SER2")}
          t2={t("SER3")}
          t3={t("SER12")}
        />
        <Service
          alt="Renovation"
          srvImg={image2}
          servicesText={servicesText}
          pP={pP}
          t1={t("SER4")}
          t2={t("SER5")}
          t3={t("SER12")}
        />
        <Service
          alt="HVAC"
          srvImg={image3}
          servicesText={servicesText}
          pP={pP}
          t1={t("SER6")}
          t2={t("SER7")}
          t3={t("SER12")}
        />
        <Service
          alt="Special work"
          srvImg={image4}
          servicesText={servicesText}
          pP={pP}
          t1={t("SER8")}
          t2={t("SER9")}
          t3={t("SER12")}
        />
        <Service
          alt="Consulting"
          srvImg={image5}
          servicesText={servicesText}
          pP={pP}
          t1={t("SER10")}
          t2={t("SER11")}
          t3={t("SER12")}
        />
        <Service
          alt="Electrical"
          srvImg={image6}
          servicesText={servicesText}
          pP={pP}
          t1={t("SER13")}
          t2={t("SER14")}
          t3={t("SER12")}
        />
        <Service
          alt="MEP"
          srvImg={image7}
          servicesText={servicesText}
          pP={pP}
          t1={t("SER15")}
          t2={t("SER16")}
          t3={t("SER12")}
        />
      </div>
    </section>
  );
}
