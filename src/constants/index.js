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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  laravel,
  arcade,
  studio,
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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
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
    name: "docker",
    icon: docker,
  },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences = [
  {
    title: "Backend Intern Web Developer",
    company_name: "CV Cipta Adhi Nugraha Creative",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained a voting app for a Car Community in Semarang, facilitating leader elections.",
      "Created a robust API for a store management application to streamline operations.",
      "Redesigned a nail art website to enhance user experience and aesthetic appeal.",
      "Built a comprehensive travel agency website to improve customer engagement and booking processes.",
      "Designed a bus travel app to optimize route planning and ticketing.",
    ],
  },
  {
    title: "Developing Arcade Games Website",
    company_name: "Access Point Arcade",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Feb 2024",
    points: [
      "Developed and maintained an arcade game website using WordPress to sell and promote arcade games.",
      "Collaborated with cross-functional teams including designers and product managers to create a high-quality e-commerce experience.",
      "Implemented a shop feature on the website to enable customers to purchase products easily.",
      "Continually optimized and maintained the website for performance and usability.",
    ],
  },
  {
    title: "Developing Photo Studio Website",
    company_name: "Photobar Indonesia",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed and maintained a highly aesthetic photo studio website focused on showcasing the studio's work.",
      "Collaborated with cross-functional teams including designers and product managers to create a visually appealing and user-friendly platform.",
      "Integrated an appointment booking system for user convenience.",
      "Ensured responsive design and cross-browser compatibility to enhance user experience.",
    ],
  },
  // {
  //   title: "Freelance Web Developer",
  //   company_name: "",
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
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Photo Studio Website",
    description:
      "A web-based platform for photographers and clients to connect. Users can browse portfolios, book sessions, and manage appointments easily, offering a seamless solution for photography services.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "freelance",
        color: "green-text-gradient",
      },
      {
        name: "aesthetics",
        color: "pink-text-gradient",
      },
    ],
    image: studio,
    source_code_link: "https://photobarindonesia.com",
  },
  {
    name: "Arcade Website",
    description:
      "A user-friendly platform for buying arcade machines and gaming accessories. Explore products, read descriptions, and make secure purchases easily. Perfect for arcade enthusiasts and businesses.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "games",
        color: "green-text-gradient",
      },
      {
        name: "arcade",
        color: "pink-text-gradient",
      },
    ],
    image: arcade,
    source_code_link: "https://accesspointarcade.com",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
