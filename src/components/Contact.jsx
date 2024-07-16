import '../styles/Contact.css';

export default function Contact(){
    return(
        <footer id='contact'>
            <div>
                <h2>Contactez-moi</h2>
                <p>19 rue du midi, 30650 Rochefort-du-Gard</p>
                <p>06 40 21 64 58</p>
                <p>karl.berod@gmail.com</p>
            </div>
            <div>
                <h2>Retrouvez moi sur les réseaux:</h2>
                <div className='footer-icons'>
                    <a href="https://www.instagram.com/beroddev/" target='_blank' rel='noreferrer'><i class="fa-brands fa-instagram fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/karlberod/" target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin fa-3x"></i></a>
                    <a href="https://github.com/KarlBerod" target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-github fa-3x"></i>
                        <span class="sr-only">Visit my GitHub profile</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}