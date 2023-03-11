import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tafe,
  allripe,
  hype,
  mernBlogApp,
  tictac,
  weatherapi,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Application Support Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Service desk and field support",
    company_name: "Tafe NSW",
    icon: tafe,
    iconBg: "#383E56",
    date: "Jan 2023 - Current",
    points: [
      "Imaging PCs and laptops.",
      "Level 1 and level 2 support",
      "Customer service and support",
      "Testing and debugging problems related to a computer network and hardware",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Allripe",
    icon: allripe,
    iconBg: "#383E56",
    date: "dec 2021 - may 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Hype Studio Design",
    icon: hype,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js, Bootstrap and php.",
      "Testing, debugging and analysing the root cause of problems.",
      "Brainstorming, coming up with new ideas to bring ideas into vision.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial: "There is always solution to problems.",
    name: "Andrew Silva",
    designation: "IT Field Support",
    company: "Tafe NSW",
  },
  {
    testimonial: "There is always solution to problems.",
    name: "Nabin Aryal",
    designation: "IT Service Desk and Field Support",
    company: "Tafe NSW",
  },
  {
    testimonial: "There is always solution to problems.",
    name: "Al Moyeid",
    designation: "IT Service Desk and Field Support",
    company: "Tafe NSW",
  },
];

const projects = [
  {
    name: "Mern Blog App",
    description:
      "A complete full stack web application that is based on CRUD principle where users can create, read, update and delete their posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: mernBlogApp,
    source_code_link: "https://github.com/sudipkhatri/MernBlogAppv1.0.0",
  },
  {
    name: "Tictac Game",
    description:
      "A simple tictac game build using react, bootstrap and implementing logic to declare winner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link:
      "https://github.com/sudipkhatri/tictac/tree/main/Desktop/Game/tictac",
  },
  {
    name: "Weather API",
    description:
      "Weather prediction using api integration from third party API (weathermapsAPI), react and custom css.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "API integration",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapi,
    source_code_link: "https://github.com/sudipkhatri/weatherApp_v1",
  },
];

export { services, technologies, experiences, testimonials, projects };
