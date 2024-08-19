import React from 'react';
import './style.css'
import { ThemeContext } from '../contexts/ThemeContext';

class SearchInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = { entry: '' }

        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {
        return (
            <ThemeContext.Consumer>{(themeContext) => {
                const { isDarkTheme, lightTheme, darkTheme, changeTheme } = themeContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="searchBoxContainer" style={{ background: theme.background, boxShadow: theme.boxShadow }}>
                            <input
                                type='text'
                                placeholder='Search Images...'
                                id='searchBox'
                                onChange={(event) => this.setState({ entry: event.target.value })}
                                value={this.state.entry}
                                style={{ background: theme.background, color: theme.text }}
                            />
                            <i className="search icon" style={{ color: theme.text }}></i>
                        </div>
                    </form>
                )
            }}</ThemeContext.Consumer>
        )
    }
}

export default SearchInput;