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
      <div className="mt-56 gap-9 flex items-center p-5">
        <div className="w-[50rem]">
          <Image
            src={initialImage}
            className="h-[80vh] object-cover border border-[#e0b472] p-3"
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
                  className="h-[20vh] object-cover"
                  src={img}
                  alt="item-image"
                  onClick={() => changeItem(img)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 border border-[#e0b472] p-5 rounded-xl">
          <h1 className="text-3xl font-PoppinsM lg:text-xl">
            {Projects[data].stationName}
          </h1>
          <p className="text-lg font-PoppinsE my-3">
            {Projects[data].description.title}
          </p>

          {Projects[data].description.title == null ? null : (
            <h1 className="text-3xl font-PoppinsM">Description : </h1>
          )}
          {Projects[data].description.DesignCapacity == null ? null : (
            <h1 className="text-3xl font-PoppinsM">Design Capacity : </h1>
          )}
          <p className="text-lg font-PoppinsE my-3">
            {Projects[data].description.DesignCapacity}
          </p>

          {Projects[data].description.TotalCost == null ? null : (
            <h1 className="text-3xl font-PoppinsM">Cost Etamition : </h1>
          )}
          <p className="text-lg font-PoppinsE my-3">
            {Projects[data].description.TotalCost}
          </p>
          <ul>
            <h1 className="text-3xl font-PoppinsM">Our Work : </h1>
            {Projects[data].description.workInIt.map((item, itemIndex) => {
              return (
                <li key={itemIndex}>
                  <p className="text-lg font-PoppinsM py-1 ">🔹{item}</p>
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
                className="px-8 py-2 text-lg font-PoppinsM bg-neutral-900 text-white mx-3 border-4 border-[#e0b472] hover:bg-neutral-800"
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
