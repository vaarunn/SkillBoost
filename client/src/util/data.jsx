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
    url: "/courses",
  },
  {
    id: "3",
    title: "Request A Course",
    url: "/requestCourse",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "/contactUs",
  },
  {
    id: "5",
    title: "About",
    url: "/contact",
  },
];

const AdminLinks = [
  {
    id: "1",
    title: "Home",
    url: "/",
  },
  {
    id: "2",
    title: "Dashboard",
    url: "/admin/",
  },
  {
    id: "3",
    title: "Create Course",
    url: "/requestCourse",
  },
  {
    id: "4",
    title: "Courses",
    url: "/admin/allCourses",
  },
  {
    id: "5",
    title: "Users",
    url: "/admin/users",
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
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    name: "Jenny B",
    position: "Web Developer",
    review:
      "Batman is the best instructor I have listened to. Watched several hundred tutorials past two years. Many instructors waste lots of time with personal comments during tutorials. Batman gets right to the point, moving quickly through code examples. I needed to master Javascript and will use SkillBoost exclusively during my career.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Christopher Ang",
    position: "Web Developer",
    review:
      "Batman and this team are always there to help and guide you. Being a part of and surrounded by like-minded people who aspire to become great developers is something you don’t find often. I feel very fortunate to be a part of this program.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Akshay Mishra",
    position: "Associate Software Developer | India",
    review:
      "Batman, I wanted to thank you for your React courses. I've personally learned a lot from them and landed a full-time job as a JavaScript developer two days ago. Keep doing what you're doing. Thank you!",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Kristian Fulkerson",
    position: "Full Stack Developer",
    review:
      "Simply the best way to take your development skills to the next level. Batman from SkillBoost already has the best free content out on the internet, but since joining the master class, my confidence in writing more complicated application features has skyrocketed. I cannot thank Batman enough. I am now working as a software engineer while participating in the program, and the team environment he creates simulates what you will experience once you get a job. 10/10",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Oscar Hampton",
    position: "Freelance Software Developer | USA",
    review:
      "SkillBoost has been precisely what I was looking for. I have enjoyed the courses, and completing them filled many gaps that some other learning platforms brushed over or skipped entirely. 10/10 would recommend.",
  },
];

const faq = [
  {
    id: 1,
    question: "Will I receive a certificate for each course?",
    answer:
      "Yes — each student who completes either Filmpire or NFT Marketplace will receive a certificate of completion to acknowledge their proficiency in either React.js or Solidity/Web 3.0 app development. We encourage students to include these on their LinkedIn profiles and in their job applications!",
  },
  {
    id: 2,
    question: "Can I join the masterclass if I purchase a course?",
    answer:
      "Absolutely! The JSM Masterclass Experience was built for developers who want to gain practical experience through monthly group projects so they can beef up their resumes and CVs. You can purchase access to the masterclass options at any time.",
  },
  {
    id: 3,
    question: "How long does each course last?",
    answer:
      "The duration of each course depends on how fast you wish to work through them — some students might take a few days, while others may wish to repeat specific exercises to gain a stronghold on the various concepts. Filmpire contains approximately seven hours of course material, while NFT Marketplace contains approximately 10 hours of course material.",
  },
  {
    id: 4,
    question: "How does the masterclass work?",
    answer:
      "Students are divided into cohorts where they are given monthly projects to collaborate on and complete with coaching guidance and code review. We offer both a 3-month option (The Confident Coder) and a 6-month option (The Enlightened Engineer) depending on how many projects you wish to showcase to employers. The Enlightened Engineer includes a three-month-long capstone project that will serve as the pinnacle achievement to aid in your job search. Each month, students will participate in mock interviews and receive feedback on their progress as well as their resume/CV, LinkedIn, GitHub, etc..",
  },
];

const footerCourses = [
  {
    id: 1,
    name: "Netflix CLone",
  },
  {
    id: 2,
    name: "CryptoBase",
  },
  {
    id: 3,
    name: "Javascipt",
  },
  {
    id: 4,
    name: "Web Development",
  },
];

const footerSkillShare = [
  {
    id: 1,
    name: "Our Story",
  },
  {
    id: 2,
    name: "Contact Us",
  },
  {
    id: 3,
    name: "Terms Of Use",
  },
  {
    id: 4,
    name: "Privacy Policy",
  },
];

const footerResources = [
  {
    id: 1,
    name: "Knowledge Base",
  },
  {
    id: 2,
    name: "Youtube Base",
  },
  {
    id: 3,
    name: "Free Guides",
  },
  {
    id: 4,
    name: "Useful Links",
  },
];

import { SlBadge } from "react-icons/sl";
import { AiOutlineMessage } from "react-icons/ai";
import { MdMonitor } from "react-icons/md";

const features = [
  {
    id: 1,
    icon: <AiOutlineMessage size={50} style={{ color: "blue" }} />,
    title: "Expert Coaching Support",
    subTitle:
      "Gain 24/7 access to a private community of coders looking to advance their knowledge and experience, as well as their careers.",
  },
  {
    id: 2,
    icon: <SlBadge size={50} style={{ color: "red" }} />,
    title: "Real-world experience",
    subTitle:
      "Theory will only get you so far, but building projects from the ground up will bolster your career in the software development space.",
  },
  {
    id: 3,
    icon: <MdMonitor size={50} style={{ color: "blue" }} />,
    title: "JSM Pro Certificates",
    subTitle:
      "Earn JSM Pro certification for each course you complete and show hiring managers and clients that you're a programming pro.",
  },
];

const launcCourse = [
  {
    id: 1,
    name: "WebDevelopment Course",
    url: "",
  },
  {
    id: 2,
    name: "App Development Course",
    url: "",
  },
  {
    id: 3,
    name: "Machine Learning Course",
    url: "",
  },
  {
    id: 4,
    name: "Block Chain Course",
    url: "",
  },
];

export {
  links,
  socialIcons,
  carasoulImages,
  students,
  faq,
  footerResources,
  footerSkillShare,
  footerCourses,
  features,
  launcCourse,
  AdminLinks,
};
