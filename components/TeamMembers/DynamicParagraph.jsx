"use client";
import dynamic from "next/dynamic";
const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });

export default Paragraph;
