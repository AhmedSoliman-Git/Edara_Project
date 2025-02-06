import Image from "next/image";
// import img from "../../../public/photos/Services/banner.png";
export default function Services() {
  return (
    <main>
      <div className="relative text-center text-[3.75rem] h-full font">
        {/* <Image src={img} className="banner" alt="ServicesBanner" /> */}
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">#SERVICES</p>
      </div>
    </main>
  );
}
