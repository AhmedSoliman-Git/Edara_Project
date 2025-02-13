import Image from "next/image";
import Paragraph from "./DynamicParagraph";
import { TeamData } from "../TeamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function MemberEx({ params }) {
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo saepe est eum error molestias officia illum ut, non reiciendis? Ipsum illum ratione reiciendis magni accusantium earum corporis quidem nulla.";
  let hClass = "text-5xl font-PlatNomor border-b-2 border-black pb-2";

  return (
    <>
      <Paragraph
        additionalText="Member Description"
        id="myDiv"
        additionalTextClass={hClass}
        text={TeamData[params].description}
        classes="text-xl font-PoppinsE w-2/3"
        ON={true}
      />
      <div className="my-14 lg:w-[90%] xl:w-[80%] m-auto">
        <div className="block md:flex">
          <Image
            src={TeamData[params].MainImg}
            alt={TeamData[params].name}
            className="w-[80%] md:w-[50%] m-auto md:p-0 md:m-0 h-auto object-cover border-[0.2rem] border-[#e0b472]"
          />
          <div className="p-4 mt-5 md:mt-0 bg-stone-100 border-[0.2rem] border-l-[0.2rem] md:border-l-0 border-[#e0b472] w-full">
            <div>
              <p className=" text-lg xl:text-2xl font-Azonix text-red-800 my-2">
                {TeamData[params].title}
              </p>
              <p className="text-lg md:text-3xl xl:text-5xl font-Azonix my-2">
                {TeamData[params].name}
              </p>
            </div>

            <div>
              <h1 className="text-3xl font-PlatNomor my-3">Worked In : </h1>
              <div>
                {TeamData[params].Experience.map((item) => (
                  <div key={item.CompanyName}>
                    <h1 className=" text-[1rem] lg:text-lg xl:text-xl font-bold font-PoppinsM my-2">
                      {item.CompanyName}
                    </h1>
                    <ul>
                      {item.Position.map((positionItem) => {
                        return (
                          <li
                            key={item.title}
                            className=" text-[sm] mb-[0.5rem] md:mb-0 xl:text-lg font-PoppinsM hover:translate-x-4 hover:text-amber-600 duration-200 border-b max-w-max border-black pb-1"
                          >
                            <span>{positionItem.PositionDate}</span>{" "}
                            <span>{positionItem.PostionName}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              <h1 className="text-3xl font-PlatNomor my-3">Education: </h1>
              <ul className="flex justify-start items-center">
                <li className=" text-[1rem] xl:text-lg font-PoppinsM hover:translate-x-4 hover:text-amber-600 duration-200 border-b max-w-max border-black pb-1">
                  {TeamData[params].Education}
                </li>
              </ul>

              <ul className="flex justify-start items-center mt-10">
                <li>
                  {" "}
                  <FaLinkedin className="text-3xl hover:text-blue-600 duration-200 cursor-pointer" />
                </li>
                <li>
                  <FaFacebookF className="text-3xl hover:text-blue-900 duration-200 cursor-pointer" />
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-PlatNomor my-6">Projects : </h1>

          <div>
            <ul>
              {TeamData[params].Experience.map((item) => {
                return item.projects.map((Project) => {
                  return (
                    <li
                      key={Project}
                      className="text-lg font-PoppinsM hover:translate-x-4 hover:text-amber-600 duration-200 border-b max-w-max border-black pb-1"
                    >
                      <span>{Project}</span>{" "}
                    </li>
                  );
                });
              })}
            </ul>
          </div>
          {TeamData[params].Certifications !== null ? (
            <h1 className="text-3xl font-PlatNomor my-6">Certificates :</h1>
          ) : null}
          {TeamData[params].Certifications !== null ? (
            <div className="flex w-full overflow-scroll bg-black gap-4">
              {TeamData[params].Certifications.map((item) => (
                <Image
                  className="w-full h-[40vh] xl:h-[80vh] object-contain"
                  src={item.image1}
                  alt="Certification"
                />
              ))}
            </div>
          ) : (
            <div>
              {TeamData[params].Courses[0] == null ? null : (
                <h1 className="text-3xl font-PlatNomor my-6">Courses : </h1>
              )}
              <ul>
                {TeamData[params].Courses.map((course) => {
                  return (
                    <li className="text-lg font-PoppinsM hover:translate-x-4 hover:text-amber-600 duration-200 border-b max-w-max border-black pb-1">
                      {course}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
