import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import img1 from "../assets/images/one.png";
import img2 from "../assets/images/two.png";
import img3 from "../assets/images/three.png";
import img4 from "../assets/images/four.png";
import img5 from "../assets/images/five.png";
import img6 from "../assets/images/six.png";
import img7 from "../assets/images/seven.png";
import img8 from "../assets/images/eight.png";
import img9 from "../assets/images/nine.png";
import img10 from "../assets/images/ten.png";

const carasoulImages = [
  {
    id: 1,
    source: img1,
  },
  {
    id: 2,
    source: img2,
  },
  {
    id: 3,
    source: img3,
  },
  {
    id: 4,
    source: img4,
  },
  {
    id: 5,
    source: img5,
  },
  {
    id: 6,
    source: img6,
  },
  {
    id: 7,
    source: img7,
  },
  {
    id: 8,
    source: img8,
  },
  {
    id: 9,
    source: img9,
  },
  {
    id: 10,
    source: img10,
  },
];

const links = [
  {
    id: "1",
    title: "Home",
    url: "/",
  },
  {
    id: "2",
    title: "Browse All Courses",
    url: "/about",
  },
  {
    id: "3",
    title: "Request A Course",
    url: "/skills",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "/project",
  },
  {
    id: "5",
    title: "About",
    url: "/contact",
  },
];

const socialIcons = [
  {
    id: "1",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/varun-sadananda-b251131b7/",
  },
  {
    id: "2",
    icon: <FaGithub />,
    url: "https://github.com/vaarunn",
  },
  {
    id: "3",
    icon: <AiOutlineMail />,
    url: "#/contact",
  },
];

export { links, socialIcons, carasoulImages };
