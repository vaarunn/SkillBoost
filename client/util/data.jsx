import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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

export { links, socialIcons };
