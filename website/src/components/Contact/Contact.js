import React from 'react';
import {Element} from 'react-scroll';
import {IconButton} from "@material-ui/core";
import {LinkedIn,Instagram,Twitter} from "@material-ui/icons";
import './Contact.css';

 const Contact = () => {
    return (
       <Element className='contact' id='contact'>
           <h1>Contact</h1>
           <div className='contact__container'>
               <p>
                   Email : <span>rbsudhan2001@gmail.com</span>
               </p>
               <p>
                   Github Username : <span>@sudhan6</span>
               </p>
               <div className='contact__icons'>
                   <a href="https://www.linkedin.com/in/sudhan-r-25a66b18b/" target={"_blank"} >
                       <IconButton>
                           <LinkedIn />
                       </IconButton>
                   </a>
                   <a href="https://www.instagram.com/_sudhan_6_/" target={"_blank"}>
                       <IconButton>
                           <Instagram />
                       </IconButton>
                   </a>
                   <a href="https://twitter.com/sudhan_6" target={"_blank"}>
                       <IconButton>
                           <Twitter />
                       </IconButton>
                   </a>
                   <p>
                       <span>Made with Passion 🧡</span>
                   </p>
               </div>
           </div>
       </Element>
    )
}

export default Contact;