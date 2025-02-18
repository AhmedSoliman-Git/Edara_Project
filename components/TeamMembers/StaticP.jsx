'use client'
import { usePathname } from "next/navigation";  

export default function StaticP({ text, additionalText, Id,}) {
  const path = usePathname();
  let divClass = "block md:flex justify-center items-start gap-8"
  let heading = "text-2xl w-full md:text-3xl lg:text-5xl text-center md:w-[31rem] lg:w-max font-PlatNomor border-b-2 border-black pb-2"
  let pclass = " w-full text-center md:text-start mt-5 text-[1rem] md:text-start md:mt-0 md:text-[1rem] lg:text-lg font-PoppinsE md:w-full lg:w-2/3"
  if(path.includes('ar')) {
    divClass = "block md:flex flex-row-reverse justify-center sm:items-start gap-8"
    heading = "text-2xl w-full md:text-3xl lg:text-5xl text-center md:w-[31rem] lg:w-max font-arab border-b-2 border-black pb-2"
    pclass = " w-full text-center md:text-end mt-5 text-[1rem] md:text-end md:mt-0 md:text-[1rem] lg:text-lg font-arab md:w-full lg:w-2/3"
  }
  return (
    <div className={divClass} id={Id}>
      {additionalText ? (
        <h1 className= {heading}>
          {additionalText}
        </h1>
      ) : null}
      <p className={pclass}>
        {text}
      </p>
    </div>
  );
}
