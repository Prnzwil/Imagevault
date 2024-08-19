import React from 'react'
import Intro from './components/Intro';
import App from './components/App';
import Default from './components/Default';
import './components/style.css';

const build = () => {
    return(
        <div id='build'>
            <Intro />
            <App />
            <Default />
        </div>
    )
}

export default build;