'use client'
import Image from "next/image";
import Logo from "../../../public/photos/Erada.png";
import { Link } from "../../../i18n/routing";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("Footer");
  const date = new Date().getFullYear();
  const path = usePathname();
  let class1 ="py-5 text-3xl font-PlatNomor hover:text-[#e0b472] duration-200" ;
  let class2 = "font-PoppinsE";
  let class3 = "text-lg font-PoppinsE";
  if (path.includes('ar')) {
    class1 = "py-5 text-3xl font-arab hover:text-[#e0b472] duration-200 text-right"
    class2 = "font-arab text-right mt-2"
    class3 = "text-lg font-arab text-center"
  }

  return (
    <footer className=" bg-stone-900 text-white">
      <section className=" grid sm:grid-cols-2 xl:grid-cols-4 py-24 mt-20 gap-8 px-10 text-left ">
        <div>
          <Image src={Logo} width={200} alt="logo" />
          <h2 className={class1}>
            {t("t1")}
          </h2>
          <p className={class2}>{t("t2")} </p>
        </div>
        <div>
          <ul className={class3}>
            <li>
              <h2 className="py-5 text-3xl font-PlatNomor hover:text-[#e0b472] duration-200">
                {t("t3")}
              </h2>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/services">{t("ts4")}</Link>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/services">{t("ts5")}</Link>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/services">{t("ts6")}</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className={class3}>
            <li>
              <h2 className="py-5 text-3xl font-PlatNomor hover:text-[#e0b472] duration-200">
                {t("t8")}
              </h2>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/">{t("ti9")}</Link>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/aboutUs">{t("ti10")}</Link>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/services">{t("ti11")}</Link>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/help">{t("ti12")}</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className={class3}>
            <li>
              <h2 className="py-5 text-3xl font-PlatNomor hover:text-[#e0b472] duration-200">
                {t("t13")}
              </h2>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              {t("t14")}
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
            +20 100 6744209 / +20 100 975 6488
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href='mailto:erada.ce@gmail.com'>erada.ce@gmail.com</Link>
            </li>
          </ul>
        </div>
      </section>
      <p className="text-center"> &copy; All rights reserved to <span className="hover:text-[#e0b472] duration-200">Erada Company</span> 2024 - <span>{date}</span></p>
    </footer>
  );
}
