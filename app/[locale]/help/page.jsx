import PageBanner from "../../../components/PageBanner";
import img from "../../../public/photos/Page_otherPages/contact.jpg";
import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
// import Paragraph from "../../../components/TeamMembers/DynamicParagraph";
import Footer from "../../../components/PageContent/Footer/Footer";
import FormSend from "../../../components/FormElements/Form";
import StaticP from "../../../components/TeamMembers/StaticP";

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
      <div className="my-20 p-8">
        <StaticP
          additionalText="Contact Us"
          text={ParagraphText}
          classes="text-xl font-PoppinsE w-2/3"
        />
      </div>

      <div
        id="myDiv"
        className="p-2 grid xl:grid-cols-2 mt-20 md:p-4 w-full lg:w-[80%] md:gap-11 items-center rounded-tr-none rounded-tl-none m-auto bg-neutral-200 md:rounded-tr-full md:rounded-tl-full"
      >
        <div>
          <span className="font-PoppinsM text-lg text-bold">Get in Touch</span>
          <h1 className="font-bold font-PoppinsE text-lg md:text-3xl xl:text-4xl py-3">
            We are always ready to Help you and answer your questions
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 rounded-2xl xl:p-8 gap-3">
            <h1 className="flex justify-center items-center text-lg lg:text-2xl font-RedGlass border rounded-md">
              Try to Contact us
            </h1>
            <div className="text-left">
              <ul className="bg-slate-100 p-4 rounded-md">
                <li className="font-semibold text-lg md:text-xl font-PoppinsE flex justify-start gap-3 items-center">
                  Our Phones
                  <PiPhoneCallBold />
                </li>
                <li className="text-lg font-bold sm:font-normal font-PoppinsE">
                  +20 100 975 6488
                </li>
                <li className="text-lg font-bold sm:font-normal font-PoppinsE">
                  +20 100 6744209
                </li>
                <li className="text-lg font-bold sm:font-normal font-PoppinsE">
                  +20 122 158 9595
                </li>
                <li className="text-lg font-bold sm:font-normal font-PoppinsE">
                  048/3352105
                </li>
                <li className="text-lg font-bold sm:font-normal font-PoppinsE">
                  048/3356968
                </li>
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
          <h1 className="text-3xl font-PoppinsM my-3 text-center sm:text-start">
            Get In Touch
          </h1>
          <p className="font-PoppinsE font-2xl my-3 text-center sm:text-start">
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
