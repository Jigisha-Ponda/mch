

import gallery_thumb_1 from "@/assets/img/mch/free-camp.webp";
import gallery_thumb_2 from "@/assets/img/mch/free-camp-2.webp";
// import gallery_thumb_3 from "@/assets/img/mch/doctors-gallery.webp";
import gallery_thumb_3 from "@/assets/img/mch/dr-rohit-kumar.webp";
import gallery_thumb_4 from "@/assets/img/mch/dr.webp";
import gallery_thumb_5 from "@/assets/img/mch/dr-kumari-ruchika.webp"; 
import gallery_thumb_6 from "@/assets/img/mch/dr-avinash-kumar.webp"; 
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
  // {
  //   id: 3, 
  //   img: gallery_thumb_3,
  //   category: "Dental",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 4, 
  //   img: gallery_thumb_4,
  //   category: "Surgery",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
  // {
  //   id: 5, 
  //   img: gallery_thumb_5,
  //   category: "Dental",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Medicin",
  // },
  // {
  //   id: 6, 
  //   img: gallery_thumb_6,
  //   category: "Medicin",
  //   title: "Dental Services",
  //   tag_1: "medical",
  //   tag_2: "Dental",
  // },
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