import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "ar",
  pathnames : {
    "/aboutUs" :{
      en : "/aboutUs" ,
      ar : "/ماذا عنا"
    } ,
    "/Home" :{
      en : "/Home" ,
      ar : "/الصفحه الرئيسيه"
    } ,
    "/help" :{
      en : "/Help" ,
      ar : "/مساعده"
    } ,
    "/services" :{
      en : "/services" ,
      ar : "/الخدمات"
    } ,

  }
});
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
