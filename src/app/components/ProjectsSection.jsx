"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Covid-19 Detection using X-rays",
    description: "Developed a novel lightweight model for detection of covid 19.",
    image: "../../images/projects/1.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/naziya-19/Detection-of-Covid-19-and-Viral-Pneumonia-Using-X-rays-Images",
    previewUrl: "https://drive.google.com/file/d/1YrerHUuGMAeGhtxXkzQGE5-WCxQ13cqG/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Stock Market Prediction",
    description: "Predicting stock prices using LSTM and sentiment analysis.",
    image: "../../images/projects/2.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/naziya-19/Stock-Market-Prediction",
    previewUrl: "https://github.com/naziya-19/Stock-Market-Prediction",
  },
  {
    id: 3,
    title: "OptiTrip - Tourist Path Optimization Website",
    description: "Offer's optimal tourist paths for visiting places of interest using the Travelling Salesman Problem Algorithm.",
    image: "../../images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/naziya-19/optimal-path-finder",
    previewUrl: "https://www.youtube.com/watch?v=oStZ-PFVQFA",
  },
  {
    id: 4,
    title: "Object Detection using AI",
    description: "Detect some basic day to day life objects.",
    image: "../../images/projects/4.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/naziya-19/Colour-and-Object-Detection",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "File upload delete view in-mongo",
    description: "CRUD operations app using MongoDB, Express, nodeJS.",
    image: "../../images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/naziya-19/image-upload-delete-view-in-mongo",
    previewUrl: "https://github.com/naziya-19/image-upload-delete-view-in-mongo",
  },
  {
    id: 6,
    title: "AI Tic - Tac - Toe",
    description: "A simple application of AI in Tic Tac Toe Game using Minimax Algorithm using python turtle libirary.",
    image: "../../images/projects/6.png",
    tag: ["All", "Data Science"],
    gitUrl: "https://github.com/naziya-19/AI-Tic-Tac-Toe?tab=readme-ov-file",
    previewUrl: "https://github.com/naziya-19/AI-Tic-Tac-Toe?tab=readme-ov-file",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
