import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  const projectsData = [
    {
      title: "Geospatial-Remote-Sensing-application - In Developement",
      description: "An e-commerce platform with a customizable product catalog.",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      img: "/p1 (2).webp",
      link: "https://github.com/swapnilgupta14/Geospatial-Remote-Sensing-application",
      demo: "#",
    },
    {
      title:
        "Electronic Medical Record application using Next.js, FAST API and MySQL with cloud as AWS.",
      description:
        "A web application that allows users to track their daily tasks.",
      technologies: ["React", "Redux", "CSS"],
      img: "/p1.webp",
      link: "https://github.com/swapnilgupta14/Mediblock",
      demo: "#",
    },
    {
      title: "CNN-Based-Neural-Network-based-on-ResNet50-Architecture ",
      description: "A mobile app for managing personal finances and budgeting.",
      technologies: ["React Native", "Expo", "SQLite"],
      img: "/p4.webp",
      link: "https://github.com/swapnilgupta14/CNN-Based-Neural-Network-for-the-Autonomous-Vehicle-based-on-ResNet50-Architecture",
      demo: "#",
    },
    {
      title:
        "Fully responsive personal-portfolio using Next.js & Sass with custom animations, build from scratch.",
      description: "A social media application with real-time messaging.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      img: "/p3.webp",
      link: "https://github.com/swapnilgupta14/next-personal-portfolio",
      demo: "#",
    },
    {
      title: "Stock Price Prediction using LSTM.",
      description:
        "A blogging platform with markdown support and user authentication.",
      technologies: ["Gatsby", "GraphQL", "Netlify"],
      img: "/p2.webp",
      link: "https://github.com/swapnilgupta14/Stock-Growth-Prediction-Project-using-LSTM",
      demo: "#",
    },
    {
      title: "IP Address Tracker using HTML, CSS, JavaScript",
      description:
        "A portfolio website showcasing various web development projects.",
      technologies: ["HTML", "CSS", "JavaScript"],
      img: "/p5.webp",
      link: "https://github.com/swapnilgupta14/IP-Address-Tracker",
      demo: "#",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("about");
        if (entry.isIntersecting) {
          entry.target.classList.add('cardShow');
        } else {
          entry.target.classList.remove('cardShow');
        }
      });
    });

    const elements = document.querySelectorAll(".projectHidden");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const projectContainer = document.querySelector('.projects-container');
    const handleScroll = () => {
      const offsetTop = projectContainer.parentElement.offsetTop;
      const projectHeight = window.innerHeight;
      const totalHeight = projectHeight * projectsData.length;
      let percentage = ((window.scrollY - offsetTop) / totalHeight) * 100;
      percentage = Math.max(0, Math.min(percentage, 100 * (projectsData.length - 1) / projectsData.length));
      projectContainer.style.transform = `translate3D(${-(percentage * projectsData.length)}vw, 0, 0)`;

      console.log(`offsetTop: ${offsetTop}`);
      console.log(`window.scrollY: ${window.scrollY}`);
      console.log(`percentage: ${percentage}`);
      console.log(`transform: translate3D(${-(percentage * projectsData.length)}vw, 0, 0)`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectsData]);

  return (
    (true && (<div className='project-wrapper'>
      <div className="container-title " id="projects">
        <h2>Projects</h2>
        <p>Explore a selection of innovative projects demonstrating a blend of creativity and technical expertise.</p>
      </div>
      <div className='outer'>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div className="project " key={index} style={{ '--projects-count': projectsData.length }}>
              <div className='helper-div'>
                <img src={project.img} alt={project.title} />
                <div className='project-text'>
                  <div className='main-text projectHidden'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.technologies.join(', ')}</p>
                  </div>
                  <div className='link-text'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>))
  );
};

export default Projects;