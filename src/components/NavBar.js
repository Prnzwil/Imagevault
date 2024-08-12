import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import Darktheme from '../images/Dark theme.png';
import Lighttheme from '../images/Light theme.png';
import MenuDark from '../images/Menu.png';
import MenuLight from '../images/Menu2.png';
import './style.css';
import { ThemeContext } from '../contexts/ThemeContext';

class NavBar extends React.Component {

    state = {
        clas: false
    };

    render() {
        return (
            <ThemeContext.Consumer>{(themeContext) => {
                const { isDarkTheme, lightTheme, darkTheme, changeTheme } = themeContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                const toggleImage = isDarkTheme ? Lighttheme : Darktheme;
                const toolTip = isDarkTheme ? 'Light Theme' : 'Dark Theme';
                const Menu = isDarkTheme ? MenuLight : MenuDark;
                const navClass = isDarkTheme ? "navDark" : "navLight";

                const call = this.state.clas ? 'change' : 'chan';


                function openNav() {
                    document.getElementById('mySideNav').style.width = '50%';
                    // document.getElementById('main').style.marginRight = '250px';
                }

                function closeNav() {
                    document.getElementById('mySideNav').style.width = 0;
                    // document.getElementById('main').style.marginRight = 0;
                }

                function home() {
                    document.getElementById("home").style.borderBottom = "5px solid red";
                    document.getElementById("contact").style.borderBottom = "none";
                    document.getElementById("about").style.borderBottom = "none";
                    document.getElementById("homeSideNav").style.borderLeft = "5px solid red";
                    document.getElementById("aboutSideNav").style.borderLeft = "5px solid rgba(255, 0, 0, 0)";
                    document.getElementById("contactSideNav").style.borderLeft = "5px solid rgba(255, 0, 0, 0)";
                }

                function about() {
                    document.getElementById("about").style.borderBottom = "5px solid red";
                    document.getElementById("contact").style.borderBottom = "none";
                    document.getElementById("home").style.borderBottom = "none";
                    document.getElementById("aboutSideNav").style.borderLeft = "5px solid red";
                    document.getElementById("homeSideNav").style.borderLeft = "5px solid rgba(255, 0, 0, 0)";
                    document.getElementById("contactSideNav").style.borderLeft = "5px solid rgba(255, 0, 0, 0)";
                }

                function contact() {
                    document.getElementById("contact").style.borderBottom = "5px solid red";
                    document.getElementById("home").style.borderBottom = "none";
                    document.getElementById("about").style.borderBottom = "none";
                    document.getElementById("contactSideNav").style.borderLeft = "5px solid red";
                    document.getElementById("homeSideNav").style.borderLeft = "5px solid rgba(255, 0, 0, 0)";
                    document.getElementById("aboutSideNav").style.borderLeft = "5px solid rgba(255, 0, 0, 0)";
                }

                return (
                    <nav
                        style={{
                            background: theme.background,
                            color: theme.text
                        }}
                    >
                        <div id="main">
                            <div id='nameContainer'>
                                <div id='name'>
                                    <img src={Logo} />
                                    <span>ImageVault.</span>
                                </div>
                            </div>
                            <ul>
                                <li id='toggleThemeContainer'>
                                    <img
                                        src={toggleImage}
                                        onClick={changeTheme}
                                        title={toolTip}
                                        id='toggleTheme'
                                    />
                                </li>
                                <li>
                                    <img
                                        src={Menu}
                                        onClick={openNav}
                                        id='openNav'
                                        title='Menu'
                                    />
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        title='Contact ImageVault'
                                        className={navClass}
                                        // className='NavToGo'
                                        id='contact'
                                        onClick={contact}
                                        style={{ color: theme.text }}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        title='About ImageVault'
                                        className={navClass}
                                        // className='NavToGo'
                                        id='about'
                                        onClick={about}
                                        style={{ color: theme.text }}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        title='Home Page'
                                        className={navClass}
                                        // className='NavToGo'
                                        id='home'
                                        onClick={home}
                                        style={{ color: theme.text }}
                                    >
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div id='mySideNav' className='sideNav'>
                            <Link to='javascript:void(0)' className='closeBtn' onClick={closeNav} title='Close menu'>
                                &times;
                            </Link>
                            <Link to='/' id='homeSideNav' className='sideNavLinks' onClick={home}>Home</Link>
                            <Link to='/about' id='aboutSideNav' className='sideNavLinks' onClick={about}>About</Link>
                            <Link to='/contact' id='contactSideNav' className='sideNavLinks' onClick={contact}>Contact</Link>
                        </div>
                    </nav>
                )
            }}</ThemeContext.Consumer>
        )
    }
}


export default NavBar;