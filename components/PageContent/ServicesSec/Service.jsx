import Image from "next/image";
import { Link } from "../../../i18n/routing";

export default function Service({ srvImg, servicesText, pP, t1, t2, t3, alt }) {
  return (
    <div>
      <Image src={srvImg} alt={alt} loading="lazy" />
      <div className={servicesText}>
        <h2 className="text-2xl md:text-4xl py-3">{t1}</h2>
        <p className={pP}>{t2}</p>
        <Link
          href="/help"
          className="btn px-7 py-3 w-full md:w-1/2 text-center font-bold mt-3 text-sm"
        >
          {t3}
        </Link>
      </div>
    </div>
  );
}
