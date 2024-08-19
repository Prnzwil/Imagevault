import React, { createContext } from "react";
import toggleLight from '../images/Light theme.png';
import toggleDark from '../images/Dark theme.png';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {

    state = {
        isDarkTheme: false,
        lightTheme: {
            text: 'black',
            background: 'white',
            grey: 'rgb(46, 46, 46)',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 9px 0 rgba(0, 0, 0, 0.19)'
        },
        darkTheme: {
            text: 'white',
            background: 'rgb(22, 22, 22)',
            grey: 'rgb(209, 209, 209)',
            boxShadow: '0 2px 4px 0 rgba(247, 245, 245, 0.2), 0 3px 9px 0 rgba(255, 255, 255, 0.19)'
        }
    };

    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme});
    };

    render() {
        return(
            <ThemeContext.Provider value= {{...this.state, changeTheme: this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider;