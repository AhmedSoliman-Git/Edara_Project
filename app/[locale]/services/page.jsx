import PageBanner from "../../../components/PageBanner";
import Paragraph from "../../../components/TeamMembers/DynamicParagraph";
import img from "../../../public/photos/Page_otherPages/Projects.jpg";
import ProjectItem from "../../../components/Projects/ProjectItem";
import Footer from "../../../components/PageContent/Footer/Footer";
import image1 from "../../../public/photos/projects/BaniSwef/img2.jpg";
import image2 from "../../../public/photos/projects/Fayoum/img1.jpg";
import image3 from "../../../public/photos/projects/abo_dahb/img1.jpg";
import image4 from "../../../public/photos/projects/menofia/img2.jpg";

export default function Services() {
  const hClass = " hover:text-blue-500";
  let ParagraphText =
    "Our company has extensive experience in executing major government projects across various sectors. We provide comprehensive solutions in wastewater treatment plants, water desalination plants, transformer installations, and electrical networks, in addition to various construction projects. With a team of highly skilled engineers, we ensure the highest standards of quality and safety, delivering projects with efficiency and professionalism.";
  return (
    <>
      <section>
        <PageBanner
          img={img}
          text="Projects"
          id="#projects"
          alt="Projects"
          classes={hClass}
        />

        <div className="my-20 p-8">
          <Paragraph
            additionalText="Projects"
            Id="projects"
            text={ParagraphText}
            ON={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 p-5 bg-neutral-200 gap-5">
          <ProjectItem
            projectImage={image3}
            pText="Arabah Abu El-Dahab Wastewater Treatment Plant"
            headingText="Abo-Eldahb"
            alt="AboDahb"
            link="/services/AboDahb"
          />
          <ProjectItem
            projectImage={image4}
            pText="El-Ghouri Wastewater Treatment Plant - Barka El-Sabaa"
            headingText="El-Ghouri"
            alt="Menofia"
            link="/services/Menofia"
          />
          <ProjectItem
            projectImage={image1}
            pText="Baniharon / ElKom-Ahmar Station Wastewater"
            headingText="Baniharon / ElKom-Ahmar"
            alt="Baniswef"
            link="/services/Baniswef"
          />
          <ProjectItem
            projectImage={image2}
            pText="Northern Wastewater Pumping Station - Hawara Al-Maqtaa"
            headingText=" Qasr Al-Jabali // Hawara Al-Maqtaa "
            alt="Fayoum"
            link="/services/Fayoum"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
