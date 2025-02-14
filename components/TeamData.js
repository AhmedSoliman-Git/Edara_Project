import image1 from "../public/photos/Page_otherPages/team/Certicates/Certifcate.jpeg";
import image2 from "../public/photos/Page_otherPages/team/Certicates/Certifcate2.jpeg";
import image3 from "../public/photos/Page_otherPages/team/Certicates/image.png";

import MainImg from "../public/photos/Page_otherPages/team/EngMo.jpeg";
import MainImg2 from "../public/photos/Page_otherPages/team/aYehia.jpeg";
import MainImg3 from "../public/photos/Page_otherPages/team/EngWeal.jpeg";
import MainImg4 from "../public/photos/Page_otherPages/team/MrDaw.jpeg";

import React from "react";
import { useTranslations } from "next-intl";

export default function TeamData() {
  const tB = useTranslations("Bogdady");
  const tA = useTranslations("AhmedYehia");
  const TeamData = {
    EngMohamed: {
      Education: tB("Education"),
      MainImg: MainImg,
      title: tB("title"),
      name: tB("name"),
      description: tB("baragraph"),
      Experience: [
        {
          CompanyName: tB("CompanyName"),
          Position: [
            {
              PostionName: tB("PositionName1"),
              PositionDate: tB("PositionDate1"),
            },
          ],
          projects: [
            tB("Project1"),
            tB("Project2"),
            tB("Project3"),
            tB("Project4"),
          ],
        },
        {
          CompanyName: tB("CompanyName2"),
          Position: [
            {
              PostionName: tB("PositionName2"),
              PositionDate: tB("PositionDate2"),
            },
            {
              PostionName: tB("PositionName3"),
              PositionDate: tB("PositionDate3"),
            },
            {
              PostionName: tB("PositionName4"),
              PositionDate: tB("PositionDate4"),
            },
          ],
          projects: [tB("Project5"), tB("Project6"), tB("Project7")],
        },
        {
          CompanyName: tB("CompanyName3"),
          Position: [
            {
              PostionName: tB("PositionName5"),
              PositionDate: tB("PositionDate5"),
            },
            {
              PostionName: tB("PositionName6"),
              PositionDate: tB("PositionDate6"),
            },
            {
              PostionName: tB("PositionName7"),
              PositionDate: tB("PositionDate7"),
            },
          ],
          projects: [tB("Project8"), tB("Project9"), tB("Project10")],
        },
      ],
      Certifications: [
        {
          image1: image1,
        },
        {
          image1: image2,
        },
        {
          image1: image3,
        },
      ],
    },
    //#######################################################################
    EngAhmed: {
      Education: tA("Education"),
      MainImg: MainImg2,
      title: tA("title"),
      name: tA("name"),
      description: tA("baragraph"),
      Experience: [
        {
          CompanyName: tA("CompanyName"),
          Position: [
            {
              PostionName: tA("PositionName1"),
              PositionDate: tA("PositionDate1"),
            },
            {
              PostionName: tA("PositionName2"),
              PositionDate: tA("PositionDate2"),
            },
          ],
          projects: [
            tA("Project1"),
            tA("Project2"),
            tA("Project3"),
            tA("Project4"),
            tA("Project5"),
            tA("Project6"),
          ],
        },
      ],
      Certifications: null,
      Courses: [tA("Course1") ,tA("Course2")],
    },
    //#######################################################################
    EngWael: {
      MainImg: MainImg3,
      title: "Engineer",
      name: "Wael Belal",
      Education: "Bachelor Degree in Electrical Engineering",
      description:
        "Engineer Wael Belal is a dedicated and skilled professional with expertise in [his specific field, e.g., electrical, mechanical, civil, etc.]. With a strong background in [mention key areas, e.g., project management, design, implementation, etc.], he has successfully contributed to [mention notable projects or achievements]. Known for his attention to detail, problem-solving abilities, and commitment to excellence, Eng. Wael Belal is a respected figure in his field.",
      Experience: [
        {
          CompanyName: "AL SHROUK GENERAL CONTRACTING",
          Position: [
            {
              PostionName: "Site Civil Engineer",
              PositionDate: "(April 2021 - August 2021)",
            },
            {
              PostionName: "Site Civil Engineer",
              PositionDate: "(December 2020 - March 2021)",
            },
            {
              PostionName: "Site Civil Engineer",
              PositionDate: "(June 2018 - November 2020)",
            },
          ],
          projects: [
            "🔹Beni Suef: Wastewater lifting stations in Bani Haroun and Al-Kom Al-Ahmar villages.",
            "🔹Sohag: Wastewater lifting stations in Arabah Abu Al-Dahab, Al-Baytag, and Abu Aziz villages.",
            "🔹General Projects: Water desalination plants, fuel stations.",
            "🔹Extensive experience in electrical engineering for over 15 years.",
            "🔹Worked on large-scale government projects.",
            "🔹Installation of electrical transformers.",
          ],
        },
      ],
      Certifications: null,
      Courses: [null],
    },
    //#######################################################################
    MrMohamed: {
      MainImg: MainImg4,
      title: "Engineer",
      name: "Mohamed Elbogdady",
      description:
        "Civil engineer hava lot of works in all time did alot in Work in Arabi construction works 10 years in with heavy experience",
      Experience: [
        {
          CompanyName: "OBAID AL ABDI MAINTENANCE AND DÉCOR (UAE)",
          Position: [
            {
              PostionName: "Senior Project Engineer",
              PositionDate: "(November 2023 - Present)",
            },
            {
              PostionName: "Project Manager",
              PositionDate: "(November 2023 - Present)",
            },
          ],
          projects: [
            " Al Jada Site",
            "Wasel Tower",
            "Murooj Alfurjan",
            "Telal Alfurjan",
          ],
        },
        {
          CompanyName: " OBAID ALABDI CONTRACTING LLC (UAE)",
          Position: [
            {
              PostionName: "Senior Project Engineer",
              PositionDate: "(March 2023 - October 2023)",
            },
            {
              PostionName: "Senior Project Engineer",
              PositionDate: "(July 2022 - February 2023)",
            },
            {
              PostionName: "Project Engineer",
              PositionDate: "(August 2021 - June 2022)",
            },
          ],
          projects: [
            "Family Park 6",
            "Municipality Labour Camp",
            "Weapons and Ammunition Depot",
          ],
        },
        {
          CompanyName: "AL SHROUK GENERAL CONTRACTING",
          Position: [
            {
              PostionName: "Site Civil Engineer",
              PositionDate: "(April 2021 - August 2021)",
            },
            {
              PostionName: "Site Civil Engineer",
              PositionDate: "(December 2020 - March 2021)",
            },
            {
              PostionName: "Site Civil Engineer",
              PositionDate: "(June 2018 - November 2020)",
            },
          ],
          projects: [
            "Assiut National University",
            "Algalala Coastal Resort",
            "Egyptian Japanese University",
          ],
        },
      ],
      Certifications: [
        {
          image1: image1,
          ImageDescreption: "Design Diploma",
        },
        {
          image1: image1,
          ImageDescreption: "Design Diploma",
        },
        {
          image1: image1,
          ImageDescreption: "Design Diploma",
        },
        {
          image1: image1,
          ImageDescreption: "Design Diploma",
        },
      ],
    },
  };
  return TeamData;
}
