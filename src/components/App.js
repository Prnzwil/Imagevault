import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios'
import ImageList from './ImageList';
import { ThemeContext } from '../contexts/ThemeContext';
import { createClient } from 'pexels';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { images: [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    // componentDidMount() {
    //      document.getElementById("navBarContainer").style.display = 'none';
    // }

    async onSearchSubmit(entry) {

        // const client = createClient('');
        // const query = entry;
        // client.photos.search({query, per_page: 1}).then(photos => {...});
        // console.log(client);

        // var response = await axios.get(`https://api.pexels.com/v1/search?key=j9ub6sccRFm0DrxTDZQfgw9OmlBge5ps1czR84nBq0GIOWG6NToAcalF&query=${entry}&per_page=1`);
        // console.log(response);

        var response = await axios.get(`https://pixabay.com/api/?key=37663355-620dabda34c73efc2e4b374e0&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
        this.setState({ images: response.data.hits })
    }

    render() {
        return (
            <ThemeContext.Consumer>{(themeContext) => {
                const { isDarkTheme, lightTheme, darkTheme, changeTheme } = themeContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                    <div id="MySear_ch" style={{ width: '100%', background: theme.background, paddingTop: '15px' }}>
                        <div className="ui container" style={{ width: '100%', background: theme.background }}>
                            <div class="searchContain" style={{ width: '100%' }}>
                                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                            </div>
                            <div id='searchedImages'>
                                <ImageList images={this.state.images} />
                            </div>
                            we have {this.state.images.length} images
                        </div>
                    </div>
                )
            }}</ThemeContext.Consumer>
        )
    }
}

export default App;