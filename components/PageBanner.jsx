'use client'
import Image from "next/image";
import { Link } from "../i18n/routing";
import { usePathname } from "next/navigation";
export default function PageBanner({ img, text, id, alt, classes }) {
  let BannerHeading =
    " w-full heading text-5xl md:text-6xl lg:text-8xl font-Azonix";
  const path = usePathname();
  if (path.includes("ar")) {
    BannerHeading =
      " w-full heading text-5xl md:text-6xl lg:text-8xl font-arab";
  }

  return (
    <div className="imgContainer relative w-full bg-black ">
      <Image priority src={img} alt={alt} className="aboutImg" />
      <h1 className="absolute w-full text-center top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 hover:text-blue-400 duration-300">
        <Link href={id} className={BannerHeading + classes}>
          {text}
        </Link>
      </h1>
    </div>
  );
}
