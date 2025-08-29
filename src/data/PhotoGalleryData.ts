

import gallery_thumb_1 from "@/assets/img/mch/free-camp.webp";
import gallery_thumb_2 from "@/assets/img/mch/free-camp-2.webp";
// import gallery_thumb_3 from "@/assets/img/mch/doctors-gallery.webp";
import gallery_thumb_3 from "@/assets/img/mch/dr-rohit-kumar.webp";
import gallery_thumb_4 from "@/assets/img/mch/dr.webp";
import gallery_thumb_5 from "@/assets/img/mch/dr-kumari-ruchika.webp"; 
import gallery_thumb_6 from "@/assets/img/mch/dr-avinash-kumar.webp"; 
import dr_1 from "@/assets/img/mch/dr-1.jpeg";
import dr_2 from "@/assets/img/mch/dr-2.jpeg";
import dr_3 from "@/assets/img/mch/dr-3.jpeg";
import dr_4 from "@/assets/img/mch/dr-4.jpeg";
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  img: StaticImageData;
  category?: string;
  title: string;
  tag_1: string;
  tag_2: string;
}


const photo_gallery_data: DataType[] = [
  {
    id: 1, 
    img: gallery_thumb_1,
    category: "Free Camp",
    title: "Free Camp",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 2, 
    img: gallery_thumb_2,
    category: "Free Camp",
    title: "Free Camp",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 3, 
    img: gallery_thumb_3,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 4, 
    img: gallery_thumb_4,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 5, 
    img: gallery_thumb_5,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 6, 
    img: gallery_thumb_6,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 7, 
    img: dr_1,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 8, 
    img: dr_2,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 9, 
    img: dr_3,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Medicin",
  },
  {
    id: 10, 
    img: dr_4,
    category: "Doctors Gallery",
    title: "Doctors Gallery",
    tag_1: "medical",
    tag_2: "Dental",
  },
  // update
  // {
  //   id: 1, 
  //   img: gallery_thumb_1,
  //   category: "Medicin",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 2, 
  //   img: gallery_thumb_2,
  //   category: "Surgery",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 3, 
  //   img: gallery_thumb_3,
  //   category: "Medicin",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 4, 
  //   img: gallery_thumb_4,
  //   category: "Dental",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 5, 
  //   img: gallery_thumb_5,
  //   category: "Surgery",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Medicin",
  // },
  // {
  //   id: 6, 
  //   img: gallery_thumb_6,
  //   category: "Neurology",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
]
export default photo_gallery_data