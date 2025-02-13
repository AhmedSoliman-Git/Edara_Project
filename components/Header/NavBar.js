"use client";
import LocaleSwitcher from "../language-switcher/LocaleSwitcher";
import classes from "./NavBar.module.css";
import { Link } from "../../i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../public/photos/Erada.png";
import { useRef, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";

export default function NavBar() {
  const headerRef = useRef();
  const t = useTranslations("NavBar");
  const path = usePathname();
  const [initailState, setInitalState] = useState(false);
  let sideNav =
    " absolute z-[99999] transition duration-300 -translate-y-full w-full h-screen bg-black text-center flex items-center justify-center";
  let rotateItem =
    "w-8 h-8 font-Bubble font-bold text-xl text-center rounded-full border transition duration-300 bg-neutral-800";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        headerRef.current.style.backgroundColor = "black";
      } else {
        headerRef.current.style.backgroundColor = "transparent";
      }
    };
    if (typeof window !== "undefined") window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function changeClass() {
    setInitalState((prev) => !prev);
  }
  if (initailState) {
    sideNav =
      " fixed translate-y-0 delay-500 z-[99999] transition duration-300 w-full h-screen bg-black text-center flex items-center justify-center";
    rotateItem = rotateItem + " rotate-90";
  }

  return (
    <>
      <header className={classes.header + " font-arab"} ref={headerRef}>
        <div className={classes.letters}>
          <Image src={Logo} width={200} height={200} priority alt="Logo" />
        </div>
        <nav className={classes.nav}>
          <ul
            className={path.includes("ar") ? classes.replaceClass : undefined}
          >
            <li
              className={
                path == "/ar" || path == "/en" ? classes.active : undefined
              }
            >
              <Link href="/">{t("home")}</Link>
            </li>

            <li
              className={
                path.includes("/services") || path.includes("/%D8%A7%D9%84")
                  ? classes.active
                  : undefined
              }
            >
              <Link href="/services">{t("services")}</Link>
            </li>

            <li
              className={
                path.includes("/aboutUs") || path.includes("/%D9%85%D8%A7")
                  ? classes.active
                  : undefined
              }
            >
              <Link href="/aboutUs">{t("about_us")}</Link>
            </li>

            <li
              className={
                path.includes("/Help") || path.includes("/%D9%85%D8%B3")
                  ? classes.active
                  : undefined
              }
            >
              <Link href="/help">{t("help")}</Link>
            </li>
            <li>
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>

        <div
          className="lg:hidden cursor-pointer delay bg-neutral-900 text-white w-[10rem] h-12 rounded-full items-center justify-around flex border"
          onClick={changeClass}
        >
          <p className="mx-3 font-RedGlass">Menu</p>
          <p className={rotateItem}>:</p>
        </div>
      </header>

      {/* //######################################################################## */}
      <div className={sideNav}>
        <nav className="relative">
          <p
            className="text-3xl text-[#e0b472] absolute right-0 -top-20 hover:text-white duration-300 cursor-pointer"
            onClick={changeClass}
          >
            <BsXLg />
          </p>
          <ul
            className={path.includes("ar") ? classes.replaceClass : undefined}
          >
            <li
              className={
                path == "/ar" || path == "/en"
                  ? classes.SideAvtive
                  : classes.Side
              }
            >
              <Link
                onClick={changeClass}
                href="/"
                className="text-4xl md:text-8xl text-[#e0b472] font-Azonix"
              >
                {t("home")}
              </Link>
            </li>

            <li
              className={
                path.includes("/services") || path.includes("/%D8%A7%D9%84")
                  ? classes.SideAvtive
                  : classes.Side
              }
            >
              <Link
                onClick={changeClass}
                href="/services"
                className="text-4xl md:text-8xl text-[#e0b472] font-Azonix "
              >
                {t("services")}
              </Link>
            </li>

            <li
              className={
                path.includes("/aboutUs") || path.includes("/%D9%85%D8%A7")
                  ? classes.SideAvtive
                  : classes.Side
              }
            >
              <Link
                onClick={changeClass}
                href="/aboutUs"
                className="text-4xl md:text-8xl text-[#e0b472] font-Azonix"
              >
                {t("about_us")}
              </Link>
            </li>

            <li
              className={
                path.includes("/Help") || path.includes("/%D9%85%D8%B3")
                  ? classes.SideAvtive
                  : classes.Side
              }
            >
              <Link
                onClick={changeClass}
                href="/help"
                className="text-4xl md:text-8xl text-[#e0b472] font-Azonix"
              >
                {t("help")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
