import React from "react";
import './style.css';
import FlowerBg from '../images/FlowerBg.png';
import FlowerBg2 from '../images/FlowerBg2.png';
import Contact1 from '../images/Contact1.png';
import Contact2 from '../images/Contact2.png';
import Contact3 from '../images/Contact3.png';
import { ThemeContext } from "../contexts/ThemeContext";

const Contact = () => {
    return(
        <ThemeContext.Consumer>{ (themeContext) => {
            const {isDarkTheme, lightTheme, darkTheme, changeTheme} = themeContext;
            const theme = isDarkTheme ? darkTheme : lightTheme;
            return(
                <div id= 'contactContainer' style={{background: theme.background}}> 
                    <div id= 'contactTexts'>
                        <div className='contact1'>
                            <h1 id= 'contactBigText' >Wanna get in touch?</h1>
                            <p className= 'contactSmallText' style={{color: theme.grey}}>Questions not answered yet? <br id= 'br1'/>We'd love to hear from you. <br id= 'br2'/>We are here to help!</p>
                            <img src= {FlowerBg} alt="Image" id= 'contact1image1' />
                        </div>
                        <div className="contact">
                            <p id="contactHeader">Contact ImageVault</p>
                            <p className= 'contactSmallText' style={{color: theme.grey}}>Here's how you can reach us.</p>
                            <div id= 'contactPlatforms'>
                                <div className= 'contactPlatform' style={{boxShadow: theme.boxShadow}}>
                                    <div className="platImg">
                                        <img 
                                            src= {Contact2}
                                            alt= 'Chat Icon'  
                                        />
                                    </div>
                                    <div className= 'platText'>
                                        <h4 style= {{color: theme.text}}>CHAT</h4>
                                        <p style={{color: theme.grey}}>Got Questions? We've got answers!<br />Typical reply time: Within Minutes.</p>
                                    </div>
                                    <a href="" className= 'platButton'>CHAT WITH US</a>
                                </div>
                                <div className= 'contactPlatform' style={{boxShadow: theme.boxShadow}}>
                                    <div className="platImg">
                                        <img 
                                            src= {Contact3}
                                            alt= 'Email Icon' 
                                        />
                                    </div>
                                    <div className= 'platText'>
                                        <h4 style= {{color: theme.text}}>E-MAIL</h4>
                                        <p style={{color: theme.grey}}>Typical reply time: Within a day or two.</p>
                                    </div>
                                    <a href="mailto:geoprnzwil@gmail.com?subject=Me" className= 'platButton'>EMAIL US</a>
                                </div>
                                <div className= 'contactPlatform' style={{boxShadow: theme.boxShadow}}>
                                    <div className="platImg">
                                        <img 
                                            src= {Contact1}
                                            alt= 'LinkedIn Icon' 
                                        />
                                    </div>
                                    <div className= 'platText'>
                                        <h4 style= {{color: theme.text}}>LINKEDIN</h4>
                                        <p style={{color: theme.grey}}>Connect on LinkedIn.</p>
                                    </div>
                                    <a href="" className= 'platButton'>CONNECT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= 'contact1' >
                        <img src= {FlowerBg2} id= 'contact1image2' />
                    </div>
                </div>
            )
        }}</ThemeContext.Consumer>
    )
}

export default Contact;