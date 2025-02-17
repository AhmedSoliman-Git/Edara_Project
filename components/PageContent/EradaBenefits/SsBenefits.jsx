"use client";

import dynamic from "next/dynamic";
const Benefits = dynamic(() => import('./Benefits'), { ssr: false });
export default Benefits;