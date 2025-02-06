'use client'
import Image from "next/image";
import img from "../../../public/photos/Page_otherPages/About.jpg";
import { Link } from "../../../i18n/routing";
import Lines from "../../../components/PageContent/Lines/ssLines";
import Paragraph from "./DynamicParagraph";


export default function About() {
  let main_class = "font-Bubble";
  let ParagraphText = "Get to know the exceptional team at New West Building Company, who drive excellence in construction through industry-leading talent development, core collaboration, innovative solutions."


  return (
    <section>
      <div className="imgContainer relative w-full bg-black ">
        <Image src={img} alt="About us" className="aboutImg" />
        <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <Link href="#myDiv" className="heading font-Bubble">
            Who are We ?
          </Link>
        </h1>
      </div>
      <Lines />
      <div id="myDiv" className=" my-20 p-8">
        <div className="flex justify-center items-center gap-24">
          <h2 className="text-5xl font-PlatNomor border-b-2 border-black pb-2">Meet Our Team</h2>
          <Paragraph  text={ParagraphText} classes='text-xl font-PoppinsE w-2/3'/> 
        </div>
      </div>
      
    </section>
  );
}
