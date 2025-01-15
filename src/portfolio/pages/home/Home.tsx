import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {

    render = () => (
        <div id="back-drop">
                <div id="landing-items">
                    <section id='landing-message'>You've found my (Nathanyel Wood's) website, blog, development portfolio, etc... </section>
                    <section id='project-links'><Link id="project-quotes" to="/projects/random-quotes">Random Quotes</Link></section>
                    <section id='blurb'>
                        This website was developed using React, TypeScript, Font Awesome, OSS-Code (VSCode on Linux), Git, NPM, FCC and more.
                    </section>
                    <section id='thanks'>
                        A special thank you to GitHub for web hosting using GitHub Pages.
                    </section>
                    <section id='notice'>
                        Ignore the testing tool in the top right for the time being!
                    </section>
                </div>
        </div>
    );
}

export default Home;
