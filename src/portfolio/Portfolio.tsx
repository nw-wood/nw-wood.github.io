import React from "react";
//import logo from './../logo.svg';
import "./Portfolio.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import QuoteMachine from "./../portfolio/pages/projects/random-quote-machine/RandomQuoteMachine";
import MarkdownPreviewer from "./../portfolio/pages/projects/markdown-previewer/MarkdownPreviewer";
import Home from "./../portfolio/pages/home/Home";

class Portfolio extends React.Component {
  render = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/random-quotes" element={<QuoteMachine />} />
        <Route
          path="/projects/markdown-previewer"
          element={<MarkdownPreviewer />}
        />
      </Routes>
    </Router>
  );
}

export default Portfolio;
