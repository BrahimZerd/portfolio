import React, { useState } from "react";
import Question from "./openCarousel";


const Contact = () => {
 
    const [sliderContact, setSliderContact] = useState(false)
    
    

     function Handle () {
      console.log('hello')
      const slid = document.getElementById('conta');
      console.log(sliderContact)
      !sliderContact ? slid.style.translate = '50px' : slid.style.translate = '150px';
      slid.style.transition = 'all 2s'
      !sliderContact ? setSliderContact(true) : setSliderContact(false)
     }
     
    return(
       
        <div className='backgroundContact'  >
        <div className="social-buttons" id="conta" style={{translate:'155px'}}
        
       
        >
            
            <div className="backgroundContact">
  <a href="/" className="social-button social-button--facebook" aria-label="Facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="/" className="social-button social-button--linkedin" aria-label="LinkedIn">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="/" className="social-button social-button--snapchat" aria-label="Snapchat">
    <i className="fab fa-snapchat-ghost"></i>
  </a>
  <a href="/" className="social-button social-button--github" aria-label="GitHub">
    <i className="fab fa-github"></i>
  </a>
  <a href="/" className="social-button social-button--codepen" aria-label="CodePen">
    <i className="fab fa-codepen"></i>
  </a>
  </div>
  </div>
  <Question
  onclick={Handle}
  />
 
  </div>
   
  
  


    )

}

export default Contact;