import React from 'react';
import './App.css';
import About from './components/About';
import Main from './components/Main';
import {ParallaxProvider} from "react-scroll-parallax";

function App() {
    return (
        <ParallaxProvider>
            <div className="App">
                {/*<div className="header">*/}
                {/*    About Contact Portfolio*/}
                {/*</div>*/}
                <Main/>
                <About/>

            </div>
        </ParallaxProvider>
    );
}

export default App;
