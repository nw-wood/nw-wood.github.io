import React, { Component } from 'react';
import './RandomQuoteMachine.css';

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

	render = () => (
        
        <div className="back-drop">
            <section className="fa fa-quote-left"></section>
            <div id="quote-box">
                <div id="quote" className={this.state.fade}>
                    <div id="quote-text">{this.state.quote}</div>
                    <div id="author-text">{this.state.author}</div>
                </div>
                <div id="user-interactions">
                    <a  id="tweet-quote" className="fa fa-brands fa-twitter" href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - Kanye West`}> </a>
                    <button id="new-quote-btn" className="button" onClick={this.handleClick}>New Random Quote</button>
                </div>
            </div>
        </div>
        
    );

    handleClick = () => this.requestAPIQuote();
    
    requestAPIQuote = async () => {
        fetch(quoteAPIURL)
            .then((response) => {
                return response.json();
            })
            .then((message) => {
                console.log('message:', message.quote);
                    if (this.state.transition !== true) {
                        this.setState({ fade: 'fade-out', transition: true}, () => {
                            setTimeout(() => {
                                const yeezyQuote: Quote = { quote: `${message.quote}.`, author: "Kanye West" }
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