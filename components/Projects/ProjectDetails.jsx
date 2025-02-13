"use client";
import Image from "next/image";
import { Projects } from "../ProjectData";
import { useState } from "react";
import { Link } from "../../i18n/routing";

export default function ProjectDetails({ data }) {
  const [initialImage, setImage] = useState(Projects[data].images[0]);
  function changeItem(value) {
    setImage(value);
  }
  let ProjectTitles = ["Menofia", "Fayoum", "AboDahb", "Baniswef"];
  let ProjectLinks = [
    "/services/Menofia",
    "/services/Fayoum",
    "/services/AboDahb",
    "/services/Baniswef",
  ];

  ProjectTitles = ProjectTitles.filter((el) => el !== data);
  ProjectLinks = ProjectLinks.filter((el) => !el.includes(data));
  return (
    <>
      <div className="mt-20 gap-9 block lg:flex items-center p-5">
        <div className="w-full lg:w-[50rem]">
          <Image
            src={initialImage}
            className="h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover border border-[#e0b472] p-3"
            alt="item-image"
          />
          <div className="flex justify-between my-5 items-center gap-2">
            {Projects[data].images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="border border-[#e0b472] p-1 cursor-pointer"
              >
                <Image
                  width={500}
                  height={200}
                  className="h-[15vh] lg:h-[20vh] object-cover"
                  src={img}
                  alt="item-image"
                  onClick={() => changeItem(img)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 border border-[#e0b472] p-5 rounded-xl">
          <h1 className="text-lg text-font-PoppinsM lg:text-xl xl:text-3xl">
            {Projects[data].stationName}
          </h1>

          {Projects[data].description.DesignCapacity == null ? null : (
            <h1 className="xl:text-3xl font-PoppinsM md:text-lg">
              Design Capacity :{" "}
            </h1>
          )}
          <p className="text-[1rem] font-PoppinsE my-3 lg:text-[1rem]">
            {Projects[data].description.DesignCapacity}
          </p>

          {Projects[data].description.TotalCost == null ? null : (
            <h1 className="xl:text-3xl font-PoppinsM md:text-lg">
              Cost Etamition :{" "}
            </h1>
          )}
          <p className="text-[1rem] font-PoppinsE my-3 lg:text-[1rem]">
            {Projects[data].description.TotalCost}
          </p>
          <ul>
            <h1 className="xl:text-3xl font-PoppinsM md:text-lg">Our Work : </h1>
            {Projects[data].description.workInIt.map((item, itemIndex) => {
              return (
                <li key={itemIndex}>
                  <p className="text-[0.9rem] lg:text-[1rem]xl:text-lg font-PoppinsM py-1 ">
                    🔹{item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        {ProjectTitles.map((el, elIndex) => {
          return (
            <p key={elIndex}>
              <Link
                className=" px-4 py-1 md:px-8 md:py-2 md:text-lg font-PoppinsM bg-neutral-900 text-white mx-3 border-4 border-[#e0b472] hover:bg-neutral-800"
                href={ProjectLinks[elIndex]}
              >
                {el}
              </Link>
            </p>
          );
        })}
      </div>
    </>
  );
}
