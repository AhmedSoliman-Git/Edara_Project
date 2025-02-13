import { Link } from "../../i18n/routing";
import Image from "next/image";
export default function ProjectItem({
  projectImage,
  headingText,
  pText,
  link,
  alt,
}) {
  let classText =
    "flex flex-col items-start px-3 pb-10 pt-12 bg-[#ffffff] font-PlatNomor lg:h-[37vh] lg:relative";
  let pP = "text-lg font-PoppinsM text-bold mb-1";

  return (
    <div>
      <Image
        className="w-full h-[40vh] lg:h-[50vh] object-cover"
        src={projectImage}
        alt={alt}
        loading="lazy"
      />
      <div className={classText}>
        <h2 className="text-2xl xl:text-4xl md:text-4xl py-3">{headingText}</h2>
        <p className={pP}>{pText}</p>
        <Link
          href={link}
          className="lg:absolute lg:bottom-10 border border-[#e0b472] duration-300 hover:text-white hover:bg-[#e0b472]  px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
        >
          learn More
        </Link>
      </div>
    </div>
  );
}
