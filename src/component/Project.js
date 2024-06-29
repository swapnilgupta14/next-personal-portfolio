import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  CIcon,
  // TypeScriptIcon,
  // ExpressIcon,
  NodeJSIcon,
  PostmanIcon,
  // DartIcon,
  // FlutterIcon,
  // ReactNativeIcon,
  HTMLIcon,
  CSSIcon,
  // BootstrapIcon,
  ReduxIcon,
  SassIcon,
  JavaScriptIcon,
  TailwindCSSIcon,
  ReactIcon,
  MySQLIcon,
  MongoDBIcon,
  // HerokuIcon,
  GitIcon,
  FirebaseIcon,
  Github,
} from './icon/icon';
import Link from 'next/link';
// src/data/projectsData.js

const projectsData = [

  {
    title: "Geospatial-Remote-Sensing-application - In Developement",
    description: "An e-commerce platform with a customizable product catalog.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    img: "./p6.webp",
    link: "https://github.com/swapnilgupta14/Geospatial-Remote-Sensing-application"
  },
  {
    title: "Electronic Medical Record application using Next.js, FAST API and MySQL with cloud as AWS.",
    description: "A web application that allows users to track their daily tasks.",
    technologies: ["React", "Redux", "CSS"],
    img: "./p1.webp",
    link: "https://github.com/swapnilgupta14/Mediblock"
  },
  {
    title: "CNN-Based-Neural-Network-based-on-ResNet50-Architecture ",
    description: "A mobile app for managing personal finances and budgeting.",
    technologies: ["React Native", "Expo", "SQLite"],
    img: "./p4.webp",
    link: "https://github.com/swapnilgupta14/CNN-Based-Neural-Network-for-the-Autonomous-Vehicle-based-on-ResNet50-Architecture"
  },
  {
    title: "Fully responsive personal-portfolio using Next.js & Sass with custom animations, build from scratch.",
    description: "A social media application with real-time messaging.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    img: "./p3.webp",
    link: "https://github.com/swapnilgupta14/next-personal-portfolio"
  },
  {
    title: "Stock Price Prediction using LSTM.",
    description: "A blogging platform with markdown support and user authentication.",
    technologies: ["Gatsby", "GraphQL", "Netlify"],
    img: "./p2.webp",
    link: "https://github.com/swapnilgupta14/Stock-Growth-Prediction-Project-using-LSTM"
  },
  {
    title: "IP Address Tracker using HTML, CSS, JavaScript",
    description: "A portfolio website showcasing various web development projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    img: "./p5.webp",
    link: "https://github.com/swapnilgupta14/IP-Address-Tracker"
  }
];

const experienceData = [
  {
    companyTitle: "Wyvate Tech Services Pvt. Ltd.",
    img: "",
    detail: [
      {
        jobTitle: "Web Developer Intern",
        description: "",
        technologies: [],
        link: "",
        duration: { from: "12/2023", to: "Present" }
      },
      {
        jobTitle: "Student Intern",
        description: "",
        technologies: [],
        link: "",
        duration: { from: "09/2023", to: "12/2023" }
      }
    ]
  },
  {
    companyTitle: "Euphelity Pvt. Ltd.",
    img: "",
    detail: [
      {
        jobTitle: "Graphic Designer Intern",
        description: "Worked on the The Special School Project to design mind maps fro their students.",
        technologies: [],
        link: "",
        duration: { from: "06/2023", to: "09/2023" }
      },
    ]
  }
]

const icons = [
  { Component: CIcon, label: 'C Language' },
  // { Component: TypeScriptIcon, label: 'TypeScript' },
  // { Component: ExpressIcon, label: 'Express' },
  // { Component: NodeJSIcon, label: 'NodeJS' },
  { Component: PostmanIcon, label: 'Postman' },
  // { Component: DartIcon, label: 'Dart' },
  // { Component: FlutterIcon, label: 'Flutter' },
  // { Component: ReactNativeIcon, label: 'React Native' },
  { Component: HTMLIcon, label: 'HTML' },
  { Component: CSSIcon, label: 'CSS' },
  // { Component: BootstrapIcon, label: 'Bootstrap' },
  { Component: ReduxIcon, label: 'Redux' },
  { Component: SassIcon, label: 'Sass' },
  { Component: JavaScriptIcon, label: 'JavaScript' },
  { Component: TailwindCSSIcon, label: 'Tailwind CSS' },
  { Component: ReactIcon, label: 'React' },
  { Component: MySQLIcon, label: 'MySQL' },
  { Component: MongoDBIcon, label: 'MongoDB' },
  // { Component: HerokuIcon, label: 'Heroku' },
  { Component: GitIcon, label: 'Git' },
  { Component: FirebaseIcon, label: 'Firebase' },
];

const Project = () => {
  // const [visibleProjects, setVisibleProjects] = useState([]);
  // const [visibleExperience, setVisibleExperience] = useState([]);
  const cardRefs = useRef([]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 768);
    }
    );
  }, []);

  return (
    <div className="detail-container">

      <div className='container-title' id='projects'><h2>PROJECTS</h2></div>

      <div className='project-container'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <div
              className={`project-card`}
              data-index={index}
              onMouseMove={(e) => {
                if (!isMobile) {
                  const card = cardRefs.current[index];
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left - 35;
                  const y = e.clientY - rect.top - 35;
                  card.querySelector('.button').style.left = `${x}px`;
                  card.querySelector('.button').style.top = `${y}px`;
                }
              }}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <img className="project-image" src={project.img} alt="image" />

              {isMobile ? (
                <h2>
                  <a href={project.link}>{project.title}</a>
                </h2>
              ) : (
                <h2>{project.title}</h2>
              )}
              {!isMobile && (<div className="hover-bg">
                <a
                  href={project.link}
                  className="button"
                >
                  <Github color={'#000000'} width={30} height={30} />
                </a>
              </div>)}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className='container-title' id='experience'><h2>EXPERIENCE</h2></div>

      <div className='experience-container'>

        <div className='skill-container'>
          <h4 className='experience-sub-container'>Skill I have Acquired - </h4>

          <div className="wrapper">
            {icons.map(({ Component, label }, index) => (
              <div
                key={index}
                className={`icon-container`}
              >
                <Component />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='companies-container' >
          <h4 className='experience-sub-container'>Work Experience</h4>
          <div className="wrapper">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className={`experience-card`}
                data-index={index}
              >
                <h3 className="company-title">{experience.companyTitle}</h3>
                {experience.img && <img className="company-image" src={experience.img} alt="image" />}
                <div className="experience-details">
                  {experience.detail.map((detail, detailIndex) => (
                    <div key={detailIndex} className="job-detail">
                      <div className="line"></div>
                      <div className="content">
                        <h4 className="job-title">{detail.jobTitle}</h4>
                        <p className="duration">{`${detail.duration.from} - ${detail.duration.to}`}</p>

                        <p className="description">{detail.description}</p>

                        <div className="technologies">
                          {detail.technologies.map((technology, technologyIndex) => (
                            <span key={technologyIndex} className="technology">{technology}</span>
                          ))}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Project;