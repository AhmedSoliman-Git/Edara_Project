"use client";

import dynamic from "next/dynamic";

const Lines = dynamic(() => import('./Lines'), { ssr: false });

export default Lines;
