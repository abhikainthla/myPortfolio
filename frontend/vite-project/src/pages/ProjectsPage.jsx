import { Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import Buttons from '../components/Buttons';
import Project from '../components/Project';

const ProjectsPage = () => {
  const [filter, setFilter] = useState(null);

  const projects = [
    {
      link: "https://github.com/abhikainthla/Threads-Clone",
      title: "Threads-clone",
      description: "This project is a clone of the popular Threads website, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Threads is a platform where users can create, discover, and engage in threaded discussions on various topics.",
      img: "https://i.ibb.co/0t2Y0Ym/Threads-clone.png",
      lang: "MERN"
    },
    {
      link: "https://github.com/abhikainthla/hospital-management-system",
      title: "Hospital Managemet System",
      description: "This Projects aims to make it easier to make check-up requests, manage patient and doctors records and all of this in an efficient way",
      img: "https://i.ibb.co/0t2Y0Ym/Threads-clone.png",
      lang: "MERN"
    },
    {
      link: "https://github.com/abhikainthla/food-cart",
      title: "Food-cart",
      description: "Welcome to the Food Delivery App! This is a web application built using React that allows users to order various kind of food and have it delivered to their doorstep.",
      lang: "React",
      img: '/Screenshot (1).png'
    },
    {
      link: "https://github.com/abhikainthla/OLX-Clone",
      title: "OLX Clone",
      description: "Welcome to the OLX Clone project! This project aims to replicate the functionality of the popular online marketplace, OLX.",
      img: '/olx-clone.png',
      lang: "HTML/CSS"
    },
    {
      link: "https://github.com/abhikainthla/Payment-Integration",
      title: "Payment Integration",
      description: "Welcome to the Payment Integration Demo website! This project serves as a demonstration of integrating payment gateways into your web application.",
      img: '/Screenshot (2).png',
      lang: "JavaScript"
    },
    {
      link: "https://github.com/abhikainthla/ImageSearchApp",
      title: "ImageSearchApp",
      description: "Welcome to the Image searching app! here you can generate HD images",
      img: '/Screenshot (3).png',
      lang: "JavaScript"
    },
    {
      link: "https://github.com/abhikainthla/Bored-suggestions",
      title: "Bored-suggestions",
      description: "A site made in boredom to kill boredom",
      img: '/bored-suggestions.png',
      lang: "JavaScript"
    },
    {
      link: "https://playful-klepon-eb4ff4.netlify.app/",
      title: "Notepad",
      description: "A markdown notepad to take notes.",
      img: '/Screenshot (4).png',
      lang: "React"
    },
    {
      link: "https://stunning-semolina-c3e805.netlify.app/",
      title: "Fitness app",
      description: "A app to train your body with 100s of exercises",
      img: '/Screenshot (5).png',
      lang: "React"
    },
    {
      link: "https://jocular-lamington-66bb22.netlify.app/",
      title: "Password-Generator",
      description: "Too lazy to think about passwords no problem this site is for you.",
      img: '/Screenshot (6).png',
      lang: "React"
    },
    {
      link: "https://abhikainthla.github.io/GeeksterMon/",
      title: "GeeksterMon",
      description: "A place to find about your favourite pokemons",
      img: '/Screenshot (7).png',
      lang: "JavaScript"
    },
    {
      link: "https://abhikainthla.github.io/Sticky-Notes/",
      title: "Notes",
      description: "A app to create notes",
      img: '/Screenshot (8).png',
      lang: "JavaScript"
    }
  ];

  const technologies = ['ALL', 'MERN', 'JavaScript', 'React', 'HTML/CSS'];

  const handleFilter = (language) => {
    if (language === "ALL") {
      setFilter(null); // Reset the filter to show all projects
    } else {
      setFilter(language);
    }
  };

  const filteredProjects = filter ? projects.filter(item => item.lang === filter) : projects;

  return (
    <Flex p={20} alignItems={'center'} justifyContent={'center'} flexDir={'column'} gap={10}>
      <Heading>Projects</Heading>
      <Flex gap={5}>
        {technologies.map((tech, index) => (
          <Buttons key={index} name={tech} onClick={() => handleFilter(tech)} />
        ))}
      </Flex>
      <Flex wrap={'wrap'} gap={10} p={20} alignItems={'flex-start'} justifyContent={'center'}>
        {filteredProjects.map((project, index) => (
          <Project key={index} link={project.link} title={project.title} description={project.description} image={project.img} lang={project.lang} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProjectsPage;
