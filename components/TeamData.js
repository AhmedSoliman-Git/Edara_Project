import image1 from "../public/photos/Page_otherPages/team/Certicates/Certifcate.jpeg";
import image2 from "../public/photos/Page_otherPages/team/Certicates/Certifcate2.jpeg";
import image3 from "../public/photos/Page_otherPages/team/Certicates/image.png";

import MainImg from "../public/photos/Page_otherPages/team/EngMo.jpeg";
import MainImg2 from "../public/photos/Page_otherPages/team/aYehia.jpeg";
import MainImg3 from "../public/photos/Page_otherPages/team/EngWeal.jpeg";
import MainImg4 from "../public/photos/Page_otherPages/team/MrDaw.jpeg";

import { useTranslations } from "next-intl";

export default function TeamData() {
  const tB = useTranslations("Bogdady");
  const tA = useTranslations("AhmedYehia");
  const tW = useTranslations("Wael");
  const tD = useTranslations("Dawood")
  const TeamData = {
    EngMohamed: {
      Education: tB("Education"),
      MainImg: MainImg,
      title: tB("title"),
      name: tB("name"),
      description: tB("paragraph"),
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
      description: tA("paragraph"),
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
      Courses: [tA("Course1"), tA("Course2")],
    },
    //#######################################################################
    EngWael: {
      MainImg: MainImg3,
      title: tW("title"),
      name: tW("name"),
      Education: tW("Education"),
      description: tW("paragraph"),
      Experience: [
        {
          CompanyName: tW("CompanyName"),
          Position: [
            {
              PostionName: tW("PositionName1"),
              PositionDate: tW("PositionDate1"),
            },
          ],
          projects: [tW("Project1")],
        },
        
        {
          CompanyName: tW("CompanyName2"),
          Position: [
            {
              PostionName: tW("PositionName2"),
              PositionDate: tW("PositionDate2"),
            },
          ],
          projects: [tW("Project2")],
        },

        {
          CompanyName: tW("CompanyName3"),
          Position: [
            {
              PostionName: tW("PositionName3"),
              PositionDate: tW("PositionDate3"),
            },
          ],
          projects: [tW("Project3")],
        },

        {
          CompanyName: tW("CompanyName4"),
          Position: [
            {
              PostionName: tW("PositionName4"),
              PositionDate: tW("PositionDate4"),
            },
          ],
          projects: [null],
        },
        {
          CompanyName: tW("CompanyName5"),
          Position: [
            {
              PostionName: tW("PositionName5"),
              PositionDate: tW("PositionDate5"),
            },
          ],
          projects: [tW("Project4")],
        },
      ],
      Certifications: null,
      Courses: [null],
    },
    //#######################################################################
    MrMohamed: {
      MainImg: MainImg4,
      title: tD("title"),
      name: tD("MyNAME"),
      description:tD("paragraph"),
      Experience: [
        {
          CompanyName: tD("CompanyName"),
          Position: [
            {
              PostionName: tD("PositionName1"),
              PositionDate: tD("PositionDate1"),
            }
          ],
          projects: [null],
        },
        {
          CompanyName: tD("CompanyName2"),
          Position: [
            {
              PostionName: tD("PositionName2"),
              PositionDate:tD("PositionDate2") ,
            },
          ],
          projects: [null],

        },
      ],
      Certifications: null,
      Courses: [null],
    },
  };
  return TeamData;
}
