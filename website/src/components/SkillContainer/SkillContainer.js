import React from 'react'
import './SkillContainer.css'
import { Element } from 'react-scroll';
import skilling from'../../assets/skill.jpg';
import LinearProgress from"@material-ui/core/LinearProgress";


const SkillContainer = () => {
    return (
        <Element className='skillcontainer' id='skills'>
            <div className='skillcontainer__image'>
                <img src={skilling} alt=''/>
            </div>
            <div className='skillcontainer__text'>
                <h2>SKILLSET</h2>
                <div className='skillcontainer__skillset'>
                    <h5>C</h5>
                    <div className='skillcontainer__slider skillcontainer__slider1'>
                        <LinearProgress variant='determinate' value={90} /> 
                    </div>
                </div>
                <div className='skillcontainer__skillset'>
                    <h5>C++</h5>
                    <div className='skillcontainer__slider skillcontainer__slider2'>
                        <LinearProgress variant='determinate' value={85} /> 
                    </div>
                </div>
                <div className='skillcontainer__skillset'>
                    <h5>Python</h5>
                    <div className='skillcontainer__slider skillcontainer__slider3'>
                        <LinearProgress variant='determinate' value={65} /> 
                    </div>
                </div>
                <div className='skillcontainer__skillset'>
                    <h5>React</h5>
                    <div className='skillcontainer__slider skillcontainer__slider4'>
                        <LinearProgress variant='determinate' value={75} /> 
                    </div>
                </div>
                <div className='skillcontainer__skillset'>
                    <h5>Javascript</h5>
                    <div className='skillcontainer__slider skillcontainer__slider5'>
                        <LinearProgress variant='determinate' value={75} /> 
                    </div>
                </div>
                <div className='skillcontainer__skillset'>
                    <h5>Html - CSS</h5>
                    <div className='skillcontainer__slider skillcontainer__slider6'>
                        <LinearProgress variant='determinate' value={80} /> 
                    </div>
                </div>
                <div className='skillcontainer__skillset'>
                    <h5>Nodejs</h5>
                    <div className='skillcontainer__slider skillcontainer__slider7'>
                        <LinearProgress variant='determinate' value={40} /> 
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default SkillContainer;