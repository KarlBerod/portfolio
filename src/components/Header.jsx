import '../styles/Header.css';

export default function Header(){
    return(
        <header>
            <div className="header-left">
                <i class="fa-solid fa-arrow-left fa-xl"></i>
            </div>
            <div className="header-right">
                <nav>
                    <a href="#accueil">Accueil</a>
                    <a href="#projets">Projets</a>
                    <a href="#compétences">Compétences</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}