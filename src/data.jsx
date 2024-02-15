import { nanoid } from "nanoid";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaAws,
  FaMicrosoft,
  FaPython,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-amber-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-amber-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-amber-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "AWS",
    icon: <FaAws className="h-16 w-16 text-amber-500" />,
    text: "Experienced in AWS cloud services, including EC2, S3, and Lambda. Proficient in deploying, managing, and scaling cloud applications. Strong understanding of AWS security best practices.",
  },
  {
    id: nanoid(),
    title: "Azure",
    icon: <FaMicrosoft className="h-16 w-16 text-amber-500" />,
    text: "Proficient in Microsoft Azure, managing and deploying cloud services. Experienced in Azure Active Directory, Azure Functions, and Azure DevOps. Strong understanding of Azure security and governance.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-amber-500" />,
    text: "Proficient in Python with experience in web development. Skilled in libraries like Pandas. Committed to writing clean, efficient code",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://resumeolu.s3.eu-west-2.amazonaws.com/web.png",
    url: "https://olu-image-generator.netlify.app/",
    github: "https://github.com/olumide-eng",
    title: "Image Generator",
    text: "The project is a web application that generates images based on user input. It's hosted on Netlify and the source code is available on GitHub. The project demonstrates proficiency in web development and the use of modern JavaScript library called react and react query for fetching data. The project also demonstrates the use of modern CSS techniques for styling and responsiveness ",
  },
  {
    id: nanoid(),
    img: "https://resumeolu.s3.eu-west-2.amazonaws.com/web1.png",
    url: "https://blender-beverage.netlify.app/",
    github: "https://github.com/olumide-eng",
    title: "Beverage Blender",
    text: "Beverage  Blender is a dynamic web application that allows users to create custom beverage recipes. Built with React for the frontend,  and styled-components for CSS-in-JS styling, it showcases my proficiency in front end development and user interface design, also displays proficiency with external libraries like react-router-dom for routing and react-query for fetching data. The project is hosted on Netlify and the source code is available on GitHub.",
  },
  {
    id: nanoid(),
    img: "https://resumeolu.s3.eu-west-2.amazonaws.com/web3.png",
    url: "https://convenience-store.netlify.app/",
    github: "https://github.com/olumide-eng",
    title: "Comfy Store",
    text: "Comfy Store is an e-commerce web application built with React and redux toolkit. It features product listing, shopping cart functionality, and user authentication. tailwind css and daisy UI were used for CSS-in-JS styling, demonstrating my skills in web development and e-commerce solutions",
  },
];
