import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css'

const Footer = () => {
    const copyRight = `
        © 2024 Franciene Vaz - Todos os direitos reservados.
    `
    return(
        <div className="footer">
            <div>Me siga abaixo:</div>
            <div className="list">

            <a href="https://github.com/francienevaz" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faGithub} size="2x" color="black"/>
            </a>
            <a href="https://www.linkedin.com/in/francienevaz" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x' color="blue"/>
            </a>
            <a href="https://www.instagram.com/franciene_vaz/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faInstagram} size='2x' color="brown"/>
            </a>

            </div>

            <pre>
                <code>{copyRight}</code>
            </pre>
        </div>
    )
}

export default Footer;