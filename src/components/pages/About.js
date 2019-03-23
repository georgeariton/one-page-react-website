import React, {Component} from 'react';
import Navigation from "./header/Navigation";

class About extends Component {
    render() {
        return (
            <div className="page about-page">
                <header>
                    <Navigation/>
                    <div className="masthead">
                        <h2>Much to say...</h2>
                        <h1>About me!</h1>
                    </div>
                </header>
                About Page
            </div>
        );
    }
}

export default About;
