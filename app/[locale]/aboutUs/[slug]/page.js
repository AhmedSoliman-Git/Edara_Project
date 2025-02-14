import { notFound } from "next/navigation";
import PageBanner from "../../../../components/PageBanner";
import Img from "../../../../public/photos/Page_otherPages/Experience.jpg";
import MemberEx from "../../../../components/TeamMembers/MemberEx";
import Footer from "../../../../components/PageContent/Footer/Footer";
import { useTranslations } from "next-intl";
export default  function TeamMemberData({ params }) {
  let content;
  let BannerHeading = " hover:text-[#e0b472]";
  const t = useTranslations("About");
  const slugParam =  params;
  if (
    slugParam.slug == "EngWael" ||
    slugParam.slug == "EngMohamed" ||
    slugParam.slug == "EngAhmed" ||
    slugParam.slug == "MrMohamed"
  ) {
    content = (
      <section>
        <PageBanner
          img={Img}
          text={t("Experience")}
          id="#myDiv"
          alt="Experience"
          classes={BannerHeading}
        />
        <div className="my-20 p-8">
          <MemberEx params={slugParam.slug} />
        </div>
        <Footer />
      </section>
    );
  } else {
    content = notFound();
  }

  return (
    <>
      <div>{content}</div>
    </>
  );
}
