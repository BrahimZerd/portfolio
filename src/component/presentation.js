
import Teamlogo from '../assets/team.svg'
import Bug from '../assets/bug.svg'
import logor from '../assets/react.svg'
import profil from '../assets/profil.png'
import { useState } from 'react'


export default function Pres () {

    const [isHoverd, SetHoverd] = useState(false)


    return(
        <div className="pre">
            <span className='blockspan'>BRAHIM</span>
            
 
 <div className='paragraphe'>
  <p> 
    Hello i'm Brahim, this is my website.<br/><br/>
    Just finished my learning in React front development, i made this website to show you my skills, present myself & my vision of work.<br/><br/>
    Totally focus in web 3 projects, i'm actually learning back-end technologies to permit me to setup a full website by myself.
  

    </p>
      <span> Enjoy!  </span> 

  </div>
 
  
  

            
            <div className="boxes">

                <div className="box"
                onMouseEnter={() => SetHoverd(true)}
                onMouseLeave={() => SetHoverd(false)}><span></span>
                <img src={profil} alt="profil" />
                {/*<img src={Teamlogo} alt='img' />*/}
                                
                {/*<img src={Teamlogo} alt='img' />*/}
                
                </div>
                
    </div>
       
        
        
        </div>
    );

}