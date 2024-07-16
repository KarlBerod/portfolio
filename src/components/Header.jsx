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
                <a href="/portfolio/">
                    <i class="fa-solid fa-arrow-left fa-xl"></i>
                    <span class="sr-only">Retour à l'accueil</span>
                </a>
            </div>
            <div className={`${isProjectPage? "hidden" : "displayed"} header-right`}>
                <nav>
                    {/* <a href="#accueil">Accueil</a> */}
                    <a href="#projets">Projets <span class="sr-only">Voir la section "Projets"</span></a>
                    <a href="#compétences">Compétences <span class="sr-only">Voir la section "Compétences"</span></a>
                    <a href="#contact">Contact <span class="sr-only">Voir la section "Contact"</span></a>
                </nav>
            </div>
        </header>
    )
}