import React from 'react';
import { onHover } from './features/hover';
import SlashDiv from './component/slash';
import { Banner } from './component/banner';
import './App.css';
import { useState } from 'react';
import HeroElement from './component/Hero';
import Aside from './component/aside';

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
        <div className='navDiv'>
          <nav>
            <a href='/page'>Contact</a>
            <a href='/visualize'>visualize</a>
          </nav>
        </div>
      </header>
      <Aside />
      <Banner />
      
      {/*<HeroElement />*/}

   
      
      
        
        </div>
       
        
       
          
    
  );
}

export default App;
