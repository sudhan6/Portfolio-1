import React from 'react'
import "./ExperienceContainer.css"
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience';


 const ExperienceContainer = () => {
    return (
        <Element className='expcontainer' id='exp'>
            <h1>Experience</h1>
            <div className='expcontainer__info'>
                    <Experience number="+8" title="Courses" />
                    <Experience number="3" title="Projects" style={{backgroundColor:"#f64c08"}}/>
                    <Experience number="+5" title="Competitions" />
                    <Experience number="2" title="Internships" style={{backgroundColor:"#f64c08"}}/>
            </div>
            
        </Element>
    );
};

export default ExperienceContainer;
