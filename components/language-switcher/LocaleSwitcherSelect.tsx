"use client";
import { Locale, routing, usePathname, useRouter } from "../../i18n/routing";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import { useState } from "react";
import classes from '../Header/NavBar.module.css' ;

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();


  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const nextLocale = event.target.value;
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <select defaultValue={defaultValue} onChange={onSelectChange}>
      {routing.locales.map((locale) => (
        <option value={locale} key={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
