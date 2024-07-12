import AboutMe from "./AboutMe";
import Gallery from "./Gallery";
import Skills from "./Skills";
import '../styles/HomePage.css';

export default function HomePage(){
    return(
        <div>
            <AboutMe/>
            <Gallery/>
            <Skills/>
        </div>
    )
}