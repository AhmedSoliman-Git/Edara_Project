"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "../../../i18n/routing";
import image1 from "../../../public/photos/Page Building/arch.jpg";
import image2 from "../../../public/photos/Page Building/arch2.jpg";
import image3 from "../../../public/photos/Page Building/reno.jpg";
import image4 from "../../../public/photos/Page Building/special.jpg";
import image5 from "../../../public/photos/Page Building/cons.jpg";
import image6 from "../../../public/photos/Page Building/electric.jpg";
import image7 from "../../../public/photos/Page Building/mep.jpeg";

export default function serCm() {
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

      <div className="grid grid-cols-1 p-4 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:p-24 mx-10 mb-48 bg-[#efefef]">
        <div>
          <Image src={image1} alt="building drawing" />
          <div className={servicesText}>
            <h2 className="text-2xl md:text-4xl py-3">{t("SER2")}</h2>
            <p className={pP}>{t("SER3")}</p>
            <Link
              href="/help"
              className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
            >
              {t("SER12")}
            </Link>
          </div>
        </div>

        <div>
          <Image src={image3} alt="Renovation" />
          <div className={servicesText}>
            <h2 className="text-2xl md:text-4xl py-3">{t("SER4")}</h2>
            <p className={pP}>{t("SER5")}</p>
            <Link
              href="/help"
              className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
            >
              {t("SER12")}
            </Link>
          </div>
        </div>
        <div>
          <Image src={image2} alt="HVAC" />
          <div className={servicesText}>
            <h2 className="text-2xl md:text-4xl py-3">{t("SER6")}</h2>
            <p className={pP}>{t("SER7")}</p>
            <Link
              href="/help"
              className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
            >
              {t("SER12")}
            </Link>
          </div>
        </div>

        <div>
          <Image src={image4} alt="Special work" />
          <div className={servicesText}>
            <h2 className="text-2xl md:text-4xl py-3">{t("SER8")}</h2>
            <p className={pP}>{t("SER9")}</p>
            <Link
              href="/help"
              className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
            >
              {t("SER12")}
            </Link>
          </div>
        </div>

        <div>
          <Image src={image5} alt="Consulting" />
          <div className={servicesText}>
            <h2 className="text-2xl md:text-4xl py-3">{t("SER10")}</h2>
            <p className={pP}>{t("SER11")}</p>
            <Link
              href="/help"
              className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
            >
              {t("SER12")}
            </Link>
          </div>
        </div>

        <div>
          <Image src={image6} alt="Electrical" />
          <div className={servicesText}>
            <h2 className="text-2xl md:text-4xl py-3">{t("SER13")}</h2>
            <p className={pP}>{t("SER14")}</p>
            <Link
              href="/help"
              className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
            >
              {t("SER12")}
            </Link>
          </div>
        </div>

        <div>
          <Image src={image7} alt="MEP" />
          <div className={servicesText}>
            <h2 className="text-2xl md:text-4xl py-3">{t("SER15")}</h2>
            <p className={pP}>{t("SER16")}</p>
            <Link
              href="/help"
              className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
            >
              {t("SER12")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
