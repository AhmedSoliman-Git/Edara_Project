import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "../../i18n/routing";

export default function TeamMember({ imgSrc, text, nickname, name, Mypath }) {
  // .teamImg {
  //   width: 100%;
  //   height: 80vh;
  //   object-fit: cover;
  // }
  return (
    <div className="border-[0.3rem] border-[#e0b472]">
      <Image
        className="w-full h-[50vh] md:h-[50vh] lg:h-[80vh] object-cover"
        width={500}
        src={imgSrc}
        alt="Team member"
      />
      <div className="px-2 py-3 bg-white">
        <span className="font-bold font-Azonix">{nickname} : </span>
        <h2 className="font-bold text-2xl font-PlatNomor">{name}</h2>
        <div className="flex items-center justify-between">
          <p className="text-xl font-PoppinsE">{text}</p>
          <Link href={Mypath} alt="CLICK HERE">
            <AiOutlinePlus className="m-2 text-3xl cursor-pointer text-orange-500 box-border p-1 border rounded-lg duration-300 hover:bg-black hover:text-white " />
          </Link>
        </div>
      </div>
    </div>
  );
}
