import React from "react";
import './style.css';
import PaintBg from '../images/PaintBg1.png';
import PaintBg2 from '../images/PaintBg3.png';
import { ThemeContext } from "../contexts/ThemeContext";

const About = () => {

    return (
        <ThemeContext.Consumer>{(themeContext) => {

            const { isDarkTheme, lightTheme, darkTheme, changeTheme } = themeContext;
            const theme = isDarkTheme ? darkTheme : lightTheme;

            return (
                <div id='aboutContainer' style={{ background: theme.background }}>
                    <div id='aboutTexts'>
                        <div className='aboutText1'>
                            <h1 id='aboutBigText' >Picturing thoughts.</h1>
                            <p id='aboutSmallText' style={{ color: theme.text }}>Bringing to vivid illustration, the conceptions of the mind.</p>
                        </div>
                        <div id='aboutTextImage'>
                            <img src={PaintBg2} alt='background' />
                        </div>
                        <div className="aboutText2" style={{ boxShadow: theme.boxShadow }}>
                            <p id="aboutHeader">About ImageVault</p>
                            <p id='aboutdesc' style={{ color: theme.grey }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<dfn>ImageVault</dfn> provides stunning high-quality free stock images to help designers, bloggers and everyone looking for visuals to find great photos that can be used for free.&nbsp;
                                <dfn>ImageVault</dfn> is powered by Pixabay and functions under the Pixabay License.<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All users should also note that <dfn>ImageVault</dfn> is only a test website and is not yet fully operational.
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A part of the <dfn>ImageVault</dfn> website that is still under development is the employment and utilization of Artificial Intelligence to provide more suitable and high-quality images.</p>
                        </div>
                    </div>
                    <div id='aboutImage' >
                        <img src={PaintBg} width='375px' height='666px' />
                    </div>
                </div>
            )
        }}</ThemeContext.Consumer>
    )
}

export default About;