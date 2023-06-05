import Pres from "./presentation"

export default function Question({onclick}) {


    return (
        <div style={{display:'flex'}}>
            
            <nav className="mainNav">
                <a >About</a>
                <a href='/visualize'>Experiences</a>
                <a href='/visualize'>My projects</a>
                <a onClick={onclick} >Contact</a>
            <a href='/visualize'>Hire me</a>
            </nav>
            <Pres />
        </div>
    )

}