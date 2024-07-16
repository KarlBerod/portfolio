import '../styles/Header.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header(){
    const location =  useLocation();
    const [isProjectPage, setIsProjectPage] = useState(false);

    useEffect(() =>{
        if(location.pathname.startsWith('/project')){
            setIsProjectPage(true);
        }
        else{
            setIsProjectPage(false);
        }
    },[location]);
    return(
        <header>
            <div className={`${isProjectPage? "displayed" : "hidden"} header-left`}>
                <a href="/portfolio/"><i class="fa-solid fa-arrow-left fa-xl"></i></a>
            </div>
            <div className={`${isProjectPage? "hidden" : "displayed"} header-right`}>
                <nav>
                    {/* <a href="#accueil">Accueil</a> */}
                    <a href="#projets">Projets</a>
                    <a href="#compétences">Compétences</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}