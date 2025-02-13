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

export const Projects = {
  AboDahb: {
    stationName: "Abo-Dahb-Station(Sohag)",
    images: [img9, img10, img11],
    description: {
      DesignCapacity:
        "The plant has a treatment capacity of 6,100 cubic meters per day, serving approximately 57,000 residents in the village and surrounding areas.",
      TotalCost: "The project cost approximately 84.9 million EGP.",
      workInIt: [
        "Gravity Sewer Networks: 56,135 meters of sewer lines, costing 134.7 million EGP.",
        "Lifting Stations: The project includes four pumping stations, with a total cost of 27.8 million EGP.",
        "Sewage Farm: The facility features a wastewater treatment farm covering 210 feddans, costing 60.5 million EGP.",
      ],
    },
    link: "/services/AboDahb",
  },
  Fayoum: {
    stationName: "Hawara & Kasr-Elgbaly (Fayoum)",
    images: [img4, img5, img6],
    description: {
      DesignCapacity: null,
      TotalCost: "Approximately 32.5 million EGP.",
      workInIt: [
        "Installation of pump control panels",
        "Installation of lighting systems and load distribution",
        "Installation of level measurement and drainage devices",
        "Installation of electrical transformers",
      ],
    },
    link: "/services/Fayoum",
  },
  Menofia: {
    stationName: "EL-Ghouri Station (Menofia)",
    images: [img7, img8],
    description: {
      DesignCapacity: "12,000 cubic meters per day.",
      TotalCost: "130 million EGP",
      workInIt: [
        "Installation of pump control panels",
        "Installation of lighting systems and load distribution",
        "Installation of level measurement and drainage devices",
        "Installation of electrical transformers",
        "Laying low-voltage cables",
        "Laying medium-voltage cables and installing welding boxes and cable terminations",
        "Installation of electrical cranes for wastewater treatment plants",
        "Installation of monitoring systems",
        "Installation of drainage systems for all stations",
      ],
    },
    link: "/services/Menofia",
  },
  Baniswef: {
    stationName: "Baniharon / ElKom-Ahmar Station (Baniswef)",
    images: [img1, img2, img3],
    description: {
      DesignCapacity: null,
      TotalCost: null,
      workInIt: [
        "Installation of electromechanical works and measuring device",
        "Installation of pumps, discharge lines, and valve chambers",
        "Installation of basket screen",
      ],
    },
    link: "/services/Baniswef",
  },
};
