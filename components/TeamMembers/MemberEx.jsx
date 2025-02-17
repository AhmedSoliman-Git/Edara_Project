"use client";
import Image from "next/image";
import TeamData from "../TeamData";
import StaticP from "./StaticP";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function MemberEx({ params }) {
  let hClass = "text-5xl font-PlatNomor border-b-2 border-black pb-2";
  const t = useTranslations("Bogdady");
  const TeamDetailsData = TeamData();
  const path = usePathname();
  let divClass =
    "p-4 mt-5 md:mt-0 bg-stone-100 border-[0.2rem] font-PlatNomor border-l-[0.2rem] md:border-l-0 border-[#e0b472] w-full";
  let p1 = "text-lg xl:text-2xl font-Azonix text-red-800 my-2";
  let p2 = "text-lg md:text-3xl xl:text-5xl font-Azonix my-2";
  let myh1 = " text-[1rem] lg:text-lg xl:text-xl font-bold font-PoppinsM my-2";
  let hoverText =
    "text-[sm] mb-[0.5rem] md:mb-0 xl:text-lg font-PoppinsM hover:translate-x-4 hover:text-amber-600 duration-200 border-b max-w-max border-black pb-1";
  let MainDiv = "my-14 lg:w-[90%] xl:w-[80%] m-auto text-left";
  if (path.includes("ar")) {
    p1 = "text-lg xl:text-2xl font-arab text-right font-bold text-red-800 my-2";
    p2 = "text-lg md:text-3xl xl:text-5xl font-arab font-bold my-2";
    myh1 = "text-[1rem] lg:text-lg xl:text-xl font-bold font-arab my-2";
    hoverText =
      " text-[sm] mb-[0.5rem] md:mb-0 xl:text-lg font-arab hover:-translate-x-4 hover:text-amber-600 max-w-max ml-auto duration-200 border-b border-black pb-1";
    MainDiv = "my-14 lg:w-[90%] xl:w-[80%] m-auto text-right font-arab";
  }

  return (
    <>
      <StaticP
        additionalText={t("H")}
        id="myDiv"
        additionalTextClass={hClass}
        text={TeamDetailsData[params].description}
      />

      <div className={MainDiv}>
        <div className="block md:flex">
          <Image
            src={TeamDetailsData[params].MainImg}
            alt={TeamDetailsData[params].name}
            className="w-[80%] md:w-[50%] m-auto md:p-0 md:m-0 h-auto object-cover border-[0.2rem] border-[#e0b472]"
          />
          <div className={divClass}>
            <div>
              <p className={p1}>{TeamDetailsData[params].title}</p>
              <p className={p2}>{TeamDetailsData[params].name}</p>
            </div>

            <div>
              <h1 className="text-3xl my-3">{t("work")}</h1>
              <div>
                {TeamDetailsData[params].Experience.map((item, Index) => (
                  <div key={Index}>
                    <h1 className={myh1}>{item.CompanyName}</h1>
                    <ul key={Index}>
                      {item.Position.map((positionItem, itemIndex) => {
                        return (
                          <li key={itemIndex} className={hoverText}>
                            <span>{positionItem.PositionDate}</span>{" "}
                            <span>{positionItem.PostionName}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              <h1 className="text-3xl my-3">{t("Edu")}</h1>
              <ul className="flex justify-start items-center">
                <li className={hoverText}>
                  {TeamDetailsData[params].Education}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          {TeamDetailsData[params].Experience[0].projects[0] !== null ? (
            <h1 className="text-3xl my-6">{t("Projects")}</h1>
          ) : null}

          <div>
            <ul>
              {TeamDetailsData[params].Experience.map((item) => {
                return item.projects.map((Project) => {
                  return (
                    <li key={Project} className={hoverText}>
                      <span>{Project}</span>{" "}
                    </li>
                  );
                });
              })}
            </ul>
          </div>

          {TeamDetailsData[params].Certifications !== null ? (
            <h1 className="text-3xl my-6">{t("Certificates")}</h1>
          ) : null}
          {TeamDetailsData[params].Certifications !== null ? (
            <div className="flex w-full overflow-scroll bg-black gap-4">
              {TeamDetailsData[params].Certifications.map((item, imgIndex) => (
                <Image
                  key={imgIndex}
                  className="w-full h-[40vh] xl:h-[80vh] object-contain"
                  src={item.image1}
                  alt="Certification"
                />
              ))}
            </div>
          ) : (
            <div>
              {TeamDetailsData[params].Courses[0] == null ? null : (
                <h1 className="text-3xl my-6">{t("Course")}</h1>
              )}
              <ul>
                {TeamDetailsData[params].Courses.map((course) => {
                  return (
                    <li key={course} className={hoverText}>
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
