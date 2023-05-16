import Logo from '../assets/logo.PNG'
import Logo2 from '../assets/LogoBrahim.PNG'

export function Banner () {


      setTimeout(() => {document.getElementById('logo').addEventListener('click',function(){
          this.style.position = 'absolute'
          this.style.top = "-9.7%"
          this.style.right = "83%" 
        })})  
    return (
        <div className="banner" id="logo">
            <img  src={Logo} alt="banner"/>
            
            

        </div>
    )
}