
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
            <svg width="900" height="600" x='200'>
 { !isHoverd? <text  fill="transparent" font-size="60" x="0" y="0" text-anchor="middle" stroke="white">
  <tspan x="233" dy="3.2em">web developper</tspan>
  <tspan x="483" dy="1.2em">based in France</tspan>

  </text> :
  <text className='try' fill="white" font-size="60" x="0" y="0" text-anchor="middle" stroke="white">
  <tspan x="233" dy="3.2em">web developper</tspan>
  <tspan x="483" dy="1.2em">based in France</tspan>

  </text>
  
  }
</svg>
            
            <div className="boxes">

                <div className="box"
                onMouseEnter={() => SetHoverd(true)}
                onMouseLeave={() => SetHoverd(false)}><span></span>
                <img src={profil} alt="profil" />
                {/*<img src={Teamlogo} alt='img' />*/}
                                
                {/*<img src={Teamlogo} alt='img' />*/}
                
                </div>
                
    </div>
        <div className='forme'
        ></div>
        {isHoverd && (
        <p id='hello' >hello</p>
        )}
        
        
        </div>
    );

}