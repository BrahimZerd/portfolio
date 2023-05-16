import Logo from '../assets/banner.PNG'
import Logo2 from '../assets/LogoBrahim.PNG'

export function Banner () {

    return (
        <div className="banner">
            <img  style= {{display:'none'}}src={Logo} alt="banner"/>
            <img src={Logo2} alt="banner2" />
            

        </div>
    )
}