import PageBanner from "../../../components/PageBanner";
import img from "../../../public/photos/Page_otherPages/contact.jpg";
import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import Paragraph from "../../../components/TeamMembers/DynamicParagraph";
import Footer from "../../../components/PageContent/Footer/Footer";
import FormSend from "../../../components/FormElements/Form";

export default function Help() {
  let ParagraphText =
    "Get to know the exceptional team at New West Building Company, who drive excellence in construction through industry-leading talent development, core collaboration, innovative solutions.";
  let hClass = "text-5xl font-PlatNomor border-b-2 border-black pb-2";
  let BannerHeading = " hover:text-neutral-900 font-Azonix";
  return (
    <section>
      <PageBanner
        img={img}
        text="Contact Us"
        id="#myDiv"
        alt="contact-Us"
        classes={BannerHeading}
      />
      <div className="mt-24">
        {" "}
        <Paragraph
          additionalText="Contact Us"
          text={ParagraphText}
          classes="text-xl font-PoppinsE w-2/3"
          ON={false}
        />
      </div>

      <div
        id="myDiv"
        className="grid grid-cols-2 my-36 p-10 w-[80%] gap-11 items-center m-auto bg-neutral-200 rounded-tr-full rounded-tl-full"
      >
        <div>
          <span className="font-PoppinsE text-lg text-bold py-3">
            Get in Touch
          </span>
          <h1 className="font-PoppinsE text-4xl py-3">
            We are always ready to Help you and answer your questions
          </h1>
          <div className="grid grid-cols-2 rounded-2xl p-16 gap-3">
            <h1 className="flex justify-center items-center text-2xl font-RedGlass border rounded-md">
              Try to Contact us
            </h1>
            <div className="text-left">
              <ul className="bg-slate-100 p-4 rounded-md">
                <li className="text-xl font-PoppinsE flex justify-start gap-3 items-center">
                  Our Phones
                  <PiPhoneCallBold />
                </li>
                <li className="text-lg font-PoppinsE">+20 100 975 6488</li>
                <li className="text-lg font-PoppinsE">+20 100 6744209</li>
                <li className="text-lg font-PoppinsE">+20 122 158 9595</li>
                <li className="text-lg font-PoppinsE">048/3352105</li>
                <li className="text-lg font-PoppinsE">048/3356968</li>
              </ul>
            </div>

            <div className="text-left">
              <ul className="bg-slate-100 p-4 rounded-md">
                <li className="text-xl font-PoppinsE flex justify-start gap-3 items-center">
                  Our Emails
                  <MdOutlineAlternateEmail />
                </li>
                <li className="text-lg font-PoppinsE text-blue-700">
                  <Link href="mailto:erada.ce@gmail.com">
                    erada.ce@gmail.com{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <ul className="bg-slate-100 p-4 rounded-md">
                <li className="text-xl font-PoppinsE flex justify-start gap-3 items-center">
                  Location
                  <GrMapLocation />
                </li>{" "}
                <li className="text-lg font-PoppinsE">
                  Menofia / Sirs-El-layan{" "}
                </li>
                <li className="text-lg font-PoppinsE">
                  Ali-Ebn-AbiTaleb Street
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-PoppinsM my-3">Get In Touch</h1>
          <p className="font-PoppinsE font-2xl my-3">
            Define your goals and indentity areas ..
          </p>
          <div>
            <FormSend />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
