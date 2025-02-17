'use client'
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "../../i18n/routing";
import { usePathname } from "next/navigation";
export default function TeamMember({ imgSrc, text, nickname, name, Mypath }) {
  const path = usePathname();
  let sp = "font-bold font-Azonix";
  let hName = "font-bold text-2xl font-PlatNomor";
  let pText = "text-xl font-PoppinsE";
  let dClass = "px-2 py-3 bg-white"
  let dRev = "flex items-center justify-between"
  if (path.includes("ar")) {
    sp = "font-bold font-arab";
    hName = "font-bold text-2xl font-arab";
    pText = "text-xl font-arab text-right";
    dClass = dClass + " text-right" ;
    dRev = "flex-row-reverse items-center justify-between"
  }

  return (
    <div className="border-[0.3rem] border-[#e0b472]">
      <Image
        className="w-full h-[50vh] md:h-[50vh] lg:h-[80vh] object-cover"
        width={500}
        src={imgSrc}
        alt="Team member"
      />
      <div className={dClass}>
        <span className={sp}>{nickname}</span>
        <h2 className={hName}>{name}</h2>
        <div className={dRev}>
          <p className={pText + " h-[7vh] md:h-[4vh]"}>{text}</p>
          <Link href={Mypath} alt="CLICK HERE">
            <AiOutlinePlus className="m-2 text-3xl cursor-pointer text-orange-500 p-1 border rounded-lg duration-300 hover:bg-black hover:text-white "/>
          </Link>
        </div>
      </div>
    </div>
  );
}
