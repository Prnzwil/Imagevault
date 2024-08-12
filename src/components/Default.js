import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Default = () => {
    const {isDarkTheme, lightTheme, darkTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return(
        <div>
            <a name="search" />
            <div id="default" style={{background: theme.background}}>
                <h3 style={{color: theme.text}}>Frequently Searched Images</h3>
                <div id="defaultImages">
                    <div id="firstColumn" className="column">
                        <img src="Pic/Pic1.jpg" alt="Image" />
                        <img src="Pic/Pic2.jpg" alt="Image" />
                        <img src="Pic/Pic3.jpg" alt="Image" />
                        <img src="Pic/Pic4.jpg" alt="Image" />
                        <img src="Pic/Pic5.jpg" alt="Image" />
                        <img src="Pic/Pic21.jpg" alt="Image" />
                        <img src="Pic/Pic25.jpg" alt="Image" />
                    </div>
          
                    <div id="secondColumn" className="column" >
                        <img src="Pic/Pic6.jpg" alt="Image" />
                        <img src="Pic/Pic7.jpg" alt="Image" />
                        <img src="Pic/Pic8.jpg" alt="Image" />
                        <img src="Pic/Pic9.jpg" alt="Image" />
                        <img src="Pic/Pic10.jpg" alt="Image" />
                        <img src="Pic/Pic22.jpg" alt="Image" />
                        <img src="Pic/Pic26.jpg" alt="Image" />
                    </div>

                    <div id="thirdColumn" className="column">
                        <img src="Pic/Pic11.jpeg" alt="Image" />
                        <img src="Pic/Pic12.png" alt="Image" />
                        <img src="Pic/Pic13.jpg" alt="Image" />
                        <img src="Pic/Pic14.jpg" alt="Image" />
                        <img src="Pic/Pic15.jpg" alt="Image" />
                    </div>

                    <div id="fourthColumn" className="column">
                        <img src="Pic/Pic16.jpg" alt="Image" />
                        <img src="Pic/Pic17.jpg" alt="Image" />
                        <img src="Pic/Pic18.jpg" alt="Image" />
                        <img src="Pic/Pic19.jpg" alt="Image" />
                        <img src="Pic/Pic20.jpg" alt="Image" />
                        <img src="Pic/Pic23.jpg" alt="Image" />
                        <img src="Pic/Pic24.jpg" alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    )   
};

export default Default;