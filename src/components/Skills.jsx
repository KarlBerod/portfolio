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

    useEffect(() => {
        const animation = gsap.to(".left-to-right > .skill-item", { x: window.innerWidth+120, ease: 'linear', duration: 25, 
        stagger: {
            each: 5,
            repeat: -1,
            repeatDelay: 25,
            onRepeat: function() {
                gsap.set(this.targets(), { x: 0 });
            }
        },
        });
        const animation2
        animation.progress(0.5);
    }, []);

    return(
        <section className='skills'>
            <h2>Mes compétences</h2>
            <div className='skills-container'>
                <div className='left-to-right'>
                    <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoHtml} alt="logo html" />
                    </a>
                    <a href="https://isocpp.org/" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoC} alt="logo C++" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoCss} alt="logo css"  />
                    </a>
                    <a href="https://gsap.com/" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoGsap} alt="logo gsap"  />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoJavascript} alt="logo javascript"  />
                    </a>
                </div>
                <div className='right-to-left'>
                    <a href="https://www.python.org/" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoPython} alt="logo python"  />
                    </a>
                    <a href="https://react.dev/" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoReact} alt="logo react"  />
                    </a>
                    <a href="https://redux.js.org/" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoRedux} alt="logo redux"  />
                    </a>
                    <a href="https://sass-lang.com/" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoSass} alt="logo sass"  />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" target='_blank' rel='noreferrer' className='skill-item'>
                        <img src={logoSql} alt="logo sql"  />
                    </a>
                </div>
            </div>

        </section>
    )
}