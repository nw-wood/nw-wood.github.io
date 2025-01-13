import React from 'react';
import logo from './../logo.svg';
import './Portfolio.css';

class Portfolio extends React.Component {
    /* constructor(props: any) {
        super(props);
    } */

    render = () => (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            🤠
          </p>
        </header>
      </div>
    );
}

export default Portfolio;
