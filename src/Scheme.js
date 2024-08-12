import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContextProvider from "./contexts/ThemeContext";
import NavBar from './components/NavBar';
import Build from './build';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Scheme = () => {
    return(
        <BrowserRouter>
            <div style={{width: '100%'}}>
                <ThemeContextProvider>
                    <NavBar />
                    <Routes>
                        <Route path= '/' element= {<Build />} />
                        <Route path= '/about' element= {<About />} />
                        <Route path= '/contact' element= {<Contact />} />
                    </Routes>
                    <Footer />
                </ThemeContextProvider>
            </div>
        </BrowserRouter>
    )
}

export default Scheme;