import { useTranslations } from "next-intl";
import SerCm from "./SerCm";
export default function Services() {
  const t = useTranslations("SERVICES");
  return (
    <>
      <SerCm />
    </>
  );
}
