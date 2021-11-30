import React from 'react';
import './ProjectContainer.css';
import Project from '../Project/Project'
import {Element} from 'react-scroll';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img5 from '../../assets/img5.jpg';


const ProjectContainer = () => {
    const projects = [
        {
          img: img1 ,
          title: "Blockgain",
          desc:
            "Its an E-Learning website made for students especially for Blockchain Technology using flutter",
          link: "www.google.com",
        },
        {
            img: img2,
          title: "My Portfolio",
          desc:
            "Its my first portfolio done from scratch using react js",
            link: "https://github.com/sudhan6/Portfolio-1",
        },
        {
            img: img3,
          title: "Coffee Shop Website",
          desc:
            "Its an ordering website UI for a coffee shop ",
            link: "www.google.com",
        },
        {
            img: img5,
          title: "Coming Soon...",
          desc: "",
          link: "www.google.com",
        },
        {
          img: img5,
           title: "Coming Soon...",
           desc: "",
          link: "www.google.com",
        },
        {
          img: img5,
            title: "Coming Soon...",
            desc: "",
            link: "www.google.com",
        },
      ];

    return (
        <Element className="projectcontainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects which I have done for practice.
            </p>
            <div className='projectcontainer__projects'>    
            { projects.map((project,index)=>
                {
                return(
                     <Project
                        key ={index}
                        img ={project.img}
                        title ={project.title}
                        desc ={project.desc}
                        link ={project.link}
                         />
                    );
                }
            )
            }
        </div>
        </Element> 
    );
};

export default ProjectContainer;