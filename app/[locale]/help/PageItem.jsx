"use client";
import PageBanner from "../../../components/PageBanner";
import img from "../../../public/photos/Page_otherPages/contact.jpg";
import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import Footer from "../../../components/PageContent/Footer/Footer";
import FormSend from "../../../components/FormElements/Form";
import StaticP from "../../../components/TeamMembers/StaticP";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";



export default function PageItem() {
  const t = useTranslations("ContactMain");
  const path = usePathname();
  let BannerHeading = " hover:text-neutral-900 font-Azonix";
  let getTouch = "font-PoppinsM text-lg text-bold";
  let heading1 = "font-bold font-PoppinsE text-lg md:text-3xl xl:text-4xl py-3";
  let trycontent =
    "flex justify-center items-center text-lg lg:text-2xl font-RedGlass border rounded-md";
  let ulClass = "p-4 rounded-md font-PoppinsM";
  let divClass =
    "grid grid-cols-1 xl:grid-cols-2 rounded-2xl xl:p-8 gap-3 font-PoppinsM";
  let liClass = "font-bold text-xl  flex justify-start gap-3 items-center";
  let h2Class = "text-3xl font-PoppinsE my-3 text-center sm:text-start";
  let pClass =
    "text-lg md:text-2xl my-3 font-PoppinsE text-center sm:text-start";
  if (path.includes("ar")) {
    getTouch = "font-arab text-lg text-bold text-right";
    heading1 =
      "font-bold font-arab text-lg md:text-3xl xl:text-4xl py-3 text-right";
    trycontent =
      "flex justify-center items-center text-lg lg:text-2xl font-arab border rounded-md";
    ulClass = "p-4 rounded-md font-arab text-right";
    divClass =
      "grid grid-cols-1 xl:grid-cols-2 rounded-2xl xl:p-8 gap-3 font-arab text-right";
    liClass = "font-bold text-xl  flex justify-end gap-3 items-center";
    h2Class = "text-3xl font-semibold my-3 text-center sm:text-end font-arab";
    pClass = "text-lg font-semibold my-3 text-center sm:text-end font-arab";
  }

  return (
    <section>
      <PageBanner
        img={img}
        text={t("H")}
        id="#myDiv"
        alt="contact-Us"
        classes={BannerHeading}
      />
      <div className="my-20 p-8">
        <StaticP
          additionalText={t("H")}
          text={t("P")}
          classes="text-xl font-PoppinsE w-2/3"
        />
      </div>

      <div
        id="myDiv"
        className="serviceBg p-2 grid xl:grid-cols-2 mt-20 md:p-4 w-full lg:w-[80%] md:gap-11 items-center rounded-tr-none rounded-tl-none m-auto  md:rounded-tr-full md:rounded-tl-full"
      >
        <div >
          <span className={getTouch}>{t("get")}</span>
          <h1 className={heading1}>{t("help")}</h1>
          <div className={divClass}>
            <h1 className={trycontent}>{t("try")}</h1>
            <div>
              <ul className={ulClass +" serviceItemBg"}>
                <li className={liClass}>
                  {t("phones")}
                  <PiPhoneCallBold />
                </li>
                <li className="text-lg font-bold sm:font-normal ">
                  +20 100 975 6488
                </li>
                <li className="text-lg font-bold sm:font-normal">
                  +20 100 6744209
                </li>
                <li className="text-lg font-bold sm:font-normal">
                  +20 122 158 9595
                </li>
                <li className="text-lg font-bold sm:font-normal">
                  +20 111 118 8528
                </li>
                <li className="text-lg font-bold sm:font-normal">
                  048/3352105
                </li>
                <li className="text-lg font-bold sm:font-normal">
                  048/3356968
                </li>
              </ul>
            </div>

            <div>
              <ul className="serviceItemBg p-4 rounded-md">
                <li className={liClass}>
                  {t("email")}
                  <MdOutlineAlternateEmail />
                </li>
                <li className="text-lg text-blue-700">
                  <Link href="mailto:erada.ce@gmail.com">
                    erada.ce@gmail.com{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="serviceItemBg p-4 rounded-md">
                <li className={liClass}>
                  {t("location")}
                  <GrMapLocation />
                </li>{" "}
                <li className="text-lg ">{t("l1")} </li>
                <li className="text-lg ">{t("l2")} </li>
                <li className="text-lg ">{t("l3")} </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className={h2Class}>{t("try")}</h1>
          <p className={pClass}>{t("def")} </p>
          <div>
            <FormSend text={t("send")} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
