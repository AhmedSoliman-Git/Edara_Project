import img from "../../../public/photos/Page_otherPages/About.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import Lines from "../../../components/PageContent/Lines/ssLines";
import Paragraph from "../../../components/TeamMembers/DynamicParagraph";
import TeamMember from "../../../components/TeamMembers/TeamMember";
import Image1 from "../../../public/photos/Page_otherPages/team/EngWeal.jpeg";
import Image2 from "../../../public/photos/Page_otherPages/team/EngMo.jpeg";
import Image4 from "../../../public/photos/Page_otherPages/team/MrDaw.jpeg";
import Image3 from "../../../public/photos/Page_otherPages/team/aYehia.jpeg";
import Footer from "../../../components/PageContent/Footer/Footer";
import PageBanner from "../../../components/PageBanner";

export default function About() {
  let ParagraphText =
    "Get to know the exceptional team at New West Building Company, who drive excellence in construction through industry-leading talent development, core collaboration, innovative solutions.";
  let hClass = "text-5xl font-PlatNomor border-b-2 border-black pb-2";

  return (
    <section>
      <PageBanner
        img={img}
        text="Who Are We ?"
        id="#myDiv"
        alt="About-Us"
        classes=" hover:text-amber-700"
      />
      <Lines />

      <div>
        <div className="my-20 p-8">
          <Paragraph
            additionalText="Meet Our Team"
            Id="myDiv"
            additionalTextClass={hClass}
            text={ParagraphText}
            ON={true}
          />
        </div>

        <div className="Team grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-9 gap-9 px-10 py-20 bg-[#efefef] ">
          <TeamMember
            imgSrc={Image1}
            text="Founder/General manager "
            nickname="Eng"
            name="Wael Belal"
            Mypath="/aboutUs/EngWael"
          />
          <TeamMember
            imgSrc={Image2}
            text="Founder / Director (C.D)"
            nickname="Eng"
            name="Mohamed Elbaghdady"
            Mypath="/aboutUs/EngMohamed"
          />
          <TeamMember
            imgSrc={Image3}
            text="Founder / Director (MEP)"
            nickname="Eng"
            name="Ahmed Yehia"
            Mypath="/aboutUs/EngAhmed"
          />
          <TeamMember
            imgSrc={Image4}
            text="Assistant general manager"
            nickname="MR"
            name="Mohamed Dawoud"
            Mypath="/aboutUs/MrMohamed"
          />
        </div>
      </div>

      <span className=" m-auto text-2xl lg:text-4xl font-PoppinsE text-center my-24 flex justify-center items-center flex-wrap">
        <span>Do you Want to see our Team Experience ..? Click up </span>
        <span>
          <AiOutlinePlus className="m-2 text-3xl cursor-pointer text-orange-500 box-border p-1 border rounded-lg duration-300 hover:bg-emerald-600 hover:text-white " />
        </span>
      </span>

      <Footer />
    </section>
  );
}
