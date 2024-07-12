import '../styles/Header.css';

export default function Header(){
    return(
        <header>
            <div className="header-left">
                <i class="fa-solid fa-arrow-left fa-xl"></i>
            </div>
            <div className="header-right">
                <nav>
                    <a href="#Accueil">Accueil</a>
                    <a href="#Projets">Projets</a>
                    <a href="#Compétences">Compétences</a>
                    <a href="#Contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}