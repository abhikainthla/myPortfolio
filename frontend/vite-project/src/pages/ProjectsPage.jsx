import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const ProjectsPage = () => {
  const [filter, setFilter] = useState(null);
  const [isSmallerThan426] = useMediaQuery("(max-width: 426px)");
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/projects/getProject");
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.log("Error occurred while fetching data:", error);
      }
    };
    getProjects();
  }, []);

  console.log(project);

  const technologies = ["ALL", "MERN", "JavaScript", "React", "HTML/CSS"];

  const handleFilter = (language) => {
    setFilter(language === "ALL" ? null : language.toLowerCase());
  };

  const filteredProjects = filter
    ? project.filter((item) => item.language?.toLowerCase() === filter)
    : project;

  return (
    <Flex
      p={isSmallerThan426 ? "10" : "20"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      gap={isSmallerThan426 ? "5" : "10"}
      id="projects"
    >
      <Heading>Projects</Heading>

      {/* Filter Buttons */}
      <Flex
        gap={isSmallerThan426 ? "2" : "5"}
        flexWrap={isSmallerThan426 ? "wrap" : "nowrap"}
      >
        {technologies.map((tech, index) => (
          <Buttons key={index} name={tech} onClick={() => handleFilter(tech)} />
        ))}
      </Flex>

      {/* Projects Display */}
      <Flex
        wrap={"wrap"}
        gap={10}
        p={20}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            link={project.link}
            title={project.name}
            description={project.description}
            image={project.image}
            lang={project.language} // Updated to use "language"
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProjectsPage;
