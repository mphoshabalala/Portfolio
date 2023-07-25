import phone from '../resources/telephone_724664.png';
import gmail from '../resources/gmail_5968534.png';
import linkdin from '../resources/linkedin_3536505.png';
import quora from '../resources/quora_174865.png';
import github from '../resources/github_5968810.png'
import Copyright from './Copyright';

const Footer = () => {
    return ( 
        <>
            <div className="footer" id='contacts-id'>
            
            <div className="contacts">
                <h3>Contacts</h3>
                <ul>
                    <li><img id='socials' src={phone} alt="" /> <p>+27 71 257 6112</p></li>
                    <li><img id='socials' src={gmail} alt="" /> <p>mphoshabalala3401@gmail.com</p></li>
                    <li><img id='socials' src={gmail} alt="" /> <p>mphoshabalala3613@gmail.com</p></li>
                </ul>
            </div>
            <div className="social-media">
                <h3>Social Media</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/in/mpho-shabalala-205756282/" target="_blank"><img id='socials' src={linkdin} alt="" /></a></li>
                    <li><a href="https://www.quora.com/profile/Mpho-Shabalala-1" target="_blank"><img id='socials' src={quora} alt="" /></a></li>
                    <li><a href="https://github.com/mphoshabalala" target="_blank"><img id='socials' src={github} alt="" /></a></li>
                </ul>
            </div>

            <div className="content">
            <ul>
                <h3>Navigation</h3>
                    <li><a href="#hero-id">Home</a></li>
                    <li><a href="#about-me-id">About Me</a></li>
                    <li><a href="#projects-id">Projects</a></li>
                    <li><a href="#skills-container-id">My Skills</a></li>
                    <li><a href="#education-id">Education</a></li>
                </ul>
            </div>
        </div>
        <Copyright/>
        </>
        
     );
}
 
export default Footer;