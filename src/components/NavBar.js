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
        clas : false
    };

    render() {
        return(
            <ThemeContext.Consumer>{ (themeContext) => {
                    const {isDarkTheme, lightTheme, darkTheme, changeTheme} = themeContext;
                    const theme = isDarkTheme ? darkTheme : lightTheme;
                    const toggleImage = isDarkTheme ? Lighttheme : Darktheme;
                    const toolTip = isDarkTheme ? 'Light Theme' : 'Dark Theme';
                    const Menu = isDarkTheme ? MenuLight : MenuDark;

                    const call = this.state.clas ? 'change' : 'chan';


                    function openNav() {
                        document.getElementById('mySideNav').style.width = '70%';
                        // document.getElementById('main').style.marginRight = '250px';
                    }

                    function closeNav() {
                        document.getElementById('mySideNav').style.width = 0;
                        // document.getElementById('main').style.marginRight = 0;
                    }

                    return(
                        <nav 
                            style={{
                                background : theme.background,
                                color : theme.text
                            }}
                        >
                            <div id="main">
                                <div id= 'nameContainer'>
                                    <div id= 'name'>
                                        <img src= {Logo} />
                                        <span>ImageVault.</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <img 
                                            src= {toggleImage} 
                                            onClick= {changeTheme} 
                                            title= {toolTip} 
                                            id= 'toggleTheme'
                                        />
                                    </li>
                                    <li>
                                        <img 
                                            src= {Menu} 
                                            onClick= {openNav} 
                                            id= 'openNav' 
                                            title= 'Menu'
                                        />
                                    </li>
                                    <li>
                                        <Link 
                                            to= "/contact" 
                                            title= 'Contact ImageVault' 
                                            className= 'NavToGo' 
                                            style= {{color: theme.text}}
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to= "/about" 
                                            title= 'About ImageVault' 
                                            className= 'NavToGo' 
                                            style= {{color: theme.text}}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            to= "/" 
                                            title= 'Home Page' 
                                            className= 'NavToGo' 
                                            style= {{color: theme.text}}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div id= 'mySideNav' className= 'sideNav'>
                                <Link to= 'javascript:void(0)' className='closeBtn' onClick= {closeNav}>
                                    &times;
                                </Link>
                                <Link to='/'>Home</Link>
                                <Link to='/about'>About</Link>
                                <Link to='/contact'>Contact</Link>
                            </div>
                        </nav>
                    )
            }}</ThemeContext.Consumer>
        )
    }
}


export default NavBar;