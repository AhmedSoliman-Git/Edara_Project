import img1 from "../public/photos/projects/BaniSwef/img1.jpg";
import img2 from "../public/photos/projects/BaniSwef/img2.jpg";
import img3 from "../public/photos/projects/BaniSwef/img3.jpg";
import img4 from "../public/photos/projects/Fayoum/img1.jpg";
import img5 from "../public/photos/projects/Fayoum/img2.jpeg";
import img6 from "../public/photos/projects/Fayoum/img3.jpeg";
import img7 from "../public/photos/projects/menofia/img2.jpg";
import img8 from "../public/photos/projects/menofia/img3.jpg";
import img9 from "../public/photos/projects/abo_dahb/img1.jpg";
import img10 from "../public/photos/projects/abo_dahb/img2.jpg";
import img11 from "../public/photos/projects/abo_dahb/img3.jpg";
import { useTranslations } from "next-intl";

export default function ProjectData() {
  const t = useTranslations("Projects");

  const Projects = {
    dC: t("dc"),
    work: t("work"),
    cost: t("cost"),
    AboDahb: {
      stationName: t("ProjectAboDahb"),
      images: [img9, img10, img11],
      description: {
        DesignCapacity: t("DahbP"),
        TotalCost: t("DahbCost"),
        workInIt: [t("Dahb1"), t("Dahb2"), t("Dahb3")],
      },
      link: "/services/AboDahb",
    },
    Fayoum: {
      stationName: t("FayoumT"),
      images: [img4, img5, img6],
      description: {
        DesignCapacity: null,
        TotalCost: t("FayoumC"),
        workInIt: [t("F1"), t("F2"), t("F3"), t("F4")],
      },
      link: "/services/Fayoum",
    },
    Menofia: {
      stationName: t("Mt"),
      images: [img7, img8],
      description: {
        DesignCapacity: t("Mp"),
        TotalCost: t("Mc"),
        workInIt: [
          t("M1"),
          t("M2"),
          t("M3"),
          t("M4"),
          t("M5"),
          t("M6"),
          t("M7"),
          t("M8"),
          t("M9"),
        ],
      },
      link: "/services/Menofia",
    },
    Baniswef: {
      stationName: t("ProjectSwefH"),
      images: [img1, img2, img3],
      description: {
        DesignCapacity: null,
        TotalCost: null,
        workInIt: [t("Swef1"), t("Swef2"), t("Swef3")],
      },
      link: "/services/Baniswef",
    },
  };

  return Projects;
}
