import React from 'react'
// src/data/projectsData.js

const projectsData = [
    {
        title: "Project One",
        description: "A web application that allows users to track their daily tasks.",
        technologies: ["React", "Redux", "CSS"],
        link: "https://project-one.example.com"
    },
    {
        title: "Project Two",
        description: "An e-commerce platform with a customizable product catalog.",
        technologies: ["Next.js", "Node.js", "MongoDB"],
        link: "https://project-two.example.com"
    },
    {
        title: "Project Three",
        description: "A social media application with real-time messaging.",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        link: "https://project-three.example.com"
    },
    {
        title: "Project Four",
        description: "A mobile app for managing personal finances and budgeting.",
        technologies: ["React Native", "Expo", "SQLite"],
        link: "https://project-four.example.com"
    },
    {
        title: "Project Five",
        description: "A blogging platform with markdown support and user authentication.",
        technologies: ["Gatsby", "GraphQL", "Netlify"],
        link: "https://project-five.example.com"
    },
    {
        title: "Project Six",
        description: "A portfolio website showcasing various web development projects.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://project-six.example.com"
    }
];

const Project = () => {
    return (
      <div className='project-container'>
        {projectsData.map((project, index) => (
          <div key={index} className='project-card'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    );
  }

export default Project;