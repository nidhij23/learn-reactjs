import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>{
    return  <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo"></img>
            <img className='sub-logo' src={LogoSubtitle} alt="logo"></img>
        </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className="about-link" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nidhi-jain-38a586a4/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/nidhij23">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCj9VstLhIz7opdMDs3DTaRg">
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                </li>
            </ul>
    </div>
}

export default Sidebar