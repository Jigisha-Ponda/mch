
import { StaticImageData } from "next/image";
import team_avatar_1 from "@/assets/img/team/member1.png";
import team_avatar_2 from "@/assets/img/team/member2.png";
import team_avatar_3 from "@/assets/img/team/member3.png";
import team_avatar_4 from "@/assets/img/team/member4.png";
import team_avatar_5 from "@/assets/img/team/member5.png";
import team_avatar_6 from "@/assets/img/team/member6.png"; 

import team_avatar_3_1 from "@/assets/img/team/team-member-7.jpg"; 
import team_avatar_3_2 from "@/assets/img/team/team-member-8.jpg"; 
import team_avatar_3_3 from "@/assets/img/team/team-member-9.jpg"; 
import team_avatar_3_4 from "@/assets/img/team/team-member-10.jpg"; 
import team_avatar_3_5 from "@/assets/img/team/team-member-11.jpg"; 
import team_avatar_3_6 from "@/assets/img/team/team-member-12.jpg"; 

import team_avatar_4_1 from "@/assets/img/mch/dr-avinash-kumar.webp"; 
import team_avatar_4_2 from "@/assets/img/mch/dr-rohit-kumar.webp"; 
import team_avatar_4_3 from "@/assets/img/mch/dr-kumari-ruchika.webp"; 
import team_avatar_4_4 from "@/assets/img/home4/team/team__thumb4.png";  



interface TeamDataType {
  id: number;
  home?: number;
  img: StaticImageData;
  name: string;
  job_title: string;
  job_subtitle:string;
}[]

const team_data:TeamDataType[] = [
  {
    id: 1, 
    img: team_avatar_1,
    name: "Rosalina D. Williamson",
    job_title: "Founder",
    job_subtitle:"",
  },
  {
    id: 2, 
    img: team_avatar_2,
    name: "Diconda PIran Will",
    job_title: "dentist",
    job_subtitle:"",
  },
  {
    id: 3, 
    img: team_avatar_3,
    name: "Hulk M. Kenbon",
    job_title: "neurologist",
    job_subtitle:"",
  },
  {
    id: 4, 
    img: team_avatar_4,
    name: "Haliam Z. Dicolaz",
    job_title: "Consultant",
    job_subtitle:"",
  },
  {
    id: 5, 
    img: team_avatar_5,
    name: "Nicolas D. Case",
    job_title: "dentist",
    job_subtitle:"",
  },
  {
    id: 6, 
    img: team_avatar_6,
    name: "Phumdon H. Norman",
    job_title: "neurologist",
    job_subtitle:"",
  },
  // home 03
  {
    id: 1, 
    img: team_avatar_3_1,
    name: "Philimia D. Darwin",
    job_title: "Founder",
    job_subtitle:"",
  },
  {
    id: 2, 
    img: team_avatar_3_2,
    name: "Hekim D. Rswana",
    job_title: "dentist",
    job_subtitle:"",
  },
  {
    id: 3, 
    img: team_avatar_3_3,
    name: "Tarana Halim",
    job_title: "neurologist",
    job_subtitle:"",
  },
  {
    id: 4, 
    img: team_avatar_3_4,
    name: "Limonda Pwedie",
    job_title: "Consultant",
    job_subtitle:"",
  },
  {
    id: 5, 
    img: team_avatar_3_5,
    name: "Kelian M. Habblu",
    job_title: "dentist",
    job_subtitle:"",
  },
  {
    id: 6, 
    img: team_avatar_3_6,
    name: "Romada G. WIlliam",
    job_title: "neurologist",
    job_subtitle:"",
  },
  // home 04
  {
    id: 1, 
    home: 4,
    img: team_avatar_4_1,
    name: "Dr. Avinash kumar",
    job_title: "MBBS,PGDMCH Reg.no:37000",
    job_subtitle:"Child Specialist Ex- Kejriwal Hospital",
  },
  {
    id: 2, 
    home: 4,
    img: team_avatar_4_2,
    name: "Dr. Rohit kumar",
    job_title: "MBBS, MS Reg. No 54977 (BCMR)",
    job_subtitle:"General & Laproscopic Surgery",
  },
  {
    id: 3, 
    home: 4,
    img: team_avatar_4_3,
    name: "Dr. Kumari Ruchika",
    job_title: "MBBS, MS (OBG) Gynaecologist",
    job_subtitle:"Kejriwal Hospital Muzaffarpur",
  },
  // {
  //   id: 4, 
  //   home: 4,
  //   img: team_avatar_4_4,
  //   name: "Kelian M. Habblu",
  //   job_title: "Consultant",
  // },
]
export default team_data
