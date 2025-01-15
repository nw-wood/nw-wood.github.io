import React from 'react';
//import logo from './../logo.svg';
import './Portfolio.css';
import QuoteMachine from './../portfolio/pages/projects/random-quote-machine/RandomQuoteMachine';

class Portfolio extends React.Component {
    /* constructor(props: any) {
        super(props);
    } */

    render = () => (
        <div>
          <QuoteMachine />
        </div>
    );
}

export default Portfolio;
