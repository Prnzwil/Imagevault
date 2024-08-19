import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import Contact1 from '../images/Contact1.png';
import Contact2 from '../images/Contact2.png';
import Contact3 from '../images/Contact3.png';
import Logo from '../images/Logo.png';


const Footer = () => {
    return(
        <div id="footer">
            <div id= 'footerIcons'>
                    <a href= ''><img src= {Contact1} /></a>
                    <a href= ''><img src= {Contact3} /></a>
                    <a href= ''><img src= {Contact2} /></a>
            </div>
            <div className="footerLink">
                <Link to= '/'>Home</Link>
                <Link to= '/about'>About</Link>
                <Link to= '/contact'>Contact</Link>
            </div>
            <div id="footerAddress">
                Banana Island
                <div className="footerDot">
                </div>
                Lagos
                <div className="footerDot">
                </div>
                Nigeria
            </div>
            <div className="footerEmail">
                <img />
                geoprnzwil@gmail.com
            </div>




            <div id="footerLogo">
                <img src= {Logo} alt= 'Logo'/>
            </div>
            <div id= 'footerFoot'>
                <div id= 'footerCopy'>
                    Copyright reserved &#169; ImageVault 2023
                </div>
                <div id= 'footerPower'>
                    Powered by - Pixabay
                    <div className="footerDot">
                    </div>
                    ImageAI
                    <div className="footerDot">
                    </div>
                    Designed by - Princewill Graphs Inc.
                </div>
            </div>
        </div>
    )
}

export default Footer;