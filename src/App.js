import React, { useEffect } from 'react';
import { onHover } from './features/hover';
import SlashDiv from './component/slash';
import { Banner } from './component/banner';
import { useState } from 'react';
import Project4 from './component/homepageP4';
import Projet5 from './component/projet5';
import Carousel from 'react-multi-carousel';
import Load from './features/loader';
import './App.css';
import 'react-multi-carousel/lib/styles.css';


function App() {
  const [Loading, SetLoading] = useState(false)
  const banne = () => {
    
    setTimeout(() => {

      if(Loading === false){
    const element = document.getElementById('logo')
    document.querySelector('body').style.backgroundColor = "#67648E"
    element.style.animation = "2s ease infinite fadeIn"
      element.addEventListener('click',function() {
        element.style.transform = "translateY(-1500px)"
        setTimeout(() => {
          SetLoading(true)
          document.querySelector('body').style.animation = "fadeBackground 3s"

          
          
        },2000)
      })
      
      element.style.transform = "translateY(-500px)"
      element.style.opacity = "0"



      
    } else {console.log('lol')
    document.getElementById('disparition').style.opacity ="1"
    document.querySelector('body').style.backgroundColor = "#fff"


  }

  },1000)}
 
  const buttonHandler = () => {
    
    
  }

   
   useEffect(() => {
    
      console.log(Loading)
  
   },[Loading])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  banne()
  return (
     
    <div style={{height:'100%'}}>
      {Loading ?
      <div>
      <header >
        <h1 id="title">
        Brahim Zerd 
        </h1>
        <span >web 3 explorer / react developper</span>
        <div className='navDiv'>
          <nav>
            <a href='/page'>Contact</a>
            <a href='/visualize'>visualize</a>
          </nav>
        </div>
      </header>
      <div id='disparition'>
      <Carousel
      
   
    responsive={responsive}
    
    keyBoardControl={true}
    
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    swipeable={false}
  draggable={false}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  
   
  >
    <Projet5 />
    <Project4 />
    <Projet5 />
    <Project4 />
    <Projet5 />
    <Project4 />
    <Projet5 />
    <Project4 />
    
  </Carousel>;
  </div>
  </div>
      
      
      

   
      
      
        
        
       
        
    :
    <div>
    <Banner />
    
    </div> }
    </div>  
          
    
  );
}

export default App;
