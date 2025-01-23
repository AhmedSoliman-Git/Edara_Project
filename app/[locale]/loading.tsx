import Image from "next/image";
import logo from '../../public/photos/logo_transparent.png'
export default function Loading() {
  return <main className="LoadingPage">
    <div className="loadingImgDev">
      <Image src={logo} fill alt="Construction image"/>
      <p className="loadingLine"></p>
    </div>
  </main>;
}
