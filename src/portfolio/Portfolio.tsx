import React from 'react';
//import logo from './../logo.svg';
import './Portfolio.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import QuoteMachine from './../portfolio/pages/projects/random-quote-machine/RandomQuoteMachine';
import Home from './../portfolio/pages/home/Home';

class Portfolio extends React.Component {
    render = () => (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects/random-quotes" element={<QuoteMachine />}/>
            </Routes>
        </Router>
    );
}

export default Portfolio;
