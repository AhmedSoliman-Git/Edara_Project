"use client";
import Image from "next/image";
import Logo from "../../../public/photos/Erada.png";
import { Link } from "../../../i18n/routing";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("Footer");
  const date = new Date().getFullYear();
  const path = usePathname();
  let class1 =
    "py-5 text-lg lg:text-2xl font-PlatNomor hover:text-[#e0b472] duration-200";
  let class2 = "font-PoppinsE";
  let class3 = "text-[0.9rem] font-PoppinsE text-left ";
  let order1;
  let order2 ;
  let order3 ;
  let imgMargin;


  if (path.includes("ar")) {
    class1 =
      "py-5 text-lg lg:text-2xl font-arab hover:text-[#e0b472] duration-200 text-right";
    class2 = "font-arab text-sm text-right mt-2";
    class3 = "text-[0.9rem] font-arab text-right";
    order1 ="lg:order-1";
    order2 = "lg:order-2"
    order3 = "lg:order-3"
    imgMargin = "ml-auto"

  }

  return (
    <footer className=" bg-stone-900 text-white">
      <section className=" grid sm:grid-cols-2 xl:grid-cols-3 py-12 mt-20 gap-8 px-10">
        <div className={order3}>
          <Image src={Logo} width={100} alt="logo" className={imgMargin}/>
          <h2 className={class1}>{t("t1")}</h2>
          <p className={class2}>{t("t2")} </p>
        </div>
        <div className={order2}>
          <ul className={class3}>
            <li>
              <h2 className="py-5 text-xl font-PlatNomor hover:text-[#e0b472] duration-200">
                {t("t8")}
              </h2>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="/">{t("ti9")}</Link>
            </li>
            <li className=" py-2 hover:text-[#e0b472] duration-200">
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

        <div className={order1}>
          <ul className={class3}>
            <li>
              <h2 className="py-5 text-xl font-PlatNomor hover:text-[#e0b472] duration-200">
                {t("t13")}
              </h2>
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              +20 122 158 9595 / 048-3352105 / 048-3356968{" "}
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              +20 100 674 4209 / +20 100 975 6488 / +20 111 118 8528
            </li>
            <li className="py-2 hover:text-[#e0b472] duration-200">
              <Link href="mailto:erada.ce@gmail.com">erada.ce@gmail.com</Link>
            </li>
          </ul>
        </div>
      </section>
      <p className="text-center font-PoppinsE">
        {" "}
        &copy; All rights reserved to{" "}
        <span className="text-[#e0b472]">
          Erada Company
        </span>{" "}
        2024 - <span>{date}</span>
      </p>
    </footer>
  );
}
