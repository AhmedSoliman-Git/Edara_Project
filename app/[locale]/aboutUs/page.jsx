import img from "../../../public/photos/Page_otherPages/About.jpg";
import Lines from "../../../components/PageContent/Lines/MainLines";
import TeamMember from "../../../components/TeamMembers/TeamMember";
import Image1 from "../../../public/photos/Page_otherPages/team/EngWeal.jpeg";
import Image2 from "../../../public/photos/Page_otherPages/team/EngMo.jpeg";
import Image3 from "../../../public/photos/Page_otherPages/team/aYehia.jpeg";
import Image4 from "../../../public/photos/Page_otherPages/team/MrDaw.jpg";

import Footer from "../../../components/PageContent/Footer/Footer";
import PageBanner from "../../../components/PageBanner";
import StaticP from "../../../components/TeamMembers/StaticP";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About-Us",
  description:
    "Erada Construction Engineering boasts a skilled team with years of expertise, delivering high-quality residential and commercial projects with precision and innovation",
};

export default function About() {
  let hClass = "text-5xl font-PlatNomor border-b-2 border-black pb-2";
  const t = useTranslations("About");

  return (
    <section>
      <PageBanner
        img={img}
        text={t("AboutBanner")}
        id="#myDiv"
        alt="About-Us"
        classes=" hover:text-amber-700"
      />
      <Lines />

      <div>
        <div className="my-20 p-8">
          <StaticP
            additionalText={t("Ttext")}
            Id="myDiv"
            additionalTextClass={hClass}
            text={t("Ptext")}
          />
        </div>

        <div className="Team grid m-auto w-[90%] sm:w-full sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 p-9 gap-9 px-10 py-20 serviceBg ">
          <TeamMember
            imgSrc={Image1}
            text={t("Gm")}
            nickname={t("eng")}
            name={t("Wael")}
            Mypath="/aboutUs/EngWael"
          />
          <TeamMember
            imgSrc={Image2}
            text={t("Dm")}
            nickname={t("eng")}
            name={t("Elbog")}
            Mypath="/aboutUs/EngMohamed"
          />
          <TeamMember
            imgSrc={Image3}
            text={t("Me")}
            nickname={t("eng")}
            name={t("Ay")}
            Mypath="/aboutUs/EngAhmed"
          />
          <TeamMember
            imgSrc={Image4}
            text={t("Ag")}
            nickname={t("mr")}
            name={t("Md")}
            Mypath="/aboutUs/MrMohamed"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}
