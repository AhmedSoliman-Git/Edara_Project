import PageBanner from "../../../components/PageBanner";
import img from "../../../public/photos/Page_otherPages/Projects.jpg";
import ProjectItem from "../../../components/Projects/ProjectItem";
import Footer from "../../../components/PageContent/Footer/Footer";
import image1 from "../../../public/photos/projects/BaniSwef/img2.jpg";
import image2 from "../../../public/photos/projects/Fayoum/img1.jpg";
import image3 from "../../../public/photos/projects/abo_dahb/img1.jpg";
import image4 from "../../../public/photos/projects/menofia/img2.jpg";
import { useTranslations } from "next-intl";
import StaticP from "../../../components/TeamMembers/StaticP";

export const metadata = {
  title: "Projects",
  description:
    "Erada Construction Engineering has extensive experience in executing major government projects across various sectors. We provide comprehensive solutions in wastewater treatment plants, water desalination plants, transformer installations, and electrical networks",
};

export default function Services() {
  const t = useTranslations("Projects");
  const hClass = " hover:text-blue-500";
  return (
    <>
      <section>
        <PageBanner
          img={img}
          text={t("projectTitle")}
          id="#projects"
          alt="Projects"
          classes={hClass}
        />

        <div className="my-20 p-8">
          <StaticP
            additionalText={t("projectTitle")}
            Id="projects"
            text={t("ProjectText")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-5 gap-5 serviceBg">
          <ProjectItem
            projectImage={image3}
            pText={t("Project1P")}
            headingText={t("Project1H")}
            alt="AboDahb"
            link="/services/AboDahb"
            btn={t("Btn")}
          />
          <ProjectItem
            projectImage={image4}
            pText={t("Project2P")}
            headingText={t("Project2H")}
            alt="Menofia"
            link="/services/Menofia"
            btn={t("Btn")}
          />
          <ProjectItem
            projectImage={image1}
            pText={t("Project3P")}
            headingText={t("Project3H")}
            alt="Baniswef"
            link="/services/Baniswef"
            btn={t("Btn")}
          />
          <ProjectItem
            projectImage={image2}
            pText={t("Project4P")}
            headingText={t("Project4H")}
            alt="Fayoum"
            link="/services/Fayoum"
            btn={t("Btn")}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
