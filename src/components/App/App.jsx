import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
// import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Home, Game, Words, Error } from '../../pages'


function App() {


    return (

        <div>
            <Router>
                <Header />
                {/* <Main /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/words" element={<Words />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </div>

    );
}

export default App;


