import React from 'react';
import {Link} from 'react-scroll';
import './TopContent.css';

export const TopContent = () => {
    return (
        <div className='topcontent'>
            <div className='topcontent__container'>
                <h1>Sudhan R</h1>
                <p>An Amateur Full Stack Web Developer...</p>
                <p>I am an enthusiastic learner with a motivated attitude pursuing <br></br> B.Tech information technology at SRM University KTR</p>
                <a href='https://drive.google.com/file/d/1r8nS20CDpwNaG2RJGXvRna6-AqksolxT/view?usp=sharing' target={"_blank"}>
                    <button className='topcontent__downloadbutton'>
                        Download CV
                    </button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                        <button className='topcontent__workbutton'>
                            My Work
                        </button>
                </Link>
    
            </div>
            
        </div>
    );
};
export default TopContent ;