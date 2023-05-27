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

const projects = [
  {
    id: "1",
    img: "",
    title: "React",
  },
];

const students = [
  {
    id: 1,
    img: "",
    name: "Michael Kiger",
    position: "Web Developer",
    review:
      "Batman is the best instructor I have listened to. Watched several hundred tutorials past two years. Many instructors waste lots of time with personal comments during tutorials. Batman gets right to the point, moving quickly through code examples. I needed to master Javascript and will use SkillBoost exclusively during my career.",
  },
  {
    id: 2,
    img: "",
    name: "Christopher Ang",
    position: "Web Developer",
    review:
      "Batman and this team are always there to help and guide you. Being a part of and surrounded by like-minded people who aspire to become great developers is something you don’t find often. I feel very fortunate to be a part of this program.",
  },
  {
    id: 3,
    img: "",
    name: "Akshay Mishra",
    position: "Associate Software Developer | India",
    review:
      "Batman, I wanted to thank you for your React courses. I've personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago. Keep doing what you're doing. Thank you!",
  },
  {
    id: 4,
    img: "",
    name: "Kristian Fulkerson",
    position: "Full Stack Developer",
    review:
      "Simply the best way to take your development skills to the next level. Batman from SkillBoost already has the best free content out on the internet, but since joining the master class, my confidence in writing more complicated application features has skyrocketed. I cannot thank Batman enough. I am now working as a software engineer while participating in the program, and the team environment he creates simulates what you will experience once you get a job. 10/10",
  },
  {
    id: 5,
    img: "",
    name: "Oscar Hampton",
    position: "Freelance Software Developer | USA",
    review:
      "SkillBoost has been precisely what I was looking for. I have enjoyed the courses, and completing them filled many gaps that some other learning platforms brushed over or skipped entirely. 10/10 would recommend.",
  },
];

export { links, socialIcons, carasoulImages, students };
