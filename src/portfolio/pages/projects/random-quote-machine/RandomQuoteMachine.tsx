import React, { Component } from 'react';
import './RandomQuoteMachine.css';
import { Link } from 'react-router-dom';

const quoteAPIURL = "https://api.kanye.rest/";

interface Quote {
    quote: string;
    author: string;
}

const emptyQuote: Quote = { quote: "", author: "Kanye West"};

class QuoteMachine extends Component {
    constructor(props: any) {
        super(props);
        this.requestAPIQuote();
    }

    state = {
        ...emptyQuote,
        fade: '',
        transition: false,
    }

    /* componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    } */

	render = () => (
        <div className="back-drop">
            <section className="fa fa-quote-left"></section>
            <div id="quote-box">
                <div id="quote" className={this.state.fade}>
                    <div id="text">{this.state.quote}</div>
                    <div id="author">{this.state.author}</div>
                </div>
                <div id="user-interactions">
                    <a target="_blank" id="tweet-quote" className="fa fa-brands fa-twitter" href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - Kanye West`} rel="noreferrer"> </a>
                    <button id="new-quote" className="button" onClick={this.handleClick}>New Random Quote</button>
                </div>
            </div>
            <Link id="home-link" to="/">back home</Link>
        </div>
    );

    handleClick = () => this.requestAPIQuote();
    
    requestAPIQuote = async () => {
        fetch(quoteAPIURL)
            .then((response) => {
                return response.json();
            })
            .then((message) => {
                if (this.state.transition !== true) {
                    this.setState({ fade: 'fade-out', transition: true}, () => {
                        setTimeout(() => {
                            const yeezyQuote: Quote = { quote: `${message.quote}`, author: "Kanye West" }
                            this.setState({ ...yeezyQuote, fade: 'fade-in'});
                            setTimeout(() => { this.setState({transition: false})}, 500);
                        }, 500);
                    });
                }
            })
            .catch((err) => {
                console.error("err:", err);
            });
    }
}

export default QuoteMachine;