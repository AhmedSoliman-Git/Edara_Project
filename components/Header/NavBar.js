"use client";
import LocaleSwitcher from "../language-switcher/LocaleSwitcher";
import classes from "./NavBar.module.css";
import { Link } from "../../i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from '../../public/photos/Erada.png'
import { useRef,useEffect  } from "react";





export default function NavBar() {
  const headerRef = useRef();
  const t = useTranslations("NavBar");
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        headerRef.current.style.backgroundColor = "black";
      } else {
        headerRef.current.style.backgroundColor = "transparent"; // يرجع اللون الأصلي
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // تنظيف الحدث
    };
  }, []);


  return (
    <>


      <header className={classes.header} ref={headerRef}>

        <div className={classes.letters}>
          <Image src={Logo} priority alt="Logo"/>
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

      </header>

      {/* <div className={classes.sideNav}>
        <nav>
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
          </ul>
        </nav>
      </div> */}
    </>
  );
}
