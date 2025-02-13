import PageBanner from "../../../../components/PageBanner";
import Footer from "../../../../components/PageContent/Footer/Footer";
import ProjectDetails from "../../../../components/Projects/ProjectDetails";
import img from "../../../../public/photos/Page_otherPages/Projects.jpg";
export default async function page({ params }) {
  const hClass = " hover:text-blue-500";
  const data = await params.slug;
  return (
    <section>
        <PageBanner
          img={img}
          text="Projects"
          id="#projects"
          alt="Projects"
          classes={hClass}
        />
      <ProjectDetails data={data} />
      <Footer />
    </section>
  );
}
