'use client'
import { routing } from "../../i18n/routing";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import classes from "../Header/NavBar.module.css";
import Image from "next/image";
import sun from '../../public/photos/sun.png'
import moon from '../../public/photos/moon.png'

import { useState } from "react";
export default function LocaleSwitcher() {
  const locale = useLocale();
  const [initalState , setInitalState] = useState(true);
  const switchTheme =()=>{
    setInitalState(prev=>!prev)
  }
  
  return (

      <LocaleSwitcherSelect defaultValue={locale} label="Select a locale">
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
  );
}
