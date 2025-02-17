"use client";

import dynamic from "next/dynamic";

const Lines = dynamic(() => import('./Lines.jsx'), { ssr: false });

export default Lines;
