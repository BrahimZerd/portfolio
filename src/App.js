import React, { useEffect } from 'react';
import profilPicture from './assets/profil.png'
import { onHover } from './features/hover';
import SlashDiv from './component/slash';
import { Banner } from './component/banner';
import { useState } from 'react';
import Project4 from './component/homepageP4';
import Projet5 from './component/projet5';
import Carousel from 'react-multi-carousel';
import Contact from './component/contact';
import Pres from './component/presentation';
import Question from './component/openCarousel';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import './index.css';
import HeroElement from './component/Hero';


function App() {
  const [Loading, SetLoading] = useState(false)

  
  
  const banne = () => {
    
    setTimeout(() => {
      
      if(Loading === false){
    const element = document.getElementById('logo')
    element.style.animation = "5s ease infinite fadeIn"
      element.addEventListener('click',function() {
        element.style.transform = "translateY(-1500px)"
        setTimeout(() => {
          SetLoading(true)


          
          
        },2000)

      })
      
      element.style.transform = "translateY(300px)"
      element.style.opacity = "0"

      
     

      
    } else {console.log('lol')
    


  }

  },1000)}
 
  const buttonHandler = () => {
    setTimeout(() => {
    
    
  })

    
  }

   
   useEffect(() => {
      
      
  
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
        <div className='blockTitle'>
      <div className='logoH'>B</div>
        <h1 id="title">
        
        </h1>
        </div>
        
        

        <span style={{margin:'4%',marginTop:'5%'}} >web 3 explorer / react developper</span>
        
       
      </header>
      
      
      
      {/*<div id='disparition'>
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
      </div>*/}
  <Contact 
  />
  </div>
      
      
      

   
      
      
        
        
       
        
    :
    <div>
    <Banner />
    
    </div> }
    </div>  
          
    
  );
}

export default App;
