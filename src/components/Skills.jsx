import '../styles/Skills.css';
import gsap from 'gsap';
import { useEffect } from 'react';
import logoHtml from '../images/logo_html.webp'
import logoC from '../images/logo_c++.webp'
import logoCss from '../images/logo_css.webp'
import logoGsap from '../images/logo_gsap.webp'
import logoJavascript from '../images/logo_javascript.webp'
import logoPython from '../images/logo_python.webp'
import logoReact from '../images/logo_react.webp'
import logoRedux from '../images/logo_redux.webp'
import logoSass from '../images/logo_sass.webp'
import logoSql from '../images/logo_sql.webp'


export default function Skills(){
    const width=window.innerWidth;
    useEffect(() => {
        const animation = gsap.to(".skills-container > .left-to-right", { 
            x: window.innerWidth+120, ease: 'linear', duration: (width <= 500 ? 15 : 25), 
            stagger: {
                each: 5,
                repeat: -1,
                repeatDelay: (width <= 500 ? 10 : 0),
                onRepeat: function() {
                    gsap.set(this.targets(), { x: 0 });
            }
        },
        });
        const animation2 = gsap.from(".skills-container > .right-to-left", { 
            x: window.innerWidth+120, ease: 'linear', duration: (width <= 500 ? 15 : 25),
            stagger:{
                each: 5,
                repeat: -1,
                repeatDelay: (width <= 500 ? 10 : 0),
                onRepeat: function(){
                    gsap.set(this.targets(), { x: 0 });
                }
            }
        });
        animation.progress(0.5);
        animation2.progress(0.5);
    }, []);

    return(
        <section className='skills' id='compétences'>
            <h2>Mes compétences</h2>
            <div className='skills-container'>
               
                <a href="https://isocpp.org/" target='_blank' rel='noreferrer' className='skill-item left-to-right'>
                    <img src={logoC} alt="logo C++" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank' rel='noreferrer' className='skill-item right-to-left'>
                    <img src={logoCss} alt="logo css"  />
                </a>
                <a href="https://gsap.com/" target='_blank' rel='noreferrer' className='skill-item left-to-right'>
                    <img src={logoGsap} alt="logo gsap"  />
                </a>
                <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target='_blank' rel='noreferrer' className='skill-item left-to-right'>
                    <img src={logoHtml} alt="logo html" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' rel='noreferrer' className='skill-item left-to-right'>
                    <img src={logoJavascript} alt="logo javascript"  />
                </a>
                <a href="https://www.python.org/" target='_blank' rel='noreferrer' className='skill-item right-to-left'>
                    <img src={logoPython} alt="logo python"  />
                </a>
                <a href="https://react.dev/" target='_blank' rel='noreferrer' className='skill-item right-to-left'>
                    <img src={logoReact} alt="logo react"  />
                </a>
                <a href="https://redux.js.org/" target='_blank' rel='noreferrer' className='skill-item right-to-left'>
                    <img src={logoRedux} alt="logo redux"  />
                </a>
                <a href="https://sass-lang.com/" target='_blank' rel='noreferrer' className='skill-item right-to-left'>
                    <img src={logoSass} alt="logo sass"  />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" target='_blank' rel='noreferrer' className='skill-item left-to-right'>
                    <img src={logoSql} alt="logo sql"  />
                </a> 
                
            </div>

        </section>
    )
}