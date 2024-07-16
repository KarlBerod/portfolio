import '../styles/Contact.css';

export default function Contact(){
    return(
        <footer id='contact'>
            <div>
                <h2>Contactez-moi</h2>
                <h3>19 rue du midi, 30650 Rochefort-du-Gard</h3>
                <h3>06 40 21 64 58</h3>
                <h3>karl.berod@gmail.com</h3>
            </div>
            <div>
                <h2>Retrouvez moi sur les réseaux:</h2>
                <div className='footer-icons'>
                    <a href="https://www.instagram.com/beroddev/" target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-instagram fa-3x"></i>
                        <span class="sr-only">Visite mon profil Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/karlberod/" target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-linkedin fa-3x"></i>
                        <span class="sr-only">Visite mon profile Linkedin</span>
                    </a>
                    <a href="https://github.com/KarlBerod" target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-github fa-3x"></i>
                        <span class="sr-only">Visite mon profil Github</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}