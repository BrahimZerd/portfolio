import P4img from '../assets/homepageP4.png'


export default function Project4 () {
    return(
        <div className='landingDiv'>
            <span>Landing Page</span>
            <a href={P4img}>
            <img src={P4img} alt="homepage P4" />
            </a>
        </div>
    )
}