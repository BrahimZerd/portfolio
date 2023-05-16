import React from 'react';
import { onHover } from './features/hover';
import SlashDiv from './component/slash';
import { Banner } from './component/banner';
import './App.css';
import { useState } from 'react';
import Aside from './component/aside';
import Project4 from './component/homepageP4';

function App() {
  const [pop, SetPop] = useState(false)
  setTimeout(() => {
    onHover();
  })
  
  return (
     
    <div>
      <header >
        <h1 id="title">
        Brahim Zerd 
        </h1>
        <span>web 3 explorer / react developper</span>
        <div className='navDiv'>
          <nav>
            <a href='/page'>Contact</a>
            <a href='/visualize'>visualize</a>
          </nav>
        </div>
      </header>
      <Aside />
      <Banner />
      <Project4 />
      
      {/*<HeroElement />*/}

   
      
      
        
        </div>
       
        
       
          
    
  );
}

export default App;
