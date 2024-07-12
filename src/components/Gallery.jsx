import '../styles/Gallery.css';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from '../data.json';
import logo_724events from '../images/logo_724events.webp'
import logo_argent_bank from '../images/logo_argent_bank.webp'
import logo_booki from '../images/logo_booki.webp'
import logo_kasa from '../images/logo_kasa.webp'
import logo_nina_carducci from '../images/logo_nina_carducci.webp'
import logo_ohmyfood from '../images/logo_ohmyfood.webp'
import logo_qwenta from '../images/logo_qwenta.webp'
import logo_sophieBluel from '../images/logo_sophieBluel.webp'
import logoHtml from '../images/logo_html_45px.webp'
// import logoC from '../images/logo_c++_45px.webp'
import logoCss from '../images/logo_css_45px.webp'
// import logoGsap from '../images/logo_gsap_45px.webp'
import logoJavascript from '../images/logo_javascript_45px.webp'
// import logoPython from '../images/logo_python_45px.webp'
import logoReact from '../images/logo_react_45px.webp'
import logoRedux from '../images/logo_redux_45px.webp'
import logoSass from '../images/logo_sass_45px.webp'
// import logoSql from '../images/logo_sql_45px.webp'

gsap.registerPlugin(ScrollTrigger);

export default function Gallery(){

    const positions = [
        { x: -(window.innerWidth*0.31) + (Math.random()*100) -50 , y: (Math.random()*470) },
        { x: (Math.random()*100)-50, y: (Math.random()*100) },
        { x: (window.innerWidth*0.31) + (Math.random()*100) -50, y: (Math.random()*100) },
        { x: (Math.random()*100)-50 + (Math.random()*(window.innerWidth*0.31)), y: (Math.random()*100)+370 },
        { x: (Math.random()*100)-50 - (Math.random()*(window.innerWidth*0.31)), y: (Math.random()*100)+740 },
        { x: (Math.random()*100)-50, y: (Math.random()*100)+1110 },
        { x: -(window.innerWidth*0.31) + (Math.random()*100) -50, y: (Math.random()*100)+1110 },
        { x: (window.innerWidth*0.31) + (Math.random()*100) -50, y: (Math.random()*470)+740 },
    ];

    const positionsTablet = [
        { x: -(window.innerWidth*0.24) + (Math.random()*100) -50 , y: (Math.random()*100) },
        { x: -(window.innerWidth*0.24) + (Math.random()*100) -50, y: (Math.random()*100) +400 },
        { x: -(window.innerWidth*0.24) + (Math.random()*100) -50, y: (Math.random()*100) +800 },
        { x: -(window.innerWidth*0.24) + (Math.random()*100) -50, y: (Math.random()*100) + 1200 },
        { x: (window.innerWidth*0.24) + (Math.random()*100) -50, y: (Math.random()*300) },
        { x: (window.innerWidth*0.24) + (Math.random()*100) -50, y: (Math.random()*100) +600 },
        { x: (window.innerWidth*0.24) + (Math.random()*100) -50, y: (Math.random()*100) + 1000 },
        { x: (window.innerWidth*0.24) + (Math.random()*100) -50, y: (Math.random()*100) + 1400 },
    ];

    const positionsPhone = [
        { x: -(Math.random()*window.innerWidth*0.135) , y: 0 },
        { x: -(Math.random()*window.innerWidth*0.135), y: 370 },
        { x: -(Math.random()*window.innerWidth*0.135), y: 740 },
        { x: -(Math.random()*window.innerWidth*0.135), y: 1110 },
        { x: (Math.random()*window.innerWidth*0.135), y: 1480 },
        { x: (Math.random()*window.innerWidth*0.135), y: 1850 },
        { x: (Math.random()*window.innerWidth*0.135), y: 2220 },
        { x: (Math.random()*window.innerWidth*0.135), y: 2590 },
    ];


    useEffect(() => {
        const tl = gsap.timeline({onComplete: () => addScrollTrigger()});
        tl.to(".project-card", { y: -100, ease: "slow", duration: 1}, "+=1.5");
        tl.to(".project-card", { scale: 1.05, ease: "slow"}, "<");
        tl.to('.project-card', {scale: 1.10, duration: 0.3}, "-=0.5");
        tl.to('.gallery > a > .project-card', {rotate: () => randomRotation(), stagger:0.05}, "-=1");
        tl.to('.project-card', {scale: 1, rotate: 0, y: 400,duration: 0.3, onComplete: () => dispacthRandomly() }, "+=0.5");
        tl.to('.About-me', {opacity: 1})
    }, []);

    const addScrollTrigger = () => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card =>{
            gsap.to(card,{
                scrollTrigger:{
                    trigger: card,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play none reverse none",
                },
                transformOrigin: "50% 50%",
                scale: 0
            });
        });
    }

    const randomRotation =() =>{
        return Math.floor(Math.random()* 40) - 20;
    }

    const dispacthRandomly = () =>{
        const cards= document.querySelectorAll('.project-card');
        const shuffledCards = [...cards].sort(() => Math.random() - 0.5);

        shuffledCards.forEach((card, index) => {
            if (window.innerWidth< 1130){
                gsap.to(card, {
                    x: positionsTablet[index].x,
                    y: positionsTablet[index].y,
                });
            }
            if (window.innerWidth<= 760){
                gsap.to(card, {
                    x: positionsPhone[index].x,
                    y: positionsPhone[index].y,
                });
            }
            if (window.innerWidth>= 1130){
                gsap.to(card, {
                    x: positions[index].x,
                    y: positions[index].y,
                });
            }
        });
    }
    
    return(
        <div className='gallery'>
            <Link to={`/project/${data[0].id}`}>
                <ProjectCard logo={logo_booki} skill1={logoHtml} skill2={logoCss}/>
            </Link>
            <Link to={`/project/${data[1].id}`}>
                <ProjectCard logo={logo_ohmyfood} skill1={logoHtml} skill2={logoCss} skill3={logoSass}/>
            </Link>
            <Link to={`/project/${data[2].id}`}>
                <ProjectCard logo={logo_sophieBluel} skill1={logoJavascript} skill2={logoCss} />
            </Link>
            <Link to={`/project/${data[3].id}`}>
                <ProjectCard logo={logo_qwenta}/>
            </Link>
            <Link to={`/project/${data[4].id}`}>
                <ProjectCard logo={logo_kasa} skill1={logoReact} skill2={logoSass}/>
            </Link>
            <Link to={`/project/${data[5].id}`}>
                <ProjectCard logo={logo_nina_carducci} skill1={logoHtml} skill2={logoCss}/>
            </Link>
            <Link to={`/project/${data[6].id}`}>
                <ProjectCard logo={logo_724events} skill1={logoReact} skill2={logoCss}/>
            </Link>
            <Link to={`/project/${data[7].id}`}>
                <ProjectCard logo={logo_argent_bank} skill1={logoReact} skill2={logoRedux}/>
            </Link>
        </div>
    )
}