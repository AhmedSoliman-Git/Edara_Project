"use client";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/routing";
import { usePathname } from "next/navigation";

export default function contact() {
  const t = useTranslations("Contact");
  const path = usePathname();
  let main_class = "text-3xl font-PlatNomor py-6";
  let sMain_class ="border hover:bg-[#e0b472] hover:text-white duration-300 px-7 text-xl py-5 w-full md:w-1/2 text-center font-Azonix";
  let p_class = "text-xl mb-12 font-PoppinsE"
  if (path.includes("ar")) {
    main_class = "text-3xl font-arab py-6 text-right";
    sMain_class ="border hover:bg-[#e0b472] hover:text-white duration-300 px-7 text-xl py-5 w-full md:w-1/2 text-center font-arab text-right";
    p_class = "text-xl mb-12 font-arab text-right"
  }
  return (
    <div className="p-10 w-full lg:w-1/2 lg:m-auto border my-24">
      <h1 className={main_class}>{t("c1")}</h1>
      <p className={p_class}>{t("c2")}</p>
      <Link href="/help" className={sMain_class}>
        {t("c3")}
      </Link>
    </div>
  );
}
